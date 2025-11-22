'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { EXPERIENCE } from '@/lib/constants';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

export const Experience: React.FC = () => {
    return (
        <section
            id="experience"
            className="w-full py-20 md:py-28 lg:py-32 px-6 bg-black/20"
        >
            <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">

                <SectionHeading subtitle="My professional journey">
                    Work Experience
                </SectionHeading>

                {/* Centered container for cards */}
                <div className="w-full max-w-4xl mx-auto space-y-8 md:space-y-12">

                    {EXPERIENCE.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card className="p-8 md:p-10 text-center flex flex-col items-center mx-auto">

                                {/* Header */}
                                <div className="space-y-3 flex flex-col items-center w-full">
                                    <div className="flex items-center justify-center gap-2">
                                        <Briefcase className="text-purple-400" size={22} />
                                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                                            {exp.position}
                                        </h3>
                                    </div>

                                    <p className="text-lg md:text-xl text-purple-400 font-medium">
                                        {exp.company}
                                    </p>

                                    <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                                        <span className="flex items-center gap-1">
                                            <MapPin size={16} />
                                            {exp.location}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Calendar size={16} />
                                            {exp.duration}
                                        </span>
                                    </div>
                                </div>

                                {/* Highlights */}
                                <ul className="space-y-3 mt-8 text-gray-300 text-left w-full max-w-2xl mx-auto">
                                    {exp.highlights.map((highlight, i) => (
                                        <li key={i} className="flex items-start gap-3 leading-relaxed">
                                            <span className="text-cyan-400 mt-1 shrink-0">▹</span>
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap justify-center gap-3 mt-8">
                                    {exp.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 rounded-full text-sm 
                                            bg-white/5 border border-white/10
                                            text-purple-300 backdrop-blur-sm
                                            hover:border-purple-500/40 hover:bg-purple-500/10 transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                            </Card>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
};
