"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// ✅ Your provided resources (skills list)
export const resources = [
    {
        title: "C Programming",
        level: 85,
        description:
            "A powerful general-purpose programming language used for system software, embedded systems, and high-performance applications. Known for its efficiency, portability, and close-to-hardware capabilities.",
        link: "https://devdocs.io/c/",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
    },
    {
        title: "HTML5",
        level: 85,
        description:
            "Markup language for structuring and presenting web content.",
        link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    },
    {
        title: "CSS3",
        level: 80,
        description:
            "Stylesheet language for designing visually appealing web pages.",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
    },
    {
        title: "JavaScript",
        level: 90,
        description:
            "Programming language that powers interactive web experiences.",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
        title: "ReactJS",
        level: 90,
        description: "JavaScript library for building user interfaces.",
        link: "https://react.dev/",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
        title: "React Native",
        level: 85,
        description: "Framework for building native apps using React.",
        link: "https://reactnative.dev/",
        image: "https://reactnative.dev/img/header_logo.svg",
    },
    {
        title: "Python Basics",
        level: 80,
        description:
            "A beginner-friendly, high-level programming language known for its simplicity, readability, and vast library support. Ideal for data analysis, web development, automation, and AI applications.",
        link: "https://docs.python.org/3/tutorial/",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    },
    {
        title: "Git",
        description: "Version control system for tracking code changes.",
        link: "https://git-scm.com/doc",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg",
    },
    {
        title: "Node.js",
        description: "JavaScript runtime for backend development.",
        link: "https://nodejs.org/en/docs/",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    },
    {
        title: "UI Libraries",
        description:
            "Pre-built UI components like Ant Design, Material UI.",
        link: "https://ant.design/",
        image:
            "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
    },
];

export default function Skills() {
    const [skills, setSkills] = useState<any[]>([]);
    const [filter, setFilter] = useState("All");

    // ✅ Fetch from MongoDB if available, else use resources
    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const res = await fetch("/api/skills");
                if (!res.ok) throw new Error("Network Error");
                const data = await res.json();
                setSkills(data.length ? data : resources);
            } catch {
                setSkills(resources);
            }
        };
        fetchSkills();
    }, []);

    // ✅ Dynamic category extraction
    const categories = ["All", "Frontend", "Backend", "Language", "Tools"];
    const filteredSkills =
        filter === "All"
            ? skills
            : skills.filter((skill) =>
                skill.title.toLowerCase().includes(filter.toLowerCase())
            );

    return (
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-10">My Skills & Technologies</h2>

                {/* ✅ Filter Buttons */}
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

                {/* ✅ Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                    {filteredSkills.map((skill, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="card p-6 flex flex-col items-center text-center relative"
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
                            <h3 className="font-semibold text-lg mb-1">{skill.title}</h3>
                            {skill.level && (
                                <>
                                    <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full mt-2">
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
                                </>
                            )}
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 px-2">
                                {skill.description}
                            </p>
                            <a
                                href={skill.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 text-blue-500 hover:underline text-sm font-medium"
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
