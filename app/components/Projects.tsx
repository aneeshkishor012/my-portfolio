"use client";
import { useEffect, useState } from "react";
import { defaultProjects } from "../staticData/projects";

export default function Projects() {
    const [projects, setProjects] = useState<any[]>([]);

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
            className="py-20 transition-all duration-500 backdrop-blur-[0.5px]"
            style={{
                backgroundColor: "var(--card-bg)",
                color: "var(--text-color)",
            }}
        >
            <h2
                className="text-3xl font-bold mb-10 text-center"
                style={{ color: "var(--text-color)" }}
            >
                Projects
            </h2>

            <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3 px-6">
                {projects.map((p, idx) => (
                    <div
                        key={idx}
                        className="p-6 rounded-xl shadow-md hover:shadow-xl border transition-all duration-300 hover:-translate-y-1 backdrop-blur-md"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "var(--border-color)",
                            color: "var(--text-color)",
                        }}
                    >
                        <h3
                            className="text-xl font-semibold mb-2"
                            style={{ color: "var(--accent-color)" }}
                        >
                            {p.title}
                        </h3>

                        <p
                            className="text-sm mb-3 leading-relaxed"
                            style={{ color: "var(--subtext-color)" }}
                        >
                            {p.description}
                        </p>

                        <a
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium hover:underline"
                            style={{ color: "var(--accent-color)" }}
                        >
                            View Project ↗
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
