import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
    children: React.ReactNode;
    subtitle?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ children, subtitle }) => {
    return (
        <motion.div
            className="text-center mb-16 mt-16 mx-auto max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="text-4xl md:text-5xl mt-6 font-bold font-heading mb-4 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">
                {children}
            </h2>
            {subtitle && (
                <p className="text-gray-400 text-lg max-w-2xl mx-auto px-4">
                    {subtitle}
                </p>
            )}
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>
    );
};
