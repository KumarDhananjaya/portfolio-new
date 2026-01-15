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
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Form data:', data);
        setIsSubmitted(true);
        reset();
    };

    return (
        <section id="contact" className="w-full py-24 md:py-32 px-6 relative overflow-hidden bg-grain">
            <div className="w-full max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    {/* Left: Content */}
                    <div className="flex-1 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-sm uppercase tracking-[0.4em] text-white/30 mb-4">Transmission</h2>
                            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
                                Start a <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Collaboration.</span>
                            </h3>
                            <p className="text-white/50 text-xl leading-relaxed font-light max-w-lg">
                                Ready to architect secure, high-concurrency systems? Let's discuss your engineering challenges and how I can help solve them.
                            </p>
                        </motion.div>

                        <div className="space-y-6">
                            <a
                                href={`mailto:${PERSONAL_INFO.email}`}
                                className="glass group flex items-center gap-6 p-6 rounded-[2rem] hover:bg-white/5 transition-all duration-500 max-w-md"
                            >
                                <div className="p-4 rounded-2xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-white/20 mb-1 font-bold">Direct Payload</p>
                                    <p className="text-white/80 font-medium">{PERSONAL_INFO.email}</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="w-full lg:w-[500px]">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="glass-dark p-8 md:p-10 rounded-[3rem] shadow-2xl relative"
                        >
                            {isSubmitted ? (
                                <div className="py-20 text-center">
                                    <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-8">
                                        <CheckCircle className="text-emerald-500" size={40} />
                                    </div>
                                    <h4 className="text-2xl font-bold text-white mb-2">Message Received</h4>
                                    <p className="text-white/40 uppercase tracking-widest text-xs">Awaiting synchronous response...</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold ml-4">Full Identity</label>
                                        <input
                                            {...register('name')}
                                            className="w-full glass bg-transparent px-6 py-4 rounded-2xl text-white outline-none focus:border-purple-500/50 transition-colors"
                                            placeholder="Satoshi Nakamoto"
                                        />
                                        {errors.name && <p className="text-[10px] text-red-400/80 ml-4 font-bold uppercase tracking-widest">{errors.name.message}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold ml-4">Electronic Mail</label>
                                        <input
                                            {...register('email')}
                                            className="w-full glass bg-transparent px-6 py-4 rounded-2xl text-white outline-none focus:border-cyan-500/50 transition-colors"
                                            placeholder="satoshi@bitcoin.org"
                                        />
                                        {errors.email && <p className="text-[10px] text-red-400/80 ml-4 font-bold uppercase tracking-widest">{errors.email.message}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold ml-4">Payload Details</label>
                                        <textarea
                                            {...register('message')}
                                            rows={4}
                                            className="w-full glass bg-transparent px-6 py-4 rounded-2xl text-white outline-none focus:border-purple-500/50 transition-colors resize-none"
                                            placeholder="What high-scale systems are we building today?"
                                        />
                                        {errors.message && <p className="text-[10px] text-red-400/80 ml-4 font-bold uppercase tracking-widest">{errors.message.message}</p>}
                                    </div>

                                    <Button
                                        variant="primary"
                                        className="w-full py-5 rounded-2xl"
                                        icon={!isSubmitting && <Send size={20} />}
                                    >
                                        {isSubmitting ? 'Transmitting...' : 'Execute Transmission'}
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
