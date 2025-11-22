'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { PERSONAL_INFO, SKILLS } from '@/lib/constants';
import { Code2, Rocket, Award } from 'lucide-react';

export const About: React.FC = () => {
    return (
        <section
            id="about"
            className="w-full py-20 md:py-28 lg:py-32 px-6 flex justify-center"
        >
            <div className="w-full max-w-[1100px] mx-auto mt-6 text-center">

                <SectionHeading subtitle="Get to know me better">
                    About Me
                </SectionHeading>

                {/* Content Wrapper */}
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">

                    {/* BIO — centered perfectly */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center md:items-start text-center md:text-left px-2"
                    >
                        <div className="max-w-[480px] mx-auto">
                            {PERSONAL_INFO.bio.split('\n\n').map((paragraph, index) => (
                                <p
                                    key={index}
                                    className="text-gray-300 text-lg leading-relaxed mb-4"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </motion.div>

                    {/* HIGHLIGHTS — centered & equal width */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-6 max-w-[460px] mx-auto w-full"
                    >
                        <Card className="w-full">
                            <div className="flex flex-col items-center text-center gap-3 py-4">
                                <div className="p-3 bg-purple-500/20 rounded-lg">
                                    <Code2 className="text-purple-400" size={24} />
                                </div>
                                <h3 className="text-xl font-semibold">Current Role</h3>
                                <p className="text-gray-400">
                                    Associate Software Engineer at Examic EdTech
                                </p>
                                <p className="text-sm text-gray-500">
                                    Building scalable platforms on Azure
                                </p>
                            </div>
                        </Card>

                        <Card className="w-full">
                            <div className="flex flex-col items-center text-center gap-3 py-4">
                                <div className="p-3 bg-cyan-500/20 rounded-lg">
                                    <Rocket className="text-cyan-400" size={24} />
                                </div>
                                <h3 className="text-xl font-semibold">Expertise</h3>
                                <p className="text-gray-400">MERN Stack, React Native & DevOps</p>
                                <p className="text-sm text-gray-500">Full-stack & mobile development</p>
                            </div>
                        </Card>

                        <Card className="w-full">
                            <div className="flex flex-col items-center text-center gap-3 py-4">
                                <div className="p-3 bg-pink-500/20 rounded-lg">
                                    <Award className="text-pink-400" size={24} />
                                </div>
                                <h3 className="text-xl font-semibold">Achievement</h3>
                                <p className="text-gray-400">2nd Prize — HPE SWARM-IT Hackathon 2023</p>
                                <p className="text-sm text-gray-500">National level competition</p>
                            </div>
                        </Card>
                    </motion.div>
                </div>

                {/* SKILLS */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-16 md:mt-20"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent animate-gradient">
                        Tech Stack
                    </h3>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1100px] mx-auto">
                        {Object.entries(SKILLS).map(([category, skills]) => (
                            <Card key={category} className="text-center px-4 py-6">
                                <h4 className="text-lg font-semibold mb-3 capitalize text-purple-400">
                                    {category}
                                </h4>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 border border-white/10 hover:border-purple-500/50 transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </Card>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
