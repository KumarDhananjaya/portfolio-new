"use client";

import { motion } from "framer-motion";

const row1 = [
    { name: "TypeScript", icon: "⚡" },
    { name: "Python", icon: "🐍" },
    { name: "LangChain", icon: "🦜" },
    { name: "Multi-Agent AI", icon: "🤖" },
    { name: "Model Context Protocol", icon: "🔌" },
    { name: "Golang", icon: "🔷" },
    { name: "Redis & Lua", icon: "🚀" },
    { name: "Kafka", icon: "📨" },
    { name: "ClickHouse", icon: "📊" },
    { name: "CRDTs (Yjs)", icon: "🔄" },
    { name: "FastAPI", icon: "⚡" },
    { name: "Next.js 16", icon: "▲" },
];

const row2 = [
    { name: "The University of Sydney", icon: "🎓" },
    { name: "Distributed Systems", icon: "🌐" },
    { name: "Zero-Trust Architecture", icon: "🛡️" },
    { name: "Kubernetes & Helm", icon: "☸️" },
    { name: "Azure Cloud", icon: "☁️" },
    { name: "Terraform", icon: "🏗️" },
    { name: "OPA Gatekeeper", icon: "🔒" },
    { name: "WebSockets (<150ms)", icon: "⚡" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "React Native", icon: "📱" },
    { name: "100k+ RPS Engines", icon: "🔥" },
    { name: "Open Source Contributor", icon: "⭐" },
];

export function TechMarquee() {
    return (
        <div className="py-10 overflow-hidden relative border-y border-border/50 bg-background/50 backdrop-blur-sm select-none">
            {/* Gradient edge masks */}
            <div className="absolute left-0 inset-y-0 w-24 sm:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 inset-y-0 w-24 sm:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            {/* Row 1: Leftward */}
            <div className="flex gap-4 mb-4 whitespace-nowrap">
                <motion.div
                    className="flex gap-4 shrink-0"
                    animate={{ x: [0, -1035] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 25,
                            ease: "linear",
                        },
                    }}
                >
                    {[...row1, ...row1, ...row1].map((item, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-border bg-card/60 hover:border-purple-500/50 hover:bg-purple-500/5 transition-colors shadow-xs"
                        >
                            <span className="text-sm">{item.icon}</span>
                            <span className="text-xs sm:text-sm font-medium tracking-tight text-foreground/90 font-mono">
                                {item.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Row 2: Rightward */}
            <div className="flex gap-4 whitespace-nowrap">
                <motion.div
                    className="flex gap-4 shrink-0"
                    animate={{ x: [-1035, 0] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 28,
                            ease: "linear",
                        },
                    }}
                >
                    {[...row2, ...row2, ...row2].map((item, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-border bg-card/60 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-colors shadow-xs"
                        >
                            <span className="text-sm">{item.icon}</span>
                            <span className="text-xs sm:text-sm font-medium tracking-tight text-foreground/90 font-mono">
                                {item.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
