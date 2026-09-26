"use client";

import React from "react";
import { motion } from "framer-motion";

interface WarpSectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export function WarpSection({ children, className = "", id }: WarpSectionProps) {
    return (
        <motion.div
            id={id}
            initial={{ opacity: 0, y: 35, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
            }}
            className={`relative ${className}`}
        >
            {children}
        </motion.div>
    );
}
