"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Moon() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1200], [0, 150]);
    const opacity = useTransform(scrollY, [0, 800], [1, 0.45]);

    return (
        <motion.div
            style={{ y, opacity }}
            className="fixed top-12 right-6 sm:top-16 sm:right-16 md:top-20 md:right-28 lg:top-24 lg:right-36 z-0 pointer-events-none select-none w-44 h-44 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80"
        >
            {/* Ambient Celestial Halo Backlights */}
            <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-[80px] md:blur-[100px] scale-150 animate-pulse" />
            <div className="absolute inset-0 rounded-full bg-indigo-500/25 blur-[60px] md:blur-[80px] scale-125" />
            <div className="absolute inset-0 rounded-full bg-purple-600/20 blur-[90px] md:blur-[120px] scale-175" />

            {/* Ultra High-Fidelity SVG Moon Sphere with Shading, Maria & Crater Detailing */}
            <svg
                viewBox="0 0 400 400"
                className="w-full h-full drop-shadow-[0_0_50px_rgba(6,182,212,0.35)]"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    {/* Radial gradient for realistic spherical lighting */}
                    <radialGradient id="lunarLight" cx="35%" cy="30%" r="65%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="25%" stopColor="#e2e8f0" />
                        <stop offset="55%" stopColor="#94a3b8" />
                        <stop offset="85%" stopColor="#475569" />
                        <stop offset="100%" stopColor="#1e293b" />
                    </radialGradient>

                    {/* Dark mare / basalt plains fill */}
                    <radialGradient id="mareColor" cx="30%" cy="30%" r="70%">
                        <stop offset="0%" stopColor="#64748b" stopOpacity="0.8" />
                        <stop offset="60%" stopColor="#334155" stopOpacity="0.85" />
                        <stop offset="100%" stopColor="#0f172a" stopOpacity="0.9" />
                    </radialGradient>

                    {/* Atmospheric limb glow */}
                    <radialGradient id="limbGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="88%" stopColor="transparent" />
                        <stop offset="96%" stopColor="rgba(6, 182, 212, 0.4)" />
                        <stop offset="100%" stopColor="rgba(168, 85, 247, 0.6)" />
                    </radialGradient>

                    {/* Crater bump filter */}
                    <filter id="craterShadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="-1" dy="-1" stdDeviation="1.5" floodColor="#ffffff" floodOpacity="0.25" />
                        <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.8" />
                    </filter>
                </defs>

                {/* Base Moon Sphere */}
                <circle cx="200" cy="200" r="180" fill="url(#lunarLight)" />

                {/* Major Lunar Maria (Sea of Tranquility, Oceanus Procellarum, Sea of Serenity, etc.) */}
                <g fill="url(#mareColor)" opacity="0.65">
                    {/* Oceanus Procellarum */}
                    <path d="M120,130 Q160,90 200,110 Q240,130 220,180 Q190,210 140,200 Q100,180 120,130 Z" />
                    {/* Mare Serenitatis & Mare Tranquillitatis */}
                    <path d="M220,120 Q260,110 290,140 Q310,180 280,210 Q240,220 220,180 Q200,140 220,120 Z" />
                    {/* Mare Imbrium */}
                    <path d="M150,90 Q210,70 230,110 Q220,150 170,140 Q130,120 150,90 Z" />
                    {/* Mare Crisium */}
                    <ellipse cx="310" cy="150" rx="30" ry="22" transform="rotate(-15 310 150)" />
                    {/* Mare Nubium & Mare Humorum */}
                    <path d="M140,230 Q190,220 200,270 Q180,310 130,300 Q110,260 140,230 Z" />
                    <path d="M220,240 Q270,240 270,290 Q240,320 200,300 Q190,260 220,240 Z" />
                </g>

                {/* Detailed Crater Systems (Tycho, Copernicus, Kepler with ray systems) */}
                <g filter="url(#craterShadow)">
                    {/* Tycho Crater and Ray System at South */}
                    <circle cx="210" cy="310" r="12" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
                    <circle cx="210" cy="310" r="4" fill="#0f172a" />
                    {/* Tycho Rays */}
                    <path d="M210,310 L260,370 M210,310 L140,360 M210,310 L290,280 M210,310 L120,270 M210,310 L200,220" stroke="#f1f5f9" strokeWidth="1" opacity="0.35" strokeDasharray="3,3" />

                    {/* Copernicus Crater */}
                    <circle cx="160" cy="170" r="15" fill="#cbd5e1" stroke="#334155" strokeWidth="2.5" />
                    <circle cx="160" cy="170" r="5" fill="#0f172a" />
                    <path d="M160,170 L110,140 M160,170 L210,150 M160,170 L140,210" stroke="#f1f5f9" strokeWidth="1" opacity="0.4" strokeDasharray="2,2" />

                    {/* Kepler Crater */}
                    <circle cx="115" cy="175" r="9" fill="#94a3b8" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="115" cy="175" r="3" fill="#0f172a" />

                    {/* Aristarchus Plateau (Very Bright Crater) */}
                    <circle cx="95" cy="135" r="8" fill="#ffffff" stroke="#64748b" strokeWidth="1" />
                    <circle cx="95" cy="135" r="2.5" fill="#1e293b" />

                    {/* Plato Crater (Dark Flat Floor) */}
                    <ellipse cx="175" cy="75" rx="14" ry="8" fill="#1e293b" stroke="#94a3b8" strokeWidth="2" />

                    {/* Additional Smaller Impact Craters */}
                    <circle cx="260" cy="100" r="7" fill="#64748b" stroke="#334155" strokeWidth="1" />
                    <circle cx="320" cy="240" r="10" fill="#475569" stroke="#1e293b" strokeWidth="1.5" />
                    <circle cx="290" cy="260" r="6" fill="#64748b" stroke="#334155" strokeWidth="1" />
                    <circle cx="100" cy="240" r="8" fill="#475569" stroke="#1e293b" strokeWidth="1" />
                    <circle cx="140" cy="280" r="7" fill="#64748b" stroke="#334155" strokeWidth="1" />
                    <circle cx="240" cy="170" r="6" fill="#94a3b8" stroke="#475569" strokeWidth="1" />
                    <circle cx="275" cy="165" r="5" fill="#64748b" stroke="#334155" strokeWidth="1" />
                    <circle cx="180" cy="250" r="8" fill="#475569" stroke="#1e293b" strokeWidth="1" />
                </g>

                {/* Terminator / Night Shadow Gradient (Crescent to Gibbos Curve for 3D realism) */}
                <path
                    d="M200,20 A180,180 0 0,1 200,380 C110,380 90,20 200,20 Z"
                    fill="#020617"
                    opacity="0.25"
                />

                {/* Outer Rim Atmospheric Corona */}
                <circle cx="200" cy="200" r="180" fill="url(#limbGlow)" />
            </svg>
        </motion.div>
    );
}
