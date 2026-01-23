"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { defaultSkills } from "../staticData/skills";

// ✅ Your provided defaultSkills (skills list)

export default function Skills() {
    const [skills, setSkills] = useState<any[]>(defaultSkills);
    const [filter, setFilter] = useState("All");

    // useEffect(() => {
    //     const fetchSkills = async () => {
    //         try {
    //             const res = await fetch("/api/skills");
    //             if (!res.ok) throw new Error("Network Error");
    //             const data = await res.json();
    //             setSkills(data.length ? data : defaultSkills);
    //         } catch {
    //             setSkills(defaultSkills);
    //         }
    //     };
    //     fetchSkills();
    // }, []);

    const categories = ["All", ...new Set(skills.map((s) => s.category))];
    const filteredSkills =
        filter === "All"
            ? skills
            : skills.filter((skill) => skill.category === filter);

    return (
        <section
            id="skills"
            className="py-20 transition-all duration-500"
            style={{
                backgroundColor: "var(--bg-transparent)",
                color: "var(--text-color)",
            }}
        >
            <div className="max-w-6xl mx-auto text-center">
                <h2
                    className="text-3xl font-bold mb-10"
                    style={{ color: "var(--text-color)" }}
                >
                    My Skills & Technologies
                </h2>

                {/* ✅ Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${filter === cat
                                ? "bg-blue-600 text-white border-blue-600"
                                : "border-gray-400/30 hover:bg-blue-500 hover:text-white hover:border-blue-500"
                                }`}
                            style={{
                                color:
                                    filter === cat ? "#fff" : "var(--text-color)",
                                backgroundColor:
                                    filter === cat ? "var(--accent-color)" : "transparent",
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* ✅ Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                    {filteredSkills.map((skill, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-xl flex flex-col items-center text-center shadow-md hover:shadow-lg border backdrop-blur-md transition-all duration-300"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: "var(--border-color)",
                                color: "var(--text-color)",
                            }}
                        >
                            <div className="relative w-16 h-16 mb-4">
                                <Image
                                    src={skill.image}
                                    alt={skill.title}
                                    fill
                                    className="object-contain"
                                    unoptimized
                                />
                            </div>

                            <h3
                                className="font-semibold text-lg mb-1"
                                style={{ color: "var(--text-color)" }}
                            >
                                {skill.title}
                            </h3>

                            {skill.level && (
                                <>
                                    <div
                                        className="w-full h-2 rounded-full mt-2"
                                        style={{ backgroundColor: "var(--progress-bg)" }}
                                    >
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 0.8 }}
                                            className="h-2 rounded-full"
                                            style={{
                                                background:
                                                    "linear-gradient(to right, var(--accent-color), var(--accent-light))",
                                            }}
                                        />
                                    </div>
                                    <p
                                        className="text-sm mt-1"
                                        style={{ color: "var(--subtext-color)" }}
                                    >
                                        {skill.level}% proficiency
                                    </p>
                                </>
                            )}

                            <p
                                className="text-sm mt-3 px-2 leading-relaxed"
                                style={{ color: "var(--subtext-color)" }}
                            >
                                {skill.description}
                            </p>

                            <a
                                href={skill.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 text-sm font-medium hover:underline"
                                style={{ color: "var(--accent-color)" }}
                            >
                                Learn More ↗
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

