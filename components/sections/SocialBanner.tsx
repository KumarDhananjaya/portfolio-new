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
        <section className="w-full py-24 md:py-32 px-6 relative overflow-hidden bg-[#020617] mt-12">
            {/* Animated high-tech grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>

            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500 rounded-full blur-[150px]"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500 rounded-full blur-[150px]"></div>
            </div>

            <div className="w-full max-w-[1200px] mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-bold font-heading mb-8 bg-gradient-to-br from-cyan-400 via-emerald-400 to-blue-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient tracking-tight">
                        Sync With Me
                    </h2>
                    <p className="text-gray-400 text-xl mb-16 max-w-2xl mx-auto font-light leading-relaxed">
                        I'm always scouting for high-impact collaborations and deep-tech discussions.
                        Let's connect across the ecosystem.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-8">
                        {socialLinks.map(({ Icon, href, label, color }, index) => (
                            <motion.a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.1, y: -5 }}
                                className={`bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl ${color} transition-all duration-300 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] hover:border-cyan-500/50 group relative overflow-hidden`}
                                aria-label={label}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <Icon size={44} className="relative z-10" />
                            </motion.a>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="mt-20 flex flex-col items-center gap-4"
                    >
                        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                        <p className="text-gray-500 font-medium tracking-[0.3em] uppercase text-xs">
                            System Architect // 2026
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
