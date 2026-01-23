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

                {/* Experience */}
                <p
                    className="mt-6 leading-relaxed"
                    style={{ color: "var(--subtext-color)" }}
                >
                    I bring{" "}
                    <span style={{ color: "var(--accent-color)" }}>
                        4+ years of hands-on experience
                    </span>{" "}
                    as a full-time intern and employee, working on large-scale{" "}
                    <strong>E-Cart Management</strong> and{" "}
                    <strong>Industry 4.0–based applications</strong>. My work
                    includes building interactive and scalable frontend systems,
                    real-time production monitoring solutions, and feature-rich
                    dashboards with a strong focus on performance, usability,
                    and modern design principles.
                </p>

                <p
                    className="mt-4 leading-relaxed"
                    style={{ color: "var(--subtext-color)" }}
                >
                    I have designed server-driven frontend architectures,
                    developed complex business logic, integrated native
                    capabilities such as BLE, Camera, and File System APIs, and
                    built master applications like PPC Upload, WIP tracking,
                    Reports, and Interactive Dashboards. I also actively support
                    teams through UI development, reusable component creation,
                    complex validation handling, and advanced debugging.
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
