import React from 'react';
import { Github, Linkedin, Twitter, Instagram, BookOpen, ExternalLink } from 'lucide-react';
import { SOCIAL_LINKS, PERSONAL_INFO } from '@/lib/constants';

const socialIcons = [
    { Icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
    { Icon: Github, href: SOCIAL_LINKS.github, label: 'GitHub' },
    { Icon: BookOpen, href: SOCIAL_LINKS.medium, label: 'Medium' },
    { Icon: ExternalLink, href: SOCIAL_LINKS.hashnode, label: 'Hashnode' },
    { Icon: Twitter, href: SOCIAL_LINKS.twitter, label: 'Twitter' },
    { Icon: Instagram, href: SOCIAL_LINKS.instagram, label: 'Instagram' },
];

export const Footer: React.FC = () => {
    return (
        <footer className="w-full py-20 px-6 relative overflow-hidden bg-grain border-t border-foreground/[0.05]">
            <div className="w-full max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col items-center">
                    {/* Brand / Logo */}
                    <div className="mb-10 text-center">
                        <h3 className="text-2xl font-black tracking-tighter text-foreground">
                            Kumar Dhananjaya<span className="text-cyan-500">.</span>
                        </h3>
                        <p className="text-xs text-muted mt-2 max-w-md">
                            Architecting secure, high-concurrency systems and resilient cloud-native products.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12">
                        {['Home', 'About', 'Experience', 'Projects', 'Open Source', 'Blogs', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                                className="text-xs font-bold uppercase tracking-[0.2em] text-muted hover:text-foreground transition-colors duration-300"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Socials - Clean Grid */}
                    <div className="flex flex-wrap justify-center gap-3 mb-16">
                        {socialIcons.map(({ Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 rounded-2xl glass flex items-center justify-center text-muted hover:text-foreground hover:bg-foreground/10 border border-foreground/10 transition-all duration-300 hover:scale-110"
                                aria-label={label}
                            >
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>

                    {/* Bottom Info */}
                    <div className="w-full pt-10 border-t border-foreground/[0.05] flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                        <p className="text-[11px] uppercase tracking-widest text-muted/60">
                            © {new Date().getFullYear()} Kumar Dhananjaya — Built with Next.js & Tailwind CSS
                        </p>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <p className="text-[11px] uppercase tracking-widest text-muted">All Systems Operational</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
