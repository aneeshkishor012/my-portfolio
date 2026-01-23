"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
// ✅ Import your favorite icons here
import { FaCamera, FaMapMarkerAlt } from "react-icons/fa";
import { defaultLearnings } from "../staticData/learnings";

export default function Learnings() {
    const [learnings, setLearnings] = useState<any[]>([]);

    useEffect(() => {
        const fetchLearnings = async () => {
            try {
                const res = await fetch("/api/learnings");
                if (!res.ok) throw new Error("Network Error");
                const data = await res.json();
                setLearnings(data.length ? data : defaultLearnings);
            } catch {
                setLearnings(defaultLearnings);
            }
        };
        fetchLearnings();
    }, []);

    return (
        <section
            id="learnings"
            className="py-20 transition-all duration-500 text-center"
            style={{
                backgroundColor: "var(--bg-transparent)",
                color: "var(--text-color)",
            }}
        >
            <h2
                className="text-3xl font-bold mb-10"
                style={{ color: "var(--text-color)" }}
            >
                My Learnings & Resources
            </h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {learnings.map((learning, idx) => {
                    const Icon = learning.icon; // ✅ dynamic icon reference

                    return (
                        <div
                            key={idx}
                            className="p-6 rounded-xl shadow-md hover:shadow-lg border hover:-translate-y-1 backdrop-blur-md transition-all duration-300"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: "var(--border-color)",
                                color: "var(--text-color)",
                            }}
                        >
                            {/* ✅ Conditionally Render Image or Icon */}
                            <div className="relative w-full h-20 mb-4 flex items-center justify-center">
                                {learning.image ? (
                                    <Image
                                        src={learning.image}
                                        alt={learning.title}
                                        fill
                                        className="object-contain"
                                        unoptimized
                                    />
                                ) : Icon ? (
                                    <Icon
                                        size={56}
                                        className="text-blue-500"
                                        style={{ color: "var(--accent-color)" }}
                                    />
                                ) : null}
                            </div>

                            <h3
                                className="text-xl font-semibold mb-2"
                                style={{ color: "var(--accent-color)" }}
                            >
                                {learning.title}
                            </h3>

                            <p
                                className="text-sm leading-relaxed mb-3"
                                style={{ color: "var(--subtext-color)" }}
                            >
                                {learning.description}
                            </p>

                            {learning.link && (
                                <a
                                    href={learning.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-sm font-medium hover:underline"
                                    style={{ color: "var(--accent-color)" }}
                                >
                                    View Resource ↗
                                </a>
                            )}
                        </div>
                    );
                })}
            </div>

            {learnings.length === 0 && (
                <p className="mt-6" style={{ color: "var(--subtext-color)" }}>
                    No learnings found yet. Keep exploring 🌱
                </p>
            )}
        </section>
    );
}


