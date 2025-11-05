"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    Code,
    Database,
    Monitor,
    Cpu,
    Wrench,
    GitBranch,
    Palette,
} from "lucide-react";

export default function Skills() {
    const [skills, setSkills] = useState<any[]>([]);
    const [filter, setFilter] = useState("All");

    // Default hardcoded data
    const defaultSkills = [
        {
            name: "React.js",
            category: "Frontend",
            level: 90,
            icon: <Monitor className="w-6 h-6 text-blue-500" />,
        },
        {
            name: "Next.js",
            category: "Frontend",
            level: 85,
            icon: <Cpu className="w-6 h-6 text-blue-500" />,
        },
        {
            name: "Tailwind CSS",
            category: "UI Framework",
            level: 88,
            icon: <Palette className="w-6 h-6 text-teal-500" />,
        },
        {
            name: "TypeScript",
            category: "Language",
            level: 80,
            icon: <Code className="w-6 h-6 text-blue-400" />,
        },
        {
            name: "Node.js",
            category: "Backend",
            level: 75,
            icon: <Cpu className="w-6 h-6 text-green-500" />,
        },
        {
            name: "MongoDB",
            category: "Database",
            level: 70,
            icon: <Database className="w-6 h-6 text-green-600" />,
        },
        {
            name: "Redux",
            category: "State Management",
            level: 78,
            icon: <Cpu className="w-6 h-6 text-purple-500" />,
        },
        {
            name: "Git / GitHub",
            category: "Tools",
            level: 85,
            icon: <GitBranch className="w-6 h-6 text-gray-600 dark:text-gray-300" />,
        },
    ];

    // Fetch MongoDB data (fallback to defaults)
    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const res = await fetch("/api/skills");
                if (!res.ok) throw new Error("Network Error");
                const data = await res.json();
                setSkills(data.length ? data : defaultSkills);
            } catch {
                setSkills(defaultSkills);
            }
        };
        fetchSkills();
    }, []);

    // Filtered skills based on selected category
    const categories = ["All", ...new Set(defaultSkills.map((s) => s.category))];
    const filteredSkills =
        filter === "All"
            ? skills
            : skills.filter((skill) => skill.category === filter);

    return (
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-10">My Skills</h2>

                {/* Category Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${filter === cat
                                    ? "bg-blue-500 text-white border-blue-500"
                                    : "bg-transparent border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white hover:border-blue-500"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="card flex flex-col items-center justify-center gap-3 p-6"
                        >
                            <div className="flex items-center gap-2">
                                {skill.icon}
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>

                            {/* Progress Bar */}
                            <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full mt-3">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{ duration: 0.8 }}
                                    className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-300"
                                />
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                {skill.level}% proficiency
                            </p>
                            <p className="text-xs text-gray-400">{skill.category}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
