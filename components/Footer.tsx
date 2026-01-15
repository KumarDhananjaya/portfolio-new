import React from 'react';
import { Github, Linkedin, Twitter, Instagram, BookOpen } from 'lucide-react';
import { SOCIAL_LINKS, PERSONAL_INFO } from '@/lib/constants';

const socialIcons = [
    { Icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
    { Icon: Github, href: SOCIAL_LINKS.github, label: 'GitHub' },
    { Icon: Twitter, href: SOCIAL_LINKS.twitter, label: 'Twitter' },
    { Icon: Instagram, href: SOCIAL_LINKS.instagram, label: 'Instagram' },
    { Icon: BookOpen, href: SOCIAL_LINKS.hashnode, label: 'Hashnode' },
];

export const Footer: React.FC = () => {
    return (
        <footer className="w-full py-20 px-6 relative overflow-hidden bg-grain border-t border-white/[0.03]">
            <div className="w-full max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col items-center">
                    {/* Brand / Logo */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold tracking-tighter text-white">
                            Kumar<span className="text-white/20">.</span>D
                        </h3>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-16">
                        {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-xs font-bold uppercase tracking-[0.3em] text-white/30 hover:text-white transition-colors duration-300"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Socials - Clean Grid */}
                    <div className="flex gap-4 mb-20">
                        {socialIcons.map(({ Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-500"
                                aria-label={label}
                            >
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>

                    {/* Bottom Info */}
                    <div className="w-full pt-12 border-t border-white/[0.03] flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-[10px] uppercase tracking-widest text-white/20">
                            © {new Date().getFullYear()} — Designed & Developed with Passion
                        </p>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <p className="text-[10px] uppercase tracking-widest text-white/40">Status: All Systems Operational</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
