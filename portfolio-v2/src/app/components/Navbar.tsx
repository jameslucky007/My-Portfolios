"use client";
import { useState } from "react";
import Link from "next/link";
import { Moon, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
<nav className="w-full py-3 px-6 flex items-center justify-between
bg-gradient-to-tl from-[#51727C] via-[#55687F] to-[#23273D]">
      
      {/* Logo */}
      <div className="text-white text-xl font-semibold tracking-wide">
        LUCKY A<span className="text-[#9aa7ff]">.</span>
      </div>

      {/* Center Nav */}
      <div className="hidden md:flex items-center bg-[#2f3b44] rounded-full px-2 py-1 shadow-inner">
        <Link
          href="/"
          className="px-5 py-2 rounded-full bg-[#1f2a33] text-white text-sm font-medium"
        >
          Home
        </Link>

        <Link
          href="/about"
          className="px-5 py-2 text-gray-300 hover:text-white text-sm"
        >
          About
        </Link>

        <Link
          href="/projects"
          className="px-5 py-2 text-gray-300 hover:text-white text-sm"
        >
          Projects
        </Link>

        <Link
          href="/content"
          className="px-5 py-2 text-gray-300 hover:text-white text-sm"
        >
          Content
        </Link>

        <Link
          href="/contact"
          className="px-5 py-2 text-gray-300 hover:text-white text-sm"
        >
          Contact
        </Link>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-3">
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2f3b44] text-white">
          <Moon size={18} />
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
