"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Quick high-tech counter
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 300);
                    return 100;
                }
                const increment = Math.floor(Math.random() * 15) + 8;
                return Math.min(prev + increment, 100);
            });
        }, 40);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        y: "-100%",
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
                    }}
                    className="fixed inset-0 z-[9999] flex flex-col justify-between p-6 sm:p-12 bg-[#050505] text-white select-none pointer-events-auto"
                >
                    {/* Top status */}
                    <div className="flex justify-between items-center text-xs tracking-widest text-zinc-500 uppercase font-mono">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                            <span>System Initializing</span>
                        </div>
                        <div>SYDNEY, AU // USYD</div>
                    </div>

                    {/* Middle signature */}
                    <div className="my-auto max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <p className="text-xs font-mono uppercase tracking-widest text-purple-400 mb-2">
                                Kumar Dhananjaya
                            </p>
                            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-100">
                                Distributed Systems <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">& AI Engineering</span>
                            </h1>
                        </motion.div>
                    </div>

                    {/* Bottom Progress Counter */}
                    <div className="space-y-3">
                        <div className="flex justify-between items-end font-mono">
                            <span className="text-xs text-zinc-500">EXPERIENCE & PORTFOLIO</span>
                            <span className="text-4xl sm:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                                {progress}%
                            </span>
                        </div>
                        {/* Progress line */}
                        <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400"
                                style={{ width: `${progress}%` }}
                                transition={{ ease: "easeOut" }}
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
