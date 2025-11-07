"use client";
import { motion } from "framer-motion";

export default function BackgroundAnimation() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 opacity-30">
            {/* Smooth color shifting effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-cyan-400 to-violet-600"
                animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                    duration: 15,
                    ease: "linear",
                    repeat: Infinity,
                }}
                style={{
                    backgroundSize: "400% 400%",
                    mixBlendMode: "overlay",
                }}
            />
        </div>
    );
}
