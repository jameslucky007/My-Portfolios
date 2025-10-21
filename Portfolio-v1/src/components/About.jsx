"use client";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const About = () => {
  return (
    <main className="w-full relative z-20 overflow-hidden">
      <section className="max-w-5xl mx-auto text-gray-300 leading-relaxed px-5 sm:px-8 pt-12 lg:pt-20 pb-12 space-y-6">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-blue-300">
            About Me
          </h2>

          <a
            href="https://docs.google.com/document/d/1eSluUwmdj2ONIEI9eCUridzldBN2smGJiVNQCvGeobI/edit?tab=t.0"
            id="about"
            className="group inline-flex items-center gap-2 text-blue-300 hover:text-blue-400 transition-all duration-200 text-lg sm:text-xl font-semibold"
          >
            Resume
            <FiArrowUpRight className="text-2xl sm:text-3xl lg:text-5xl transform transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 mr-5" />
          </a>
        </div>

        {/* Paragraph */}
        <p className="text-base sm:text-lg leading-relaxed tracking-wide">
          I'm a developer passionate about crafting accessible, pixel-perfect
          user interfaces that blend thoughtful design with robust engineering.
          I'm a <strong>B.Tech AI & Data Science</strong> student in my third and a passionate freelance <strong>MERN Stack Developer</strong>{" "}
          dedicated to building exceptional digital experiences. I work with
          clients on UI/UX design, web, and app development to deliver clean,
          scalable, and high-performance solutions.
        </p>

        <p className="text-base sm:text-lg leading-relaxed tracking-wide">
          My technical foundation includes strong proficiency in{" "}
          <strong>Data Structures and Algorithms (C++)</strong> and full-stack
          development using{" "}
          <strong>MongoDB, Express, React, and Node.js</strong>. I transform
          ideas into interfaces that prioritize both aesthetics and performance.
        </p>

        <p className="text-base sm:text-lg leading-relaxed tracking-wide">
          Currently, I'm developing a startup project focused on{" "}
          <strong>detecting misinformation</strong> — a challenge central to
          today's digital landscape. I'm expanding my expertise in{" "}
          <strong>AI/ML, cybersecurity, and game development</strong>, always
          eager to learn and innovate.
        </p>

        <p className="text-base sm:text-lg leading-relaxed tracking-wide">
          Beyond coding, I enjoy <strong>football, music, and travel</strong>,
          which inspire creativity and problem-solving in my work.
        </p>
      </section>
    </main>
  );
};

export default About;
