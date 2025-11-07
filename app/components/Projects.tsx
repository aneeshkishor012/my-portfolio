"use client";
import { useEffect, useState } from "react";

export default function Projects() {
    const [projects, setProjects] = useState<any[]>([]);

    const defaultProjects = [
        {
            title: "AI Chat Assistant",
            description:
                "Built an intelligent chat interface using Gemini AI API, supporting code editing and formatting tools.",
            link: "https://github.com/aneeshkishork/ai-chat-assistant",
        },
        {
            title: "Music Player App",
            description:
                "A React Native-based music player using react-native-track-player and Redux for global state.",
            link: "https://github.com/aneeshkishork/music-app",
        },
        {
            title: "Portfolio Website",
            description:
                "Created a modern personal portfolio using Next.js, Tailwind, and Framer Motion with theme toggle.",
            link: "https://aneeshkishork.vercel.app/",
        },
    ];

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch("/api/projects");
                if (!res.ok) throw new Error("Network Error");
                const data = await res.json();
                setProjects(data.length ? data : defaultProjects);
            } catch {
                setProjects(defaultProjects);
            }
        };
        fetchProjects();
    }, []);

    return (
        <section
            id="projects"
            className="py-20 bg-gray-50 dark:bg-gray-800/75 text-center"
        >


            <h2 className="text-3xl font-bold mb-8">Projects</h2>

            <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3 px-6">
                {projects.map((p, idx) => (
                    <div
                        key={idx}
                        className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition"
                        // className="card p-6 bg-gray-100 dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition"

                    >
                        <h3 className="text-xl font-semibold text-blue-500 mb-2">{p.title}</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm mb-3 leading-relaxed">
                            {p.description}
                        </p>
                        <a
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                        >
                            View Project ↗
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
