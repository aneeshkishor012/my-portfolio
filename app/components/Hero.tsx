"use client";
import Image from "next/image";
import { motion } from "framer-motion";
// import AnimatedBg from "./AnimatedBg";
import dynamic from "next/dynamic";
const AnimatedBg = dynamic(() => import("./AnimatedBg"), { ssr: false });


export default function Hero() {


    return (
        <section
            id="hero"
            className="relative flex flex-col items-center justify-center text-center min-h-[85vh] px-4 sm:px-8 overflow-hidden"
        >
            {/* ✅ Global Animated Background */}
            <div className="fixed inset-0 -z-10">
                <AnimatedBg />
            </div>
            {/* Profile Image */}
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 rounded-full border-4 border-blue-500 shadow-xl overflow-hidden mb-5"
            >
                <Image
                    // src="https://i.pinimg.com/736x/3c/d0/76/3cd076db7a9c1d1e3e1abb7569d9f866.jpg"
                    src="https://avatars.githubusercontent.com/u/91428186?v=4"
                    alt="Aneesh Kishor"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 rounded-full ring-4 ring-transparent dark:ring-blue-400/30 animate-pulse"></div>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
            >
                Hi, I'm{" "}
                <span className="text-blue-500 dark:text-blue-400">Aneesh Kishor K</span> 👋
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-md sm:max-w-xl mt-3"
                style={{ color: "var(--text-color)" }}
            >
                A passionate Frontend Developer crafting interactive, elegant, and
                performance-focused web experiences.
            </motion.p>

            <motion.a
                href="#projects"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full shadow-lg transition text-sm sm:text-base"
            >
                View My Work
            </motion.a>
        </section>
    );
}
