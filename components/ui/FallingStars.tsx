"use client";

import React, { useEffect, useRef } from "react";

interface Star {
    x: number;
    y: number;
    size: number;
    opacity: number;
    speed: number;
    pulseSpeed: number;
    pulseOffset: number;
}

interface Meteor {
    x: number;
    y: number;
    length: number;
    speed: number;
    opacity: number;
    thickness: number;
    color: string;
}

export function FallingStars() {
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

        // Generate background stars
        const starCount = Math.floor((width * height) / 9000);
        const stars: Star[] = Array.from({ length: Math.min(starCount, 120) }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 1.8 + 0.5,
            opacity: Math.random() * 0.7 + 0.2,
            speed: Math.random() * 0.25 + 0.05,
            pulseSpeed: Math.random() * 0.02 + 0.005,
            pulseOffset: Math.random() * Math.PI * 2,
        }));

        // Meteors / Dropping stars
        const colors = [
            "rgba(168, 85, 247, ", // Purple
            "rgba(6, 182, 212, ",  // Cyan
            "rgba(99, 102, 241, ", // Indigo
            "rgba(16, 185, 129, ", // Emerald
            "rgba(255, 255, 255, ", // Pure white
        ];

        const createMeteor = (): Meteor => {
            const startX = Math.random() * (width + 200) - 100;
            return {
                x: startX,
                y: -50,
                length: Math.random() * 120 + 80,
                speed: Math.random() * 6 + 4,
                opacity: Math.random() * 0.7 + 0.3,
                thickness: Math.random() * 1.8 + 1,
                color: colors[Math.floor(Math.random() * colors.length)],
            };
        };

        const meteors: Meteor[] = Array.from({ length: 6 }, () => createMeteor());
        // Distribute their starting Y
        meteors.forEach((m) => {
            m.y = Math.random() * height;
        });

        let frame = 0;

        const render = () => {
            frame++;
            ctx.clearRect(0, 0, width, height);

            // 1. Draw static / drifting stars
            stars.forEach((star) => {
                star.y += star.speed;
                if (star.y > height) {
                    star.y = 0;
                    star.x = Math.random() * width;
                }

                const currentOpacity =
                    star.opacity + Math.sin(frame * star.pulseSpeed + star.pulseOffset) * 0.25;
                const clampedOpacity = Math.max(0.1, Math.min(1, currentOpacity));

                ctx.fillStyle = `rgba(255, 255, 255, ${clampedOpacity * 0.6})`;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();

                // Subtle glow around larger stars
                if (star.size > 1.4) {
                    ctx.fillStyle = `rgba(168, 85, 247, ${clampedOpacity * 0.15})`;
                    ctx.beginPath();
                    ctx.arc(star.x, star.y, star.size * 2.5, 0, Math.PI * 2);
                    ctx.fill();
                }
            });

            // 2. Draw falling meteors / dropping stars
            meteors.forEach((meteor, index) => {
                meteor.x += meteor.speed * 0.4;
                meteor.y += meteor.speed * 1.2;

                // Gradient tail
                const tailX = meteor.x - meteor.speed * (meteor.length / 10) * 0.4;
                const tailY = meteor.y - meteor.speed * (meteor.length / 10) * 1.2;

                const grad = ctx.createLinearGradient(meteor.x, meteor.y, tailX, tailY);
                grad.addColorStop(0, `${meteor.color}${meteor.opacity})`);
                grad.addColorStop(0.3, `${meteor.color}${meteor.opacity * 0.5})`);
                grad.addColorStop(1, `${meteor.color}0)`);

                ctx.strokeStyle = grad;
                ctx.lineWidth = meteor.thickness;
                ctx.lineCap = "round";

                ctx.beginPath();
                ctx.moveTo(meteor.x, meteor.y);
                ctx.lineTo(tailX, tailY);
                ctx.stroke();

                // Luminous head of meteor
                ctx.fillStyle = "#ffffff";
                ctx.beginPath();
                ctx.arc(meteor.x, meteor.y, meteor.thickness * 1.1, 0, Math.PI * 2);
                ctx.fill();

                // Reset meteor when it falls off-screen
                if (meteor.y > height + 100 || meteor.x > width + 100) {
                    meteors[index] = createMeteor();
                }
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0 w-full h-full opacity-60 dark:opacity-80"
        />
    );
}
