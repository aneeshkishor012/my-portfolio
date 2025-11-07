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
        <footer className="py-6 text-center border-t dark:border-gray-700">
            {/* ✅ Responsive Social Links */}
            <div
                className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-3 px-4"
            >
                {socialLinks.map(({ name, icon: Icon, href }) => (
                    <a
                        key={name}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.8)] transition-all duration-300"
                    >
                        <Icon size={20} />
                        <span className="hidden sm:inline">{name}</span>
                    </a>
                ))}
            </div>

            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 px-4">
                © 2025 Aneesh Kishor K
            </p>
        </footer>
    );
}
