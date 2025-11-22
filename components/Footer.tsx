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
        <footer className="bg-gradient-to-b from-transparent to-black/50 border-t border-white/10 py-12 md:py-16 w-full flex flex-col justify-center items-center">
            <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
                <div className="flex flex-col items-center gap-6 md:gap-8 max-w-4xl mx-auto">
                    {/* Social Links */}
                    <div className="flex items-center gap-6 md:gap-8">
                        {socialIcons.map(({ Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                                aria-label={label}
                            >
                                <Icon size={24} />
                            </a>
                        ))}
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-gray-400">
                        <a href="#home" className="hover:text-white transition-colors">Home</a>
                        <span>•</span>
                        <a href="#about" className="hover:text-white transition-colors">About</a>
                        <span>•</span>
                        <a href="#experience" className="hover:text-white transition-colors">Experience</a>
                        <span>•</span>
                        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                        <span>•</span>
                        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                    </div>

                    {/* Copyright */}
                    <div className="text-center text-gray-500 text-sm">
                        <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
                        <p className="mt-2">Built with Next.js, Tailwind CSS & Framer Motion</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
