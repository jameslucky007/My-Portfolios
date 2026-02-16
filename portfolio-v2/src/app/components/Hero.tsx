import React from 'react'
import { Github, Linkedin, Youtube, Instagram, Download } from "lucide-react";

const Hero = () => {
  return (
    <>
     <section className="min-h-screen flex flex-col items-center justify-center text-center text-white
     bg-gradient-to-b from-[#4a5b66] via-[#414a5a] to-[#1e2230]">

      {/* circle placeholder */}
      <div className="w-40 h-40 border-4 border-dashed border-white/50 rounded-full mb-6"></div>

      <p className="text-lg text-gray-300 mb-2">Software Developer</p>

      <h1 className="text-5xl font-semibold mb-4">Lakki Ali</h1>

      <p className="max-w-xl text-gray-400 mb-6">
        Lorem ipsum dolor sit amet consectetur. Tempus tempor penatibus malesuada
        varius egestas felis scelerisque purus
      </p>

      {/* Resume Button */}
      <button className="flex items-center gap-2 border border-white px-6 py-2 rounded-lg mb-6 hover:bg-white hover:text-black transition">
        Resume <Download size={18} />
      </button>

      {/* Social Icons */}
      <div className="flex gap-4">
        <div className="bg-white/10 p-3 rounded-full"><Github size={18} /></div>
        <div className="bg-white/10 p-3 rounded-full"><Linkedin size={18} /></div>
        <div className="bg-white/10 p-3 rounded-full"><Youtube size={18} /></div>
        <div className="bg-white/10 p-3 rounded-full"><Instagram size={18} /></div>
      </div>

    </section>
    </>
  )
}

export default Hero