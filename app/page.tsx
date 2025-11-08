"use client";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Learnings from "./components/Learnings";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Learnings />
      <Contact />
    </main>
  );
}
