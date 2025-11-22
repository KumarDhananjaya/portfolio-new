import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
    return (
        <motion.div
            className={`
        bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6
        ${hover ? 'hover:shadow-[0_0_30px_rgba(168,85,247,0.5),0_0_60px_rgba(168,85,247,0.3)] transition-shadow duration-300' : ''}
        ${className}
      `}
            whileHover={hover ? { y: -5 } : undefined}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    );
};
