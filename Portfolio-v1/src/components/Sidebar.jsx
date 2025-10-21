"use client";
import React, { useState } from "react";
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
import { TbBrandLeetcode, TbBrandLinktree } from "react-icons/tb";
import Image from "next/image";
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
    <aside className="lg:max-w-md lg:p-10 lg:ml-12 lg:fixed lg:h-screen text-white lg:w-1/3 p-6 relative z-30 flex flex-col items-center lg:items-start text-center lg:text-left">
      <div className="lg:sticky lg:top-10 w-full flex flex-col items-center lg:items-start">
        <Link href={"/"}>
          <Image
            className="rounded-full w-32 h-32 lg:w-40 lg:h-40 object-cover border-2 border-blue-300 mb-5"
            src="/photo.jpg"
            alt="Profile"
            width={150}
            height={150}
          />
        </Link>

        <a href="/">
          <h1 className="text-3xl lg:text-5xl font-extrabold">Lakki Ali</h1>
        </a>

        <h4 className="text-lg lg:text-l mt-2 text-blue-300">
          Web Developer | Software Engineer
        </h4>

        <p className="mt-4 text-gray-300 text-sm lg:text-base max-w-xs lg:max-w-none">
          I create seamless, intelligent interfaces where design meets
          innovation
        </p>

        <nav className="mt-8 lg:mt-10 space-y-2 text-l font-semibold tracking-wide flex flex-col items-center lg:items-start">
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

        <div className="mt-8 lg:mt-10 flex flex-wrap justify-center lg:justify-start space-x-4">
          <a
            href="https://www.linkedin.com/in/lucky-developer/"
            className="text-gray-300 hover:text-blue-300 transition-colors duration-200 text-2xl"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/jameslucky007"
            className="text-gray-300 hover:text-blue-300 transition-colors duration-200 text-2xl"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            href="https://leetcode.com/u/lakki0072022/"
            className="text-gray-300 hover:text-blue-300 transition-colors duration-200 text-2xl"
            target="_blank"
          >
            <TbBrandLeetcode />
          </a>
          <a
            href="https://www.behance.net/jameslucky"
            className="text-gray-300 hover:text-blue-300 transition-colors duration-200 text-2xl"
            target="_blank"
          >
            <FaBehance />
          </a>
          <a
            href="https://linktr.ee/LakkiAli"
            className="text-gray-300 hover:text-blue-300 transition-colors duration-200 text-2xl"
            target="_blank"
          >
            <TbBrandLinktree />
          </a>
        </div>

        <div className="mt-4 flex flex-wrap justify-center lg:justify-start space-x-4">
          <a
            href="#"
            className="text-gray-300 hover:text-blue-300 transition-colors duration-200 text-2xl"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-blue-300 transition-colors duration-200 text-2xl"
          >
            <FaYoutube />
          </a>
          <a
            href="https://t.me/LuckyA008"
            className="text-gray-300 hover:text-blue-300 transition-colors duration-200 text-2xl"
          >
            <FaTelegramPlane />
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-blue-300 transition-colors duration-200 text-2xl"
          >
            <FaTwitter />
          </a>
          <a
            href="https://discord.gg/qV8uyT6T"
            className="text-gray-300 hover:text-blue-300 transition-colors duration-200 text-2xl"
          >
            <FaDiscord />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
