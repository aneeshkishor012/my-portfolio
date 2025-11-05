"use client";
import { useEffect, useState } from "react";

export default function Learnings() {
    const [learnings, setLearnings] = useState<any[]>([]);

    const defaultLearnings = [
        {
            title: "Next.js App Router & Server Actions",
            description:
                "Learned about the new Next.js App Router and Server Actions to improve rendering and performance.",
            link: "https://nextjs.org/docs/app",
        },
        {
            title: "Advanced React Hooks",
            description:
                "Deep-dived into React 19 hooks such as useOptimistic and useActionState for concurrent updates.",
            link: "https://react.dev",
        },
        {
            title: "UI Animation with Framer Motion",
            description:
                "Implemented smooth motion effects using Framer Motion integrated seamlessly with Tailwind CSS.",
            link: "https://www.framer.com/motion/",
        },
    ];

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
        <section id="learnings" className="py-20 text-center bg-gray-50 dark:bg-gray-800">
            <h2 className="text-3xl font-bold mb-8">My Learnings</h2>

            <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
                {learnings.map((learning, idx) => (
                    <div
                        key={idx}
                        className="p-6 bg-gray-100 dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition"
                    >
                        <h3 className="text-xl font-semibold mb-2 text-blue-500">
                            {learning.title}
                        </h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            {learning.description}
                        </p>
                        {learning.link && (
                            <a
                                href={learning.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-block text-blue-600 dark:text-blue-400 hover:underline text-sm"
                            >
                                View Resource ↗
                            </a>
                        )}
                    </div>
                ))}
            </div>

            {learnings.length === 0 && (
                <p className="text-gray-500 mt-6">
                    No learnings found yet. Keep exploring 🌱
                </p>
            )}
        </section>
    );
}
