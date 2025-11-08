"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section
            id="about"
            className="py-20 transition-all duration-500 backdrop-blur-[0.5px]"
            style={{
                backgroundColor: "var(--card-bg)",
                color: "var(--text-color)",
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto px-6 text-center"
            >
                <h2
                    className="text-3xl font-bold mb-6"
                    style={{ color: "var(--text-color)" }}
                >
                    About Me
                </h2>

                <p
                    className="text-lg leading-relaxed"
                    style={{ color: "var(--subtext-color)" }}
                >
                    Hey there 👋 I'm{" "}
                    <strong
                        style={{ color: "var(--text-color)" }}
                        className="font-semibold"
                    >
                        Aneesh Kishor K
                    </strong>
                    , a passionate Frontend Developer who loves building
                    intuitive and elegant web interfaces. I specialize in{" "}
                    <span
                        style={{ color: "var(--accent-color)" }}
                        className="font-medium"
                    >
                        React
                    </span>{" "}
                    and{" "}
                    <span
                        style={{ color: "var(--accent-color)" }}
                        className="font-medium"
                    >
                        Next.js
                    </span>
                    , focusing on performance, scalability, and great user
                    experience.
                </p>

                <p
                    className="mt-6 leading-relaxed"
                    style={{ color: "var(--subtext-color)" }}
                >
                    Outside of coding, I’m constantly learning new technologies,
                    experimenting with design systems, and exploring the
                    intersection of{" "}
                    <span style={{ color: "var(--accent-color)" }}>
                        AI and UI
                    </span>
                    . I also love drawing and music 🎵 — they fuel my creativity
                    and problem-solving approach.
                </p>
            </motion.div>
        </section>
    );
}
