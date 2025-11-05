"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";

export default function Navbar() {
    const sections = ["About", "Skills", "Projects", "Learnings", "Contact"];

    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-lg rounded-full px-8 py-3 flex items-center justify-between gap-8 border border-gray-200 dark:border-gray-700"
        >
            <h1 className="font-bold text-lg tracking-wide text-blue-600 dark:text-blue-400">
                Aneesh<span className="text-gray-800 dark:text-gray-100"></span>
            </h1>

            <div className="flex items-center gap-6">
                {sections.map((s) => (
                    <Link
                        key={s}
                        href={`#${s.toLowerCase()}`}
                        className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                        {s}
                    </Link>
                ))}
                <ThemeToggle />
            </div>
        </motion.nav>
    );
}
