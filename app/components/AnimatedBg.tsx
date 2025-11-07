"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function AnimatedBg() {
    // Gradient color palette
    const [init, setInit] = useState(false);

    useEffect(() => {
        // Initialize the particles engine
        initParticlesEngine(async (engine) => {
            await loadSlim(engine); // ✅ Load lightweight engine
        }).then(() => setInit(true));
    }, []);
    const colors = [
        "rgba(99,102,241,0.5)", // Indigo
        "rgba(168,85,247,0.5)", // Purple
        "rgba(236,72,153,0.4)", // Pink
        "rgba(56,189,248,0.4)", // Sky
        "rgba(147,197,253,0.4)" // Blue
    ];



    return (
        <div className="absolute inset-0 overflow-hidden z-0">
            {init && (
                <Particles
                    id="tsparticles"
                    className="absolute inset-0 -z-10"
                    options={{
                        background: { color: "transparent" },
                        particles: {
                            number: { value: 40 },
                            color: { value: "#00aaff" },
                            links: { enable: true, color: "#00aaff" },
                            move: { enable: true, speed: 1 },
                        },
                    }}
                />
            )}
            {[...Array(10)].map((_, i) => {
                // Random color and motion variations
                const color = colors[i % colors.length];
                const size = Math.random() * 400 + 200; // blob size
                const duration = Math.random() * 12 + 10; // slow movement
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
                            opacity: 0.6
                        }}
                        animate={{
                            x: [0, xMove, -xMove, 0],
                            y: [0, -yMove, yMove, 0],
                            scale: [1, 1.1, 1],
                            opacity: [0.4, 0.7, 0.4]
                        }}
                        transition={{
                            duration,
                            delay,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                );
            })}
        </div>
    );
}
