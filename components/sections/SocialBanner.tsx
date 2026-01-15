'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, BookOpen } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/constants';

const socialLinks = [
    { Icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn', color: 'hover:text-blue-400' },
    { Icon: Github, href: SOCIAL_LINKS.github, label: 'GitHub', color: 'hover:text-gray-300' },
    { Icon: Twitter, href: SOCIAL_LINKS.twitter, label: 'Twitter', color: 'hover:text-sky-400' },
    { Icon: Instagram, href: SOCIAL_LINKS.instagram, label: 'Instagram', color: 'hover:text-pink-400' },
    { Icon: BookOpen, href: SOCIAL_LINKS.hashnode, label: 'Hashnode', color: 'hover:text-blue-500' },
];

export const SocialBanner: React.FC = () => {
    return (
        <section className="w-full py-24 md:py-32 px-6 relative overflow-hidden bg-grain">
            <div className="w-full max-w-7xl mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-sm uppercase tracking-[0.4em] text-white/30 mb-6 font-bold">The Ecosystem</h2>
                    <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
                        Expanding the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Digital Footprint.</span>
                    </h3>
                </motion.div>

                <div className="flex flex-wrap items-center justify-center gap-6">
                    {socialLinks.map(({ Icon, href, label }, index) => (
                        <motion.a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="w-24 h-24 md:w-32 md:h-32 glass rounded-[2.5rem] flex items-center justify-center text-white/30 hover:text-white hover:bg-white/5 hover:border-white/20 transition-all duration-700 group"
                            aria-label={label}
                        >
                            <Icon size={32} className="group-hover:scale-110 transition-transform duration-500" />
                        </motion.a>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-24 pt-8 border-t border-white/[0.03]"
                >
                    <p className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold">
                        Established // Two Thousand Twenty Six
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
