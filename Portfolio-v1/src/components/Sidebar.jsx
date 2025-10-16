"use client";
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaDiscord,
  FaBehance,
  FaTelegramPlane,
} from "react-icons/fa";
import Image from "next/image";
import { TbBrandLeetcode, TbBrandLinktree } from "react-icons/tb";
import { useState } from "react";
import Link from "next/link";

const Sidebar = () => {
  const [active, setActive] = useState("about");

  const links = [
    { id: "about", label: "About" },
     { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <aside className="lg:max-w-md lg:p-10 lg:ml-12 lg:fixed lg:h-screen text-white lg:w-1/3 p-6  relative z-30">
      <div className="lg:sticky lg:top-10 pl-8">
        <Link href={"/"}>
          <Image
            className="rounded-full w-32 h-32 lg:w-40 lg:h-40 object-cover relative z-10 border-2 border-blue-300 mb-5"
            src="/photo.jpg"
            alt="Profile"
            width={150}
            height={150}
          />
        </Link>

        <a href="/">
          <h1 className="text-3xl lg:text-5xl font-extrabold text-center lg:text-left">
            Lakki Ali
          </h1>
        </a>

        <h4 className="text-lg lg:text-l mt-2 text-blue-300 text-center lg:text-left">
          Web Developer | Software Engineer
        </h4>
        <p className="mt-4 text-gray-300 text-sm lg:text-base text-center lg:text-left lg:pr-4">
          I create seamless, intelligent interfaces where design meets
          innovation
        </p>

        <nav className="mt-8 lg:mt-10 space-y-2 text-left text-l font-semibold tracking-wide">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setActive(link.id)}
              className={`nav-link ${active === link.id ? "active" : ""}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-8 lg:mt-10 flex justify-center lg:justify-start space-x-4">
          <a
            href="https://www.linkedin.com/in/lucky-developer/"
            className="text-gray-300 hover:text-blue-300 transition-colors duration-200 text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/jameslucky007"
            className="text-gray-300 hover:text-blue-300 transition-colors duration-200 text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://leetcode.com/u/lakki0072022/"
            className="text-gray-300 hover:text-blue-300 transition-colors duration-200 text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TbBrandLeetcode />
          </a>
          <a
            href="https://www.behance.net/jameslucky"
            className="text-gray-300 hover:text-blue-300 transition-colors duration-200 text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBehance />
          </a>
          <a
            href="https://linktr.ee/LakkiAli"
            className="text-gray-300 hover:text-blue-300 transition-colors duration-200 text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TbBrandLinktree />
          </a>
        </div>

        <div className="mt-4 flex justify-center lg:justify-start space-x-4">
          <a
            href="#"
            className="text-gray-300 hover:text-blue-300 transition-colors duration-200 text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            className="text-gray-300 hover:text-blue-300 transition-colors duration-200 text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>

          <a
            href="https://t.me/LuckyA008"
            className="text-gray-300 hover:text-blue-300 transition-colors duration-200 text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegramPlane />
          </a>

          <a
            href="#"
            className="text-gray-300 hover:text-blue-300 transition-colors duration-200 text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://discord.gg/qV8uyT6T"
            className="text-gray-300 hover:text-blue-300 transition-colors duration-200 text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
