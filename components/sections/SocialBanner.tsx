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
        <section className="w-full py-20 md:py-28 lg:py-32 px-6 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-cyan-900/20 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-10"></div>

            <div className="w-full max-w-[1200px] mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">
                        Let's Connect!
                    </h2>
                    <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto">
                        I'm always open to new opportunities, collaborations, and interesting conversations.
                        Feel free to reach out on any platform!
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-6">
                        {socialLinks.map(({ Icon, href, label, color }, index) => (
                            <motion.a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                className={`bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl ${color} transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.5),0_0_60px_rgba(168,85,247,0.3)]`}
                                aria-label={label}
                            >
                                <Icon size={40} />
                            </motion.a>
                        ))}
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mt-12 text-gray-400 italic text-lg"
                    >
                        "Code with purpose. Build with vision." 💡
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};
