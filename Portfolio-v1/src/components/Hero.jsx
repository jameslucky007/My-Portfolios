'use client';
import { useState, useEffect } from 'react';
import About from './About';
import Experience from './Experience';
import Skill from './Skill';
import Project from './Project';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-900 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 relative overflow-hidden">
      <div
        className="fixed inset-0 pointer-events-none z-10"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1), transparent 40%)`
        }}
      />
      <div
        className="fixed inset-0 opacity-2 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}
      />
      <main className="ml-[33.3333%] w-2/3 p-5 lg:p-10 overflow-y-auto max-h-screen text-gray-300 relative z-20">
        <About />
        <Skill/>
        <Experience />
        <Project/>
        
      </main>
    </div>
  );
};

export default Hero;
