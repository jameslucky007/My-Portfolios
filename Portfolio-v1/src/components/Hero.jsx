"use client";
import { useState, useEffect } from "react";
import About from "./About";
import Experience from "./Experience";
import Skill from "./Skill";
import Project from "./Project";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "experience", "projects"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-900 relative overflow-hidden scroll-smooth">
      {/* Background glow effect */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.1), transparent 40%)`,
        }}
      />
      {/* Noise background */}
      <div
        className="fixed inset-0 opacity-1 pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Sidebar on top (mobile) */}
      <div className="block lg:hidden">
        <div className="sticky top-0 z-20">
          {/* Sidebar imported as a component if needed */}
        </div>
      </div>

      {/* Main content */}
      <main className="relative z-10 flex-1 w-full lg:ml-[33.333%] px-5 py-10 lg:p-10 overflow-y-auto max-h-screen text-gray-300">
        <section id="about"><About /></section>
        <section id="skills"><Skill /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Project /></section>
      </main>
    </div>
  );
};

export default Hero;
