"use client";
import { FaGithub, FaLinkedin, FaEnvelope, FaMedium, FaDev } from "react-icons/fa";

const socialLinks = [
    {
        name: "GitHub",
        icon: FaGithub,
        href: "https://github.com/aneeshkishor012",
    },
    {
        name: "LinkedIn",
        icon: FaLinkedin,
        href: "https://www.linkedin.com/in/aneesh-kishor-k-88b040221/",
    },
    {
        name: "Medium",
        icon: FaMedium,
        href: "https://medium.com/@aneeshkishor012",
    },
    {
        name: "Dev Community",
        icon: FaDev,
        href: "https://dev.to/aneeshkishor012",
    },
    {
        name: "Email",
        icon: FaEnvelope,
        href: "mailto:aneeshkishor012@gmail.com",
    },
];

export default function Footer() {
    return (
        <footer
            className="py-8 border-t text-center transition-all duration-500 backdrop-blur-[0.5px]"
            style={{
                backgroundColor: "var(--bg-transparent)",
                borderColor: "var(--border-color)",
                color: "var(--text-color)",
            }}
        >
            {/* ✅ Social Links Grid */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-4 px-4">
                {socialLinks.map(({ name, icon: Icon, href }) => (
                    <a
                        key={name}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 transition-all duration-300 hover:scale-105"
                        style={{
                            color: "var(--text-color)",
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget.style.color = "var(--accent-color)");
                            (e.currentTarget.style.filter = "drop-shadow(0 0 8px var(--accent-color))");
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget.style.color = "var(--text-color)");
                            (e.currentTarget.style.filter = "none");
                        }}
                    >
                        <Icon size={20} />
                        <span className="hidden sm:inline">{name}</span>
                    </a>
                ))}
            </div>

            {/* ✅ Footer Text */}
            <p
                className="text-xs sm:text-sm transition-all duration-300"
                style={{ color: "var(--subtext-color)" }}
            >
                © 2025 <span style={{ color: "var(--accent-color)" }}>Aneesh Kishor K</span>
            </p>
        </footer>
    );
}
