"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Learnings() {
    const [learnings, setLearnings] = useState<any[]>([]);

    const defaultLearnings = [
        {
            title: "ReactJS",
            description: "Build fast, interactive user interfaces using the component-based React library from Meta.",
            link: "https://react.dev/",
            image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        },
        {
            title: "React Native",
            description: "Create cross-platform mobile apps for iOS and Android using React Native and JavaScript.",
            link: "https://reactnative.dev/",
            image: "https://reactnative.dev/img/header_logo.svg",
        },
        {
            title: "Next.js",
            description: "A powerful React framework for building optimized, server-rendered, and static web applications.",
            link: "https://nextjs.org/docs",
            image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
        },
        {
            title: "Node.js",
            description: "A JavaScript runtime built on Chrome’s V8 engine, designed for scalable server-side applications.",
            link: "https://nodejs.org/en/docs",
            image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
        },
        {
            title: "React Native Vision Camera",
            description: "High-performance camera library for React Native, supporting barcode and face detection.",
            link: "https://mrousavy.com/react-native-vision-camera/",
        },
        {
            title: "Apache Cordova",
            description: "Build mobile apps using HTML, CSS, and JavaScript that access native device APIs.",
            link: "https://cordova.apache.org/docs/en/latest/",
            image: "https://cordova.apache.org/static/img/cordova_bot.png",
        },
        {
            title: "React Native Geolocation",
            description: "Access device location services easily using the React Native Geolocation API.",
            link: "https://github.com/react-native-geolocation/react-native-geolocation",
        },
        {
            title: "Google Gemini API (AI & Generative Key)",
            description: "Use Google’s Gemini Generative AI models for building intelligent chatbots and creative assistants.",
            link: "https://ai.google.dev/gemini-api/docs",
        },
        {
            title: "Expo (React Native Toolkit)",
            description: "Build, deploy, and test React Native apps faster using Expo’s tools and managed workflow.",
            link: "https://docs.expo.dev/",
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAXVBMVEVHcEwLDhMKDhMLDxMKDhMKDhQHDw8LDw8LDhIKDhIKDxIMDxMKDhMLDhMPDw8JDRELDhMKDhIKDxULDhIJDA8KDRIMDhMKDhILDxMLDxIKDhILDxEJDRMHCxMLDxRJ+fFnAAAAH3RSTlMAn+//j38gQM+/YFDf3xCAoO8w31BfkN9AcK+AgEBwIYLNDwAAAMVJREFUeAGt0MsWQzAUheHNIe1BkWpLr+//mLVErE1i1H5Dg33kx58lqUiaYVcukww7jMwOiDvKTBFVyKJETCWLUx39Q9IgYCohaTjRykq290RrxTnHBzpjbPSpF3GuQEm1gicmGN0iE4U/gFHd+zUe4E9DUCunA/THDTXyB5zarmu1wc27n+BGDxB1E4YHDMicK6GBJxhevpYf6MCWGAq8ZTJgY/ATygmYK67gBMzHgG4SbGLodEsRpe7xRc8HmOntB7/7AmhdCQtgyt3wAAAAAElFTkSuQmCC",
        },
        {
            title: "TypeScript",
            description: "A superset of JavaScript that adds static typing and powerful tooling for large-scale applications.",
            link: "https://www.typescriptlang.org/docs/",
            image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
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
        <section
            id="learnings"
            className="py-20 bg-gray-50/70 dark:bg-gray-900/60 items-center justify-center text-center"
        >
            <h2 className="text-3xl font-bold mb-8">My Learnings</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {learnings.map((learning, idx) => (
                    <div
                        key={idx}
                        className="card p-6 bg-gray-100 dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition"
                    >
                        {learning?.image && <div className="relative w-100% h-16 mb-4">
                            <Image
                                src={learning.image}
                                alt={learning.title}
                                fill
                                className="object-contain"
                                unoptimized
                            />
                        </div>}
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
