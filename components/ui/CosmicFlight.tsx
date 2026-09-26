"use client";

import React, { useEffect, useRef } from "react";

interface Star3D {
    x: number;
    y: number;
    z: number;
    pz: number;
    size: number;
    color: string;
}

export function CosmicFlight() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const handleResize = () => {
            if (!canvas) return;
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", handleResize);

        // Track real-time scroll velocity
        let lastScrollY = window.scrollY;
        let scrollVelocity = 0;
        let targetVelocity = 1.5; // Base cruising speed
        let currentVelocity = 1.5;

        let scrollTimeout: NodeJS.Timeout;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const delta = Math.abs(currentScrollY - lastScrollY);
            lastScrollY = currentScrollY;

            // Scale scroll delta to warp speed (up to warp 25)
            targetVelocity = Math.min(1.5 + delta * 0.45, 28);

            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                targetVelocity = 1.5; // Return to cruising speed
            }, 120);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        // Initialize 3D starfield radiating from center of screen
        const starColors = [
            "rgba(255, 255, 255, ",
            "rgba(6, 182, 212, ",   // Cyan
            "rgba(168, 85, 247, ", // Purple
            "rgba(99, 102, 241, ", // Indigo
            "rgba(16, 185, 129, ", // Emerald
        ];

        const STAR_COUNT = Math.min(Math.floor((width * height) / 3800), 320);
        const stars: Star3D[] = [];

        const resetStar = (star: Star3D) => {
            star.x = (Math.random() - 0.5) * width * 2;
            star.y = (Math.random() - 0.5) * height * 2;
            star.z = width;
            star.pz = width;
            star.size = Math.random() * 1.5 + 0.8;
            star.color = starColors[Math.floor(Math.random() * starColors.length)];
        };

        for (let i = 0; i < STAR_COUNT; i++) {
            stars.push({
                x: (Math.random() - 0.5) * width * 2,
                y: (Math.random() - 0.5) * height * 2,
                z: Math.random() * width,
                pz: width,
                size: Math.random() * 1.5 + 0.8,
                color: starColors[Math.floor(Math.random() * starColors.length)],
            });
        }

        // Render loop
        const render = () => {
            // Smoothly interpolate velocity
            currentVelocity += (targetVelocity - currentVelocity) * 0.12;

            ctx.clearRect(0, 0, width, height);

            const cx = width / 2;
            const cy = height / 2;

            const isWarping = currentVelocity > 3.5;

            // Draw each star
            for (let i = 0; i < stars.length; i++) {
                const star = stars[i];

                star.pz = star.z;
                star.z -= currentVelocity;

                // Reset star when it flies past camera
                if (star.z <= 0) {
                    resetStar(star);
                    continue;
                }

                // Project 3D coordinates to 2D screen space
                const k = 280 / star.z;
                const px = star.x * k + cx;
                const py = star.y * k + cy;

                // Previous position for hyper-drive streak
                const pk = 280 / star.pz;
                const prevX = star.x * pk + cx;
                const prevY = star.y * pk + cy;

                // Check bounds
                if (px < 0 || px >= width || py < 0 || py >= height) {
                    resetStar(star);
                    continue;
                }

                const depthAlpha = Math.min(1, (1 - star.z / width) * 1.2);

                if (isWarping) {
                    // Warp Speed Light Streak
                    const streakLengthMultiplier = Math.min(currentVelocity * 0.6, 12);
                    const tailX = px - (px - prevX) * streakLengthMultiplier;
                    const tailY = py - (py - prevY) * streakLengthMultiplier;

                    const grad = ctx.createLinearGradient(px, py, tailX, tailY);
                    grad.addColorStop(0, `${star.color}${depthAlpha})`);
                    grad.addColorStop(0.4, `${star.color}${depthAlpha * 0.6})`);
                    grad.addColorStop(1, `${star.color}0)`);

                    ctx.strokeStyle = grad;
                    ctx.lineWidth = Math.max(1, (1 - star.z / width) * 2.8 * (currentVelocity / 10));
                    ctx.lineCap = "round";

                    ctx.beginPath();
                    ctx.moveTo(px, py);
                    ctx.lineTo(tailX, tailY);
                    ctx.stroke();
                } else {
                    // Normal cruising glowing point
                    ctx.fillStyle = `${star.color}${depthAlpha * 0.8})`;
                    ctx.beginPath();
                    const radius = Math.max(0.5, (1 - star.z / width) * star.size * 2);
                    ctx.arc(px, py, radius, 0, Math.PI * 2);
                    ctx.fill();

                    // Soft ambient halo around close stars
                    if (star.z < width * 0.35) {
                        ctx.fillStyle = `${star.color}${depthAlpha * 0.15})`;
                        ctx.beginPath();
                        ctx.arc(px, py, radius * 3.5, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
            }

            // Speed lines on horizon during hyper-warp
            if (currentVelocity > 8) {
                const warpIntensity = Math.min((currentVelocity - 8) / 20, 0.4);
                ctx.fillStyle = `rgba(6, 182, 212, ${warpIntensity * 0.08})`;
                ctx.fillRect(0, 0, width, height);
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(scrollTimeout);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0 w-full h-full opacity-70 dark:opacity-90"
        />
    );
}
