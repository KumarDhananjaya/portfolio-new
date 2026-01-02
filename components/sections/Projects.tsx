'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { PROJECTS } from '@/lib/constants';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

export const Projects: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
        }
    };

    useEffect(() => {
        const currentRef = scrollRef.current;
        if (currentRef) {
            currentRef.addEventListener('scroll', checkScroll);
            checkScroll(); // Initial check
        }
        return () => currentRef?.removeEventListener('scroll', checkScroll);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = scrollRef.current.clientWidth * 0.8;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section
            id="projects"
            className="w-full py-24 md:py-32 px-6 relative overflow-hidden bg-[#020617]"
        >
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Top & Bottom Border Glows */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent shadow-[0_0_20px_rgba(6,182,212,0.3)]" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent shadow-[0_0_20px_rgba(16,185,129,0.3)]" />

            <div className="w-full max-w-[1400px] mx-auto relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <SectionHeading subtitle="Architecting robust solutions for high-stakes environments">
                            Production Artifacts
                        </SectionHeading>
                    </div>

                    {/* Carousel Navigation */}
                    <div className="flex gap-4">
                        <button
                            onClick={() => scroll('left')}
                            disabled={!canScrollLeft}
                            className={`p-4 rounded-2xl border transition-all duration-300 ${canScrollLeft
                                ? 'border-cyan-500/50 text-cyan-400 bg-cyan-500/5 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]'
                                : 'border-white/5 text-gray-700 cursor-not-allowed'
                                }`}
                            aria-label="Scroll left"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            disabled={!canScrollRight}
                            className={`p-4 rounded-2xl border transition-all duration-300 ${canScrollRight
                                ? 'border-emerald-500/50 text-emerald-400 bg-emerald-500/5 hover:bg-emerald-500/10 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                                : 'border-white/5 text-gray-700 cursor-not-allowed'
                                }`}
                            aria-label="Scroll right"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                {/* Carousel Container */}
                <div
                    ref={scrollRef}
                    className="flex gap-8 overflow-x-auto pb-12 px-2 scrollbar-hide snap-x snap-mandatory"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {PROJECTS.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>

                {/* All Projects Footer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <a
                        href={`https://github.com/KumarDhananjaya?tab=repositories`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 rounded-2xl text-gray-400 hover:text-cyan-400 transition-all border border-white/10 hover:border-cyan-500/30 group font-medium"
                    >
                        <span>View System Repository Archive</span>
                        <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

const ProjectCard: React.FC<{ project: any; index: number }> = ({ project, index }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        // Dynamic tilt factors
        setRotateX((mouseY / (rect.height / 2)) * -10);
        setRotateY((mouseX / (rect.width / 2)) * 10);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="min-w-[320px] md:min-w-[500px] snap-start perspective-1000"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            style={{
                transformStyle: 'preserve-3d',
                rotateX: rotateX,
                rotateY: rotateY,
                transition: 'transform 0.1s ease-out'
            }}
        >
            <div className="h-full flex flex-col rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 hover:border-cyan-500/40 transition-colors duration-500 group overflow-hidden relative shadow-2xl">
                {/* Highlight Glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-[60px] group-hover:bg-cyan-500/20 transition-all" />

                <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-emerald-400 transition-all duration-300 tracking-tight">
                    {project.title}
                </h3>

                <p className="text-gray-400 mb-8 leading-relaxed text-base">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                    {project.technologies.map((tech: string) => (
                        <span
                            key={tech}
                            className="px-3 py-1 rounded-lg bg-cyan-500/5 text-cyan-400 text-xs border border-cyan-500/10 font-bold group-hover:border-cyan-500/30 transition-all"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex gap-8 mt-auto border-t border-white/5 pt-6">
                    {project.github !== '#' && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors text-sm font-bold uppercase tracking-wider"
                        >
                            <Github size={18} />
                            <span>Source Code</span>
                        </a>
                    )}

                    {project.github !== '#' && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-500 hover:text-emerald-400 transition-colors text-sm font-bold uppercase tracking-wider"
                        >
                            <ExternalLink size={18} />
                            <span>System Demo</span>
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};
