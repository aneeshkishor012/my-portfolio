"use client";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Image from "next/image";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative flex flex-col items-center justify-center text-center h-[90vh]"
        >
            <Particles
                className="absolute inset-0 -z-10"
                init={loadFull}
                options={{
                    background: { color: "transparent" },
                    particles: {
                        number: { value: 40 },
                        color: { value: "#00aaff" },
                        links: { enable: true, color: "#00aaff" },
                        move: { enable: true, speed: 1 },
                    },
                }}
            />

            <div className="flex flex-col items-center gap-6">
                <div className="relative w-70 h-70 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
                    <Image
                        src="https://i.pinimg.com/736x/3c/d0/76/3cd076db7a9c1d1e3e1abb7569d9f866.jpg"
                        alt="Aneesh Kishor"
                        fill
                        className="object-cover"
                    />
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                    Hi, I'm <span className="text-blue-500">Aneesh Kishor K</span> 👋
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
                    A passionate Frontend Developer crafting interactive, elegant, and performance-focused web experiences.
                </p>

                <a
                    href="#projects"
                    className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full shadow-md transition"
                >
                    View My Work
                </a>
            </div>
        </section>
    );
}
