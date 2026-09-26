"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation, Gauge, Compass, Radio } from "lucide-react";
import { soundFx } from "@/lib/audio";

const SECTORS = [
    { id: "home", label: "SECTOR 00: COMMAND_CORE", title: "Hero Deck" },
    { id: "about", label: "SECTOR 01: SYDNEY_ORBIT", title: "Academic & Bio" },
    { id: "projects", label: "SECTOR 02: 100K_RPS_CORE", title: "Flagship Architectures" },
    { id: "opensource", label: "SECTOR 03: OSS_CONSTELLATION", title: "Global Open Source" },
    { id: "blogs", label: "SECTOR 04: SYSTEM_ARCHIVES", title: "Engineering Essays" },
    { id: "experience", label: "SECTOR 05: PRODUCTION_GRID", title: "Industry Chronology" },
    { id: "contact", label: "SECTOR 06: TRANSMISSION_RELAY", title: "Direct Link" },
];

export function FlightHUD() {
    const [activeSector, setActiveSector] = useState(SECTORS[0]);
    const [warpSpeed, setWarpSpeed] = useState(1.0);
    const [isWarping, setIsWarping] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;
        let timeout: NodeJS.Timeout;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const delta = Math.abs(currentScrollY - lastScrollY);
            lastScrollY = currentScrollY;

            // Calculate instantaneous warp factor
            const speed = Math.min(1.0 + (delta / 12), 9.9);
            setWarpSpeed(Number(speed.toFixed(1)));
            setIsWarping(speed > 2.0);

            clearTimeout(timeout);
            timeout = setTimeout(() => {
                setWarpSpeed(1.0);
                setIsWarping(false);
            }, 150);

            // Determine active sector based on scroll position
            const sections = SECTORS.map((s) => ({
                sector: s,
                element: document.getElementById(s.id),
            })).filter((s) => s.element !== null);

            for (const { sector, element } of sections) {
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= window.innerHeight * 0.45 && rect.bottom >= window.innerHeight * 0.2) {
                        setActiveSector(sector);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timeout);
        };
    }, []);

    const jumpToSector = (id: string) => {
        soundFx.playClick();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="fixed bottom-6 left-6 z-40 pointer-events-none hidden md:block select-none font-mono">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="glass-dark p-3.5 px-4 rounded-2xl border border-border/80 shadow-2xl backdrop-blur-md pointer-events-auto space-y-2.5 max-w-xs"
            >
                {/* Sector Coordinate Header */}
                <div className="flex items-center justify-between gap-3 text-[10px] text-muted border-b border-border/50 pb-2">
                    <div className="flex items-center gap-1.5 text-cyan-400">
                        <Radio size={12} className="animate-pulse" />
                        <span className="font-bold tracking-widest uppercase">TRAJECTORY HUD</span>
                    </div>
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                        NAV // ACTIVE
                    </span>
                </div>

                {/* Active Sector Name */}
                <div className="space-y-0.5">
                    <div className="text-xs font-bold text-foreground tracking-tight flex items-center gap-1.5">
                        <Navigation size={12} className="text-purple-400" />
                        <span>{activeSector.label}</span>
                    </div>
                    <p className="text-[10px] text-muted truncate">{activeSector.title}</p>
                </div>

                {/* Warp Velocity Gauge */}
                <div className="space-y-1 pt-1 border-t border-border/40">
                    <div className="flex items-center justify-between text-[10px]">
                        <span className="text-muted flex items-center gap-1">
                            <Gauge size={11} className={isWarping ? "text-cyan-400 animate-bounce" : "text-muted"} />
                            <span>WARP FACTOR</span>
                        </span>
                        <span className={`font-bold font-mono ${isWarping ? "text-cyan-300" : "text-foreground"}`}>
                            WARP {warpSpeed.toFixed(1)}
                        </span>
                    </div>

                    {/* Visual Velocity Bar */}
                    <div className="w-full h-1 bg-muted/20 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 transition-all duration-75"
                            style={{ width: `${Math.min((warpSpeed / 9.9) * 100, 100)}%` }}
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
