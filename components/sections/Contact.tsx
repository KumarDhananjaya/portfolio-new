'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/Button';
import { PERSONAL_INFO } from '@/lib/constants';
import { Mail, Send, CheckCircle, Copy, Check, MapPin } from 'lucide-react';
import { soundFx } from '@/lib/audio';

const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    subject: z.string().min(3, 'Subject must be at least 3 characters'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const Contact: React.FC = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [copied, setCopied] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        soundFx.playClick();
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log('Transmission payload:', data);
        soundFx.playSuccess();
        setIsSubmitted(true);
        reset();
    };

    const copyEmail = () => {
        soundFx.playClick();
        navigator.clipboard.writeText(PERSONAL_INFO.email);
        setCopied(true);
        soundFx.playSuccess();
        setTimeout(() => setCopied(false), 2500);
    };

    return (
        <section id="contact" className="w-full py-24 md:py-32 px-6 relative overflow-hidden bg-grain">
            <div className="w-full max-w-7xl mx-auto relative z-10">
                {/* Chapter Story Tag */}
                <div className="flex items-center gap-3 mb-6">
                    <span className="px-3.5 py-1 rounded-full text-[11px] font-mono font-bold tracking-widest uppercase bg-purple-500/10 text-purple-400 border border-purple-500/20">
                        Chapter 06: Transmission & Collaborative Horizons
                    </span>
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-purple-500/30 to-transparent" />
                </div>

                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* Left: Content & Direct Connect */}
                    <div className="flex-1 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-xs uppercase font-mono tracking-[0.3em] text-muted mb-4 font-bold flex items-center gap-2">
                                <Mail size={14} className="text-purple-400" />
                                <span>Get in Touch</span>
                            </h2>
                            <h3 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-foreground">
                                Let's Build Something <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400">
                                    Resilient & Scalable.
                                </span>
                            </h3>
                            <p className="text-muted text-base md:text-lg leading-relaxed font-normal max-w-lg">
                                Whether you're discussing high-concurrency systems, autonomous AI agents, research collaborations at USYD, or engineering roles in Sydney and globally — my inbox is always open.
                            </p>
                        </motion.div>

                        <div className="space-y-4">
                            {/* Copyable Email Box */}
                            <div
                                onMouseEnter={() => soundFx.playHover()}
                                className="glass p-5 rounded-2xl flex items-center justify-between border border-border hover:border-purple-500/40 transition-all max-w-md bg-card/80"
                            >
                                <div className="flex items-center gap-3.5">
                                    <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase font-mono tracking-widest text-muted font-bold">Email Address</p>
                                        <p className="text-foreground font-mono text-sm font-semibold">{PERSONAL_INFO.email}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={copyEmail}
                                    className="p-2.5 rounded-xl border border-border hover:bg-foreground/5 text-muted hover:text-foreground transition-colors"
                                    title="Copy email to clipboard"
                                    data-cursor="COPY"
                                >
                                    {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                                </button>
                            </div>

                            {/* Location Box */}
                            <div className="glass p-5 rounded-2xl flex items-center gap-3.5 border border-border max-w-md bg-card/80">
                                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase font-mono tracking-widest text-muted font-bold">Base Location</p>
                                    <p className="text-foreground font-mono text-sm font-semibold">{PERSONAL_INFO.location} (AEST)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Interactive Contact Form */}
                    <div className="w-full lg:w-[500px]">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="glass-dark p-7 md:p-9 rounded-3xl shadow-2xl border border-border relative bg-card/90"
                        >
                            {isSubmitted ? (
                                <div className="py-16 text-center space-y-4">
                                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto">
                                        <CheckCircle className="text-emerald-400" size={32} />
                                    </div>
                                    <h4 className="text-2xl font-bold text-foreground">Message Transmitted</h4>
                                    <p className="text-muted font-mono text-xs max-w-xs mx-auto">
                                        Thank you! I've received your note and will reply promptly.
                                    </p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="text-xs font-mono text-cyan-400 hover:underline pt-2 inline-block"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-mono uppercase tracking-wider text-muted font-bold ml-1">
                                            Your Name
                                        </label>
                                        <input
                                            {...register('name')}
                                            className="w-full glass bg-transparent px-4 py-3 rounded-xl text-foreground text-sm outline-none border border-border focus:border-purple-500/60 transition-colors font-mono"
                                            placeholder="Jane Doe"
                                        />
                                        {errors.name && <p className="text-[11px] text-red-400 ml-1 font-mono">{errors.name.message}</p>}
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-mono uppercase tracking-wider text-muted font-bold ml-1">
                                            Email Address
                                        </label>
                                        <input
                                            {...register('email')}
                                            type="email"
                                            className="w-full glass bg-transparent px-4 py-3 rounded-xl text-foreground text-sm outline-none border border-border focus:border-cyan-500/60 transition-colors font-mono"
                                            placeholder="jane@company.com"
                                        />
                                        {errors.email && <p className="text-[11px] text-red-400 ml-1 font-mono">{errors.email.message}</p>}
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-mono uppercase tracking-wider text-muted font-bold ml-1">
                                            Subject
                                        </label>
                                        <input
                                            {...register('subject')}
                                            className="w-full glass bg-transparent px-4 py-3 rounded-xl text-foreground text-sm outline-none border border-border focus:border-purple-500/60 transition-colors font-mono"
                                            placeholder="Distributed Systems / AI Opportunity"
                                        />
                                        {errors.subject && <p className="text-[11px] text-red-400 ml-1 font-mono">{errors.subject.message}</p>}
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-mono uppercase tracking-wider text-muted font-bold ml-1">
                                            Message
                                        </label>
                                        <textarea
                                            {...register('message')}
                                            rows={4}
                                            className="w-full glass bg-transparent px-4 py-3 rounded-xl text-foreground text-sm outline-none border border-border focus:border-purple-500/60 transition-colors resize-none font-mono"
                                            placeholder="Tell me about your team or project..."
                                        />
                                        {errors.message && <p className="text-[11px] text-red-400 ml-1 font-mono">{errors.message.message}</p>}
                                    </div>

                                    <Button
                                        variant="primary"
                                        className="w-full py-4 rounded-xl text-sm font-bold shadow-lg shadow-purple-500/20"
                                        icon={!isSubmitting && <Send size={16} />}
                                        data-cursor="TRANSMIT"
                                    >
                                        {isSubmitting ? 'Transmitting...' : 'Send Message'}
                                    </Button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
