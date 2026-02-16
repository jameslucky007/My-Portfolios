"use client";

import Link from "next/link";
import { Moon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full bg-black text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4 relative">

        {/* Logo */}
        <h1 className="text-lg font-semibold tracking-wide">
          LUCKY A<span className="text-indigo-400">.</span>
        </h1>

        {/* Center Nav (absolute center) */}
        <nav className="absolute left-1/2 -translate-x-1/2 
          bg-white/10 backdrop-blur-md px-8 py-2 
          rounded-full flex gap-8 text-sm">
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Projects</Link>
          <Link href="#">Content</Link>
          <Link href="#">Contact</Link>
        </nav>

        {/* Dark toggle */}
        <button className="bg-white/10 p-2 rounded-full">
          <Moon size={18} />
        </button>

      </div>
    </header>
  );
};

export default Navbar;
