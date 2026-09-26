"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [cursorText, setCursorText] = useState("");

    // Smooth physics springs
    const mouseX = useSpring(0, { stiffness: 600, damping: 35 });
    const mouseY = useSpring(0, { stiffness: 600, damping: 35 });
    const ringX = useSpring(0, { stiffness: 250, damping: 25 });
    const ringY = useSpring(0, { stiffness: 250, damping: 25 });

    useEffect(() => {
        // Disable on touch devices
        if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
            return;
        }

        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            ringX.set(e.clientX);
            ringY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        // Check for hover targets with custom text or interactive elements
        const handleElementHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement | null;
            if (!target) return;

            const interactive = target.closest("a, button, [role='button'], input, textarea, select, .interactive-card");
            if (interactive) {
                setIsHovered(true);
                const customLabel = interactive.getAttribute("data-cursor");
                setCursorText(customLabel || "");
            } else {
                setIsHovered(false);
                setCursorText("");
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseover", handleElementHover);
        document.body.addEventListener("mouseleave", handleMouseLeave);
        document.body.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleElementHover);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
            document.body.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [isVisible, mouseX, mouseY, ringX, ringY]);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[9990] overflow-hidden hidden md:block">
            {/* Ambient mouse glow */}
            <motion.div
                className="absolute w-[350px] h-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 dark:opacity-15 blur-[80px] bg-gradient-to-tr from-purple-600 via-indigo-500 to-cyan-400"
                style={{
                    left: ringX,
                    top: ringY,
                }}
            />

            {/* Trailing Outer Ring */}
            <motion.div
                className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/50 flex items-center justify-center transition-colors duration-200 ${
                    isHovered
                        ? "w-14 h-14 bg-purple-500/20 backdrop-blur-[2px] border-purple-400"
                        : "w-8 h-8 bg-transparent"
                }`}
                style={{
                    left: ringX,
                    top: ringY,
                }}
            >
                {cursorText && (
                    <span className="text-[9px] font-mono font-bold tracking-widest text-purple-200 uppercase">
                        {cursorText}
                    </span>
                )}
            </motion.div>

            {/* Inner Center Dot */}
            <motion.div
                className="absolute w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                style={{
                    left: mouseX,
                    top: mouseY,
                    scale: isHovered ? 0.5 : 1,
                }}
            />
        </div>
    );
}
