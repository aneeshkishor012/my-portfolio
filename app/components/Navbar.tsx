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
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] sm:w-auto backdrop-blur-md rounded-full shadow-lg flex items-center justify-between pr-4 py-3 border transition-all duration-500"
            style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
                color: "var(--text-color)",
            }}
        >
            {/* ✅ Logo/Profile Badge */}
            <Link href="/" className="flex items-center space-x-2">
                <div
                    className="w-10 mx-5 h-10 flex items-center justify-center rounded-full font-bold text-lg shadow-md transition-all duration-300 hover:scale-110"
                    style={{
                        backgroundColor: "var(--accent-color)",
                        color: "#fff",
                    }}
                >
                    AK
                </div>
            </Link>

            {/* ✅ Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
                {sections.map((s) => (
                    <Link
                        key={s}
                        href={`#${s.toLowerCase()}`}
                        className="text-sm font-medium transition-all duration-300 hover:drop-shadow-[0_0_6px_var(--accent-color)]"
                        style={{
                            color: "var(--text-color)",
                        }}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.color = "var(--accent-color)")
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.style.color = "var(--text-color)")
                        }
                    >
                        {s}
                    </Link>
                ))}
                <ThemeToggle />
            </div>

            {/* ✅ Mobile Icons Row (Theme + Menu) */}
            <div className="flex items-center gap-3 md:hidden">
                <ThemeToggle />

                <button
                    className="p-2 rounded-md transition-all duration-300 hover:scale-105"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Menu"
                    style={{
                        color: "var(--text-color)",
                        backgroundColor: "transparent",
                    }}
                >
                    {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* ✅ Mobile Dropdown Menu */}
            {menuOpen && (
                <div
                    className="absolute top-full left-0 mt-2 w-full sm:w-64 flex flex-col items-center gap-4 py-4 md:hidden rounded-2xl shadow-lg border backdrop-blur-md transition-all duration-300"
                    style={{
                        backgroundColor: "var(--card-bg)",
                        borderColor: "var(--border-color)",
                        color: "var(--text-color)",
                    }}
                >
                    {sections.map((s) => (
                        <Link
                            key={s}
                            href={`#${s.toLowerCase()}`}
                            onClick={() => setMenuOpen(false)}
                            className="text-sm font-medium transition-all duration-300 hover:drop-shadow-[0_0_6px_var(--accent-color)]"
                            style={{
                                color: "var(--text-color)",
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.color = "var(--accent-color)")
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.color = "var(--text-color)")
                            }
                        >
                            {s}
                        </Link>
                    ))}
                </div>
            )}
        </motion.nav>
    );
}
