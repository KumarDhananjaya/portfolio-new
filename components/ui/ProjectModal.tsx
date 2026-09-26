"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Cpu, Layers, ShieldCheck, Zap } from "lucide-react";
import { soundFx } from "@/lib/audio";

interface ProjectModalProps {
    project: {
        title: string;
        category: string;
        chapter: string;
        metric: string;
        description: string;
        technologies: string[];
        github?: string;
        link?: string;
    } | null;
    onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
    if (!project) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[9995] flex items-center justify-center p-4 sm:p-6 md:p-10">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => {
                        soundFx.playClick();
                        onClose();
                    }}
                    className="absolute inset-0 bg-black/80 backdrop-blur-md"
                />

                {/* Modal Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-card border border-border/80 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 space-y-6"
                >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 border-b border-border/50 pb-5">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-xs font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                                    {project.chapter}
                                </span>
                                <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                                    {project.metric}
                                </span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                                {project.title}
                            </h2>
                        </div>
                        <button
                            onClick={() => {
                                soundFx.playClick();
                                onClose();
                            }}
                            className="p-2 rounded-full border border-border hover:bg-muted/10 transition-colors text-muted hover:text-foreground"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Architecture Overview */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-mono uppercase tracking-widest text-muted flex items-center gap-2">
                            <Cpu className="w-4 h-4 text-purple-400" /> Architectural Overview & Problem Solved
                        </h3>
                        <p className="text-sm sm:text-base leading-relaxed text-muted font-normal">
                            {project.description}
                        </p>
                    </div>

                    {/* Key System Highlights Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="p-4 rounded-xl border border-border/60 bg-muted/5 space-y-1.5">
                            <div className="flex items-center gap-2 text-xs font-mono font-bold text-foreground">
                                <Zap className="w-4 h-4 text-cyan-400" /> High-Concurrency & Scale
                            </div>
                            <p className="text-xs text-muted">
                                Engineered for zero-downtime, sub-millisecond execution, and high throughput state reconciliation.
                            </p>
                        </div>
                        <div className="p-4 rounded-xl border border-border/60 bg-muted/5 space-y-1.5">
                            <div className="flex items-center gap-2 text-xs font-mono font-bold text-foreground">
                                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Fault-Tolerance & Integrity
                            </div>
                            <p className="text-xs text-muted">
                                Implements distributed locks, idempotency guarantees, and hardened security controls.
                            </p>
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="space-y-3">
                        <h3 className="text-xs font-mono uppercase tracking-widest text-muted flex items-center gap-2">
                            <Layers className="w-4 h-4 text-cyan-400" /> Technologies & Frameworks
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 text-xs font-mono rounded-lg border border-border bg-card text-foreground"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border/50">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                onMouseEnter={() => soundFx.playHover()}
                                onClick={() => soundFx.playClick()}
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-foreground text-background font-medium text-sm hover:opacity-90 transition-opacity"
                            >
                                <Github className="w-4 h-4" />
                                <span>Inspect Source Code</span>
                            </a>
                        )}
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                onMouseEnter={() => soundFx.playHover()}
                                onClick={() => soundFx.playClick()}
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border hover:bg-muted/10 font-medium text-sm text-foreground transition-colors"
                            >
                                <ExternalLink className="w-4 h-4" />
                                <span>Launch Live Instance</span>
                            </a>
                        )}
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
