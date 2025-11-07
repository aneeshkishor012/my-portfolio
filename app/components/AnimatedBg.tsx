"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "next-themes";

export default function AnimatedBg() {
    const [init, setInit] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => setInit(true));
    }, []);

    const isDark = theme === "dark";

    // 🌈 Color combos — stronger and more saturated in light mode
    const colors = isDark
        ? [
            "rgba(99,102,241,0.6)",   // Indigo
            "rgba(168,85,247,0.55)",  // Purple
            "rgba(236,72,153,0.5)",   // Pink
            "rgba(56,189,248,0.45)",  // Sky
            "rgba(147,197,253,0.45)", // Blue
        ]
        : [
            "rgba(99,102,241,0.55)",   // Indigo
            "rgba(168,85,247,0.5)",    // Purple
            "rgba(236,72,153,0.45)",   // Pink
            "rgba(56,189,248,0.4)",    // Sky
            "rgba(59,130,246,0.4)",    // Blue
        ];
    // 🟢 Particle color contrast fix
    const particleColor = isDark ? "#60a5fa" : "#2563eb";
    const linkColor = isDark ? "#60a5fa" : "#3b82f6";

    // const particleColor = isDark ? "#60a5fa" : "#1e3a8a";
    // const linkColor = isDark ? "#60a5fa" : "#1e40af";


    return (
        <div className="absolute inset-0 overflow-hidden z-0">
            {/* ✅ Particles */}
            {init && (
                <Particles
                    id="tsparticles"
                    className="absolute inset-0 -z-10"
                    options={{
                        background: { color: "transparent" },
                        fpsLimit: 60,
                        particles: {
                            number: { value: 45 },
                            color: { value: particleColor },
                            links: {
                                enable: true,
                                color: linkColor,
                                opacity: isDark ? 0.3 : 0.45,
                                width: isDark ? 1 : 1.2,
                            },
                            move: { enable: true, speed: isDark ? 0.8 : 0.5 },
                            opacity: { value: isDark ? 0.4 : 0.5 },
                            size: { value: { min: 1, max: 3 } },
                        },
                        interactivity: {
                            events: {
                                onHover: { enable: true, mode: "repulse" },
                                resize: true,
                            },
                            modes: {
                                repulse: { distance: 100, duration: 0.4 },
                            },
                        }
                    }}
                />
            )}
            {/* ✅ Light Mode Contrast Layer */}
            {!isDark && (
                <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px] z-0" />
            )}



            {/* ✅ Animated Glowing Blobs */}
            {[...Array(10)].map((_, i) => {
                const color = colors[i % colors.length];
                const size = Math.random() * 350 + 200;
                const duration = Math.random() * 12 + 10;
                const delay = Math.random() * 5;
                const xMove = Math.random() * 40 + 20;
                const yMove = Math.random() * 40 + 20;

                return (
                    <motion.div
                        key={i}
                        className="absolute rounded-full blur-3xl"
                        style={{
                            background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)`,
                            width: `${size}px`,
                            height: `${size}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            opacity: isDark ? 0.7 : 0.9, // brighter in light mode
                            mixBlendMode: isDark ? "screen" : "multiply",
                        }}
                        animate={{
                            x: [0, xMove, -xMove, 0],
                            y: [0, -yMove, yMove, 0],
                            scale: [1, 1.15, 1],
                            opacity: [0.5, 0.9, 0.5],
                        }}
                        transition={{
                            duration,
                            delay,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                );
            })}
        </div>
    );
}
