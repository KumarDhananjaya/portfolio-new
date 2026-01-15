import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    href?: string;
    onClick?: () => void;
    className?: string;
    icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    href,
    onClick,
    className = '',
    icon,
}) => {

    const baseStyles =
        'px-6 md:px-8 py-3 md:py-3.5 rounded-xl font-medium transition-all duration-500 ' +
        'flex items-center justify-center gap-3 whitespace-nowrap relative group overflow-hidden';

    const variants = {
        primary:
            'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.1)] ' +
            'hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-95',

        secondary:
            'glass hover:glass-dark text-white active:scale-95',

        outline:
            'border border-white/10 text-white/80 hover:text-white hover:border-white/30 ' +
            'hover:bg-white/5 active:scale-95',
    };

    const MotionA = motion.a;
    const MotionButton = motion.button;

    const content = (
        <>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {icon && <span className="text-lg relative z-10 group-hover:scale-110 transition-transform duration-300">{icon}</span>}
            <span className="relative z-10">{children}</span>
        </>
    );

    if (href) {
        return (
            <MotionA
                href={href}
                className={`${baseStyles} ${variants[variant]} ${className}`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
            >
                {content}
            </MotionA>
        );
    }

    return (
        <MotionButton
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
        >
            {content}
        </MotionButton>
    );
};
