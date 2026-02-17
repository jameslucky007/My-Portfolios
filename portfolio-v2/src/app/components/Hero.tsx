"use client";

import {
  Github,
  Linkedin,
  Youtube,
  Instagram,
  Download,
  Asterisk
} from "lucide-react";

const Hero = () => {
  return (
    <section
      className="
      relative
      min-h-screen
      flex flex-col items-center justify-center
      text-center text-white
      bg-[linear-gradient(180deg,#5f727e_0%,#4b5968_40%,#2b3142_75%,#151927_100%)]
      overflow-hidden
    "
    >
      {/* Dark bottom glow */}
      <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

      {/* Segmented circle */}
      <div className="w-44 h-44 mb-8 rounded-full border-[5px] border-dashed border-white/60" />

      <p className="text-lg text-white/80 mb-3">
        Software Developer
      </p>

      <h1 className="text-6xl font-semibold tracking-wide mb-6">
        Lakki <span className="text-white/90">Ali</span>
      </h1>

      <p className="max-w-2xl text-white/60 text-base leading-relaxed mb-8">
        Lorem ipsum dolor sit amet consectetur. Tempus tempor penatibus
        malesuada varius egestas felis scelerisque purus
      </p>

      {/* Resume Button */}
      <button
        className="
        flex items-center gap-3
        border border-white/50
        px-8 py-3
        rounded-xl
        text-white
        hover:bg-white hover:text-black
        transition-all duration-300
        mb-8
      "
      >
        Resume <Download size={18} />
      </button>

      {/* Social Icons */}
      <div className="flex gap-5">
        {[Github, Linkedin, Youtube, Asterisk, Instagram].map(
          (Icon, i) => (
            <div
              key={i}
              className="
              w-12 h-12
              flex items-center justify-center
              rounded-full
              bg-white/10
              backdrop-blur-md
              hover:bg-white/20
              transition
            "
            >
              <Icon size={18} />
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Hero;
