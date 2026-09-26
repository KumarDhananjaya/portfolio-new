"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValueEvent } from "framer-motion";
import { soundFx } from "@/lib/audio";
import { Rocket, ChevronDown } from "lucide-react";

const SECTIONS = [
    { id: "home", label: "Sector 0: Origin" },
    { id: "about", label: "Sector 1: Sydney & Academics" },
    { id: "projects", label: "Sector 2: 100k+ RPS Systems" },
    { id: "opensource", label: "Sector 3: Global Open Source" },
    { id: "blogs", label: "Sector 4: Technical Essays" },
    { id: "experience", label: "Sector 5: Industry Chronology" },
    { id: "contact", label: "Sector 6: Transmission Hub" },
];

export function SpacecraftNavigator() {
    const { scrollYProgress, scrollY } = useScroll();
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
    const [isBoosting, setIsBoosting] = useState(false);
    const [scrollDirection, setScrollDirection] = useState<"down" | "up">("down");
    const [lastScrollY, setLastScrollY] = useState(0);

    // Smooth spring for spacecraft vertical trajectory (from 10% to 85% of viewport height)
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });
    const shipTop = useTransform(smoothProgress, [0, 1], ["12%", "82%"]);

    // Calculate flight angle / tilt based on motion
    const [tilt, setTilt] = useState(0);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const delta = latest - lastScrollY;
        if (Math.abs(delta) > 1.5) {
            setScrollDirection(delta > 0 ? "down" : "up");
            setTilt(delta > 0 ? 12 : -12);
        } else {
            setTilt(0);
        }
        setLastScrollY(latest);

        // Find active section
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const fraction = latest / (totalHeight || 1);
        const index = Math.min(
            Math.floor(fraction * SECTIONS.length),
            SECTIONS.length - 1
        );
        setCurrentSectionIndex(index);
    });

    const warpToNextSection = () => {
        soundFx.playClick();
        setIsBoosting(true);

        const nextIndex = (currentSectionIndex + 1) % SECTIONS.length;
        const targetSection = SECTIONS[nextIndex];
        const el = document.getElementById(targetSection.id);

        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }

        setTimeout(() => {
            soundFx.playSuccess();
            setIsBoosting(false);
        }, 800);
    };

    return (
        <div className="fixed right-3 sm:right-6 md:right-8 top-0 bottom-0 z-40 pointer-events-none select-none flex items-center justify-center hidden sm:flex">
            {/* Orbital Flight Path Guide Line */}
            <div className="relative h-[70vh] w-0.5 bg-gradient-to-b from-purple-500/20 via-cyan-500/30 to-purple-500/20 rounded-full">
                {/* Section Waypoint Orbital Beacons */}
                {SECTIONS.map((sec, idx) => {
                    const isActive = idx === currentSectionIndex;
                    const topPercent = (idx / (SECTIONS.length - 1)) * 100;
                    return (
                        <div
                            key={sec.id}
                            style={{ top: `${topPercent}%` }}
                            className="absolute -left-1.5 -translate-y-1/2 flex items-center group cursor-pointer pointer-events-auto"
                            onClick={() => {
                                soundFx.playClick();
                                const el = document.getElementById(sec.id);
                                if (el) el.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            <div
                                className={`w-3.5 h-3.5 rounded-full transition-all duration-300 flex items-center justify-center ${
                                    isActive
                                        ? "bg-cyan-400 ring-4 ring-cyan-500/30 scale-125"
                                        : "bg-muted/40 hover:bg-muted/80 hover:scale-110"
                                }`}
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-background" />
                            </div>

                            {/* Tooltip */}
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute right-6 px-2.5 py-1 rounded-md text-[10px] font-mono tracking-wider bg-card border border-border whitespace-nowrap text-foreground shadow-lg pointer-events-none">
                                {sec.label}
                            </span>
                        </div>
                    );
                })}

                {/* The Spacecraft Shuttle */}
                <motion.div
                    style={{ top: shipTop }}
                    animate={{
                        rotate: isBoosting ? [0, -10, 15, 0] : tilt,
                        scale: isBoosting ? 1.25 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    onClick={warpToNextSection}
                    className="absolute -left-5 -translate-y-1/2 pointer-events-auto cursor-pointer group"
                    data-cursor="WARP"
                    title="Click to warp to next sector"
                >
                    {/* Thruster Plasma Trail Effect */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex flex-col items-center">
                        <div
                            className={`w-1.5 rounded-full bg-gradient-to-t from-cyan-400 via-indigo-500 to-transparent transition-all duration-200 ${
                                isBoosting
                                    ? "h-10 opacity-100 blur-[1px] scale-150"
                                    : "h-4 opacity-70 blur-[0.5px] animate-pulse"
                            }`}
                        />
                    </div>

                    {/* Futuristic Spacecraft Vector Chassis */}
                    <div className="relative p-2 rounded-2xl glass border border-cyan-500/40 bg-card/90 shadow-xl group-hover:border-cyan-400 transition-colors">
                        <svg
                            viewBox="0 0 48 48"
                            className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {/* Wings */}
                            <path
                                d="M8 36L24 16L40 36L34 38L24 30L14 38L8 36Z"
                                fill="currentColor"
                                fillOpacity="0.3"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                            />
                            {/* Main Fuselage */}
                            <path
                                d="M24 6L30 26L24 38L18 26L24 6Z"
                                fill="#0f172a"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                            />
                            {/* Cockpit Canopy Glow */}
                            <ellipse
                                cx="24"
                                cy="18"
                                rx="2.5"
                                ry="5"
                                fill="#38bdf8"
                                className="animate-pulse"
                            />
                            {/* Ion Thrusters */}
                            <circle cx="21" cy="38" r="1.5" fill="#818cf8" />
                            <circle cx="27" cy="38" r="1.5" fill="#818cf8" />
                        </svg>

                        {/* Interactive Click Prompt Bubble */}
                        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-card/95 border border-cyan-500/50 px-3 py-1.5 rounded-xl shadow-xl whitespace-nowrap text-right">
                            <p className="text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-widest flex items-center gap-1">
                                <Rocket size={11} className="animate-bounce" /> Warp to Next Sector
                            </p>
                            <p className="text-[9px] font-mono text-muted">
                                {SECTIONS[(currentSectionIndex + 1) % SECTIONS.length]?.label}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
