"use client";
import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "next-themes";

function AnimatedBg() {
    const [init, setInit] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => setInit(true));
    }, []);

    const isDark = theme === "dark";
    const colors = isDark
        ? ["rgba(99,102,241,0.6)", "rgba(168,85,247,0.55)", "rgba(236,72,153,0.5)"]
        : ["rgba(99,102,241,0.9)", "rgba(168,85,247,0.9)", "rgba(236,72,153,0.9)"];

    return (
        <div className="absolute inset-0 overflow-hidden z-0">
            {init && (
                <Particles
                    id="tsparticles"
                    className="absolute inset-0 -z-10"
                    options={{
                        background: { color: "transparent" },
                        fpsLimit: 60,
                        particles: {
                            number: { value: 60 },
                            color: { value: isDark ? "#60a5fa" : "#1e3a8a" },
                            links: { enable: true, color: isDark ? "#60a5fa" : "#2563eb" },
                            move: { enable: true, speed: 0.3 },
                        },
                    }}
                />
            )}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full blur-3xl"
                    style={{
                        background: `radial-gradient(circle at center, ${colors[i % colors.length]} 0%, transparent 70%)`,
                        width: `${Math.random() * 350 + 200}px`,
                        height: `${Math.random() * 350 + 200}px`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        opacity: isDark ? 0.7 : 0.9,
                    }}
                    animate={{
                        x: [0, 20, -20, 0],
                        y: [0, -20, 20, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}

export default AnimatedBg;
