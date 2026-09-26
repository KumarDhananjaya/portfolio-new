'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, BookOpen, FileText } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/constants';
import { soundFx } from '@/lib/audio';

const socialLinks = [
    { Icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn', color: 'hover:text-blue-400 border-blue-500/20' },
    { Icon: Github, href: SOCIAL_LINKS.github, label: 'GitHub', color: 'hover:text-purple-400 border-purple-500/20' },
    { Icon: FileText, href: SOCIAL_LINKS.medium, label: 'Medium', color: 'hover:text-emerald-400 border-emerald-500/20' },
    { Icon: BookOpen, href: SOCIAL_LINKS.hashnode, label: 'Hashnode', color: 'hover:text-cyan-400 border-cyan-500/20' },
    { Icon: Twitter, href: SOCIAL_LINKS.twitter, label: 'Twitter', color: 'hover:text-sky-400 border-sky-500/20' },
    { Icon: Instagram, href: SOCIAL_LINKS.instagram, label: 'Instagram', color: 'hover:text-purple-400 border-purple-500/20' },
];

export const SocialBanner: React.FC = () => {
    return (
        <section className="w-full py-20 px-6 relative overflow-hidden bg-grain">
            <div className="w-full max-w-7xl mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-14"
                >
                    <h2 className="text-xs uppercase font-mono tracking-[0.3em] text-muted mb-4 font-bold">The Ecosystem</h2>
                    <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-foreground">
                        Global Developer <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400">Footprint.</span>
                    </h3>
                </motion.div>

                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                    {socialLinks.map(({ Icon, href, label, color }, index) => (
                        <motion.a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            onMouseEnter={() => soundFx.playHover()}
                            onClick={() => soundFx.playClick()}
                            className={`px-5 py-4 glass rounded-2xl flex items-center gap-3 text-muted hover:text-foreground hover:bg-card border ${color} transition-all duration-300 shadow-md group`}
                            aria-label={label}
                            data-cursor={label.toUpperCase()}
                        >
                            <Icon size={20} className="group-hover:scale-110 transition-transform" />
                            <span className="text-xs font-mono font-bold tracking-wider">{label}</span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};
