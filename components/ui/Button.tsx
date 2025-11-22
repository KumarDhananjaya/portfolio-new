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
        'px-6 md:px-8 py-3 md:py-3.5 rounded-xl font-medium transition-all duration-300 ' +
        'flex items-center justify-center gap-3 whitespace-nowrap';

    const variants = {
        primary:
            'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg ' +
            'hover:shadow-2xl hover:from-purple-700 hover:to-cyan-600 active:scale-95',

        secondary:
            'bg-white/10 hover:bg-white/20 text-white border border-white/20 ' +
            'hover:border-white/40 backdrop-blur-sm active:scale-95',

        outline:
            'border border-purple-400 text-purple-300 hover:bg-purple-500/10 ' +
            'hover:border-purple-300 active:scale-95',
    };

    const MotionA = motion.a;
    const MotionButton = motion.button;

    if (href) {
        return (
            <MotionA
                href={href}
                className={`${baseStyles} ${variants[variant]} ${className}`}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
            >
                {icon && <span className="text-lg">{icon}</span>}
                {children}
            </MotionA>
        );
    }

    return (
        <MotionButton
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
        >
            {icon && <span className="text-lg">{icon}</span>}
            {children}
        </MotionButton>
    );
};
