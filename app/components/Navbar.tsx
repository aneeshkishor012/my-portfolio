"use client";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const sections = ["About", "Skills", "Projects", "Learnings", "Contact"];
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] sm:w-auto bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-lg rounded-full px-6 py-3 border border-gray-200 dark:border-gray-700 flex items-center justify-between"
        >
            {/* Logo */}
            <Link href="/" className="text-lg font-bold text-blue-600 dark:text-blue-400">
                Aneesh<span className="text-gray-800 dark:text-gray-100"></span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
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

            {/* Mobile Menu Button */}
            <button
                className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle Menu"
            >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="absolute top-full left-0 mt-2 w-full sm:w-64 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 flex flex-col items-center gap-4 py-4 md:hidden">
                    {sections.map((s) => (
                        <Link
                            key={s}
                            href={`#${s.toLowerCase()}`}
                            onClick={() => setMenuOpen(false)}
                            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
                        >
                            {s}
                        </Link>
                    ))}
                    <ThemeToggle />
                </div>
            )}
        </motion.nav>
    );
}
