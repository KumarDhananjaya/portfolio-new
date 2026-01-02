'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/lib/constants';
import { Mail, Send, CheckCircle } from 'lucide-react';

const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    subject: z.string().min(5, 'Subject must be at least 5 characters'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const Contact: React.FC = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Form data:', data);
        setIsSubmitted(true);
        reset();
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <section id="contact" className="w-full py-24 md:py-32 px-6 relative overflow-hidden bg-[#020617]">
            {/* Background Glow */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="w-full max-w-[1200px] mx-auto relative z-10">
                <SectionHeading subtitle="Ready to translate complex requirements into production-ready architecture">
                    Secure Channel
                </SectionHeading>

                <div className="grid md:grid-cols-2 gap-12 md:gap-20 max-w-6xl mx-auto mt-16 items-center">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col text-left"
                    >
                        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">Let's discuss your next system</h3>
                        <p className="text-gray-400 text-lg mb-10 leading-relaxed font-light">
                            Whether you're architecting a high-concurrency distributed engine or implementing
                            zero-trust security protocols, I'm ready to contribute to your engineering team.
                        </p>

                        <div className="space-y-8">
                            <a
                                href={`mailto:${PERSONAL_INFO.email}`}
                                className="flex items-center gap-6 text-gray-400 hover:text-cyan-400 transition-all group p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30"
                            >
                                <div className="p-4 bg-cyan-500/10 rounded-xl group-hover:scale-110 transition-transform">
                                    <Mail size={24} className="text-cyan-400" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Direct Communication</p>
                                    <p className="text-lg font-semibold text-white">{PERSONAL_INFO.email}</p>
                                </div>
                            </a>

                            <div className="pt-4 flex items-center gap-8 pl-4">
                                <span className="text-sm font-bold uppercase tracking-widest text-gray-600">Sync with me:</span>
                                <div className="flex gap-6">
                                    {[
                                        { label: 'LinkedIn', href: SOCIAL_LINKS.linkedin, color: 'hover:text-cyan-400' },
                                        { label: 'GitHub', href: SOCIAL_LINKS.github, color: 'hover:text-emerald-400' },
                                        { label: 'Twitter', href: SOCIAL_LINKS.twitter, color: 'hover:text-blue-400' }
                                    ].map((link) => (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`text-sm font-bold uppercase tracking-widest text-gray-500 ${link.color} transition-colors`}
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 shadow-2xl relative overflow-hidden">
                            {/* Decorative Corner Glow */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl" />

                            {isSubmitted ? (
                                <div className="text-center py-12">
                                    <CheckCircle className="text-emerald-400 mx-auto mb-6" size={64} />
                                    <h3 className="text-2xl font-bold mb-3 text-white">Transmission Received</h3>
                                    <p className="text-gray-400">Your message has been successfully routed. Expect a response soon.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">
                                                Registry Name
                                            </label>
                                            <input
                                                {...register('name')}
                                                type="text"
                                                id="name"
                                                className="w-full px-5 py-4 bg-[#0a0f1e] border border-white/10 rounded-2xl focus:outline-none focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/5 transition-all text-white placeholder:text-gray-700"
                                                placeholder="e.g. Satoshi Nakamoto"
                                            />
                                            {errors.name && (
                                                <p className="text-red-400 text-[10px] font-bold uppercase mt-1 ml-1">{errors.name.message}</p>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">
                                                Electronic Mail
                                            </label>
                                            <input
                                                {...register('email')}
                                                type="email"
                                                id="email"
                                                className="w-full px-5 py-4 bg-[#0a0f1e] border border-white/10 rounded-2xl focus:outline-none focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/5 transition-all text-white placeholder:text-gray-700"
                                                placeholder="email@provider.com"
                                            />
                                            {errors.email && (
                                                <p className="text-red-400 text-[10px] font-bold uppercase mt-1 ml-1">{errors.email.message}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">
                                            Subject Header
                                        </label>
                                        <input
                                            {...register('subject')}
                                            type="text"
                                            id="subject"
                                            className="w-full px-5 py-4 bg-[#0a0f1e] border border-white/10 rounded-2xl focus:outline-none focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/5 transition-all text-white placeholder:text-gray-700"
                                            placeholder="System Architecture Query"
                                        />
                                        {errors.subject && (
                                            <p className="text-red-400 text-[10px] font-bold uppercase mt-1 ml-1">{errors.subject.message}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">
                                            Detailed Payload
                                        </label>
                                        <textarea
                                            {...register('message')}
                                            id="message"
                                            rows={4}
                                            className="w-full px-5 py-4 bg-[#0a0f1e] border border-white/10 rounded-2xl focus:outline-none focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/5 transition-all text-white placeholder:text-gray-700 resize-none"
                                            placeholder="Specify requirements or greetings..."
                                        />
                                        {errors.message && (
                                            <p className="text-red-400 text-[10px] font-bold uppercase mt-1 ml-1">{errors.message.message}</p>
                                        )}
                                    </div>

                                    <Button
                                        variant="primary"
                                        className="w-full py-5 rounded-2xl bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 shadow-[0_4px_20px_rgba(6,182,212,0.3)] hover:shadow-[0_8px_30px_rgba(6,182,212,0.4)]"
                                        icon={<Send size={20} />}
                                    >
                                        {isSubmitting ? 'Transmitting...' : 'Execute Transmission'}
                                    </Button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
