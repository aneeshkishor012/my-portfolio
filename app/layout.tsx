"use client";

import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedBg from "./components/AnimatedBg"; // ✅ Your animation component

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="transition-colors duration-500">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* ✅ Page Layout */}
          <div className="flex flex-col min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-500 relative z-10">
            <Navbar />
            <main className="flex-grow pt-24">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
