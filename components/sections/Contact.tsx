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
        <section id="contact" className="w-full py-20 md:py-28 lg:py-32 px-6 bg-black/20">
            <div className="w-full max-w-[1200px] mx-auto">
                <SectionHeading subtitle="Let's work together">
                    Get In Touch
                </SectionHeading>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col justify-center items-center h-full text-center"
                    >
                        <h3 className="text-2xl font-bold mb-6">Let's talk about your project</h3>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            I'm currently available for freelance work and full-time opportunities.
                            If you have a project that you want to get started, think you need my help
                            with something, or just fancy saying hey, then get in touch.
                        </p>

                        <div className="space-y-4 w-full flex flex-col items-center">
                            <a
                                href={`mailto:${PERSONAL_INFO.email}`}
                                className="flex flex-col items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                            >
                                <div className="p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                                    <Mail size={24} className="text-purple-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email</p>
                                    <p className="font-semibold">{PERSONAL_INFO.email}</p>
                                </div>
                            </a>

                            <div className="pt-6 w-full">
                                <p className="text-gray-400 mb-4">Or find me on:</p>
                                <div className="flex gap-4 justify-center">
                                    <a
                                        href={SOCIAL_LINKS.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                    >
                                        LinkedIn
                                    </a>
                                    <span className="text-gray-600">•</span>
                                    <a
                                        href={SOCIAL_LINKS.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        GitHub
                                    </a>
                                    <span className="text-gray-600">•</span>
                                    <a
                                        href={SOCIAL_LINKS.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-sky-400 transition-colors"
                                    >
                                        Twitter
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Card className="text-center">
                            {isSubmitted ? (
                                <div className="text-center py-12">
                                    <CheckCircle className="text-green-400 mx-auto mb-4" size={64} />
                                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                                    <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon!</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-2 text-center">
                                            Name
                                        </label>
                                        <input
                                            {...register('name')}
                                            type="text"
                                            id="name"
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                                            placeholder="Your name"
                                        />
                                        {errors.name && (
                                            <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-center">
                                            Email
                                        </label>
                                        <input
                                            {...register('email')}
                                            type="email"
                                            id="email"
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                                            placeholder="your.email@example.com"
                                        />
                                        {errors.email && (
                                            <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium mb-2 text-center">
                                            Subject
                                        </label>
                                        <input
                                            {...register('subject')}
                                            type="text"
                                            id="subject"
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                                            placeholder="What's this about?"
                                        />
                                        {errors.subject && (
                                            <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium mb-2 text-center">
                                            Message
                                        </label>
                                        <textarea
                                            {...register('message')}
                                            id="message"
                                            rows={5}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 transition-colors resize-none"
                                            placeholder="Tell me about your project..."
                                        />
                                        {errors.message && (
                                            <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                                        )}
                                    </div>

                                    <Button
                                        variant="primary"
                                        className="w-full"
                                        icon={<Send size={20} />}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </Button>
                                </form>
                            )}
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
