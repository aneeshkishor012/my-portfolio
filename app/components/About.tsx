"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section
            id="about"
            className="py-20 bg-gray-50 dark:bg-gray-800 text-center"
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto px-6"
            >
                <h2 className="text-3xl font-bold mb-6">About Me</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Hey there 👋 I'm <strong>Aneesh Kishor K</strong>, a passionate Frontend Developer
                    who loves building intuitive and elegant web interfaces.
                    I specialize in <span className="text-blue-500 font-medium">React</span> and <span className="text-blue-500 font-medium">Next.js</span>,
                    focusing on performance, scalability, and great user experience.
                </p>

                <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                    Outside of coding, I’m constantly learning new technologies,
                    experimenting with design systems, and exploring the intersection of AI and UI.
                    I also love drawing and music 🎵 — they fuel my creativity and problem-solving approach.
                </p>
            </motion.div>
        </section>
    );
}
