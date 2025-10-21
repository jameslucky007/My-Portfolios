import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    image: "/mindscript.png",
    title: "MindScript",
    description:
      "A full-stack AI-powered text generation platform  Features real-time AI responses, user management, and conversation history storage.",
    tags: [
      "Node",
      "Express",
      "Next JS",
      "GPT-OSS 20b",
      "Tailwind",
      "Mongo DB",
      "firebase",
    ],
    link: "https://mindscriptai.vercel.app/",
  },
  {
    image: "/email-spam.png",
    title: "Email-Spam-Classification",
    description:
      "A web app that lets users paste any email text to instantly detect whether it’s spam or not spam using a trained ML model. it provide real-time classification.",
    tags: ["Next JS", "Tailwind", "Node", "Python", "Flask"],
    link: "https://email-spam-frontend.vercel.app/",
  },
];

const Project = () => {
  return (
    <section className=" py-12 px-4" id="projects">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-blue-300 mb-10">
          Projects
        </h2>
        <div className="space-y-10">
          {projects.map((proj, idx) => (
            <a
              key={idx}
              href={proj.link}
              className="flex flex-col md:flex-row items-start rounded-lg shadow-xl bg-[#222b3a] hover:bg-[#263141] transition-all duration-300 p-6"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-[230px] h-[120px] object-cover rounded-md mb-4 md:mb-0 md:mr-8 border-2 border-[#232e41] "
                style={{ objectPosition: "center", aspectRatio: "16/9" }}
                onError={(e) => (e.target.style.display = "none")}
              />
              <div className="flex-1">
                <div className="text-xl font-semibold text-blue-300 mb-1">
                  {proj.title}
                </div>
                <div className="text-[#d0d7de] mb-3">{proj.description}</div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#151a23] text-blue-300 px-2 py-1 rounded text-xs font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {proj.stat && (
                  <div className="text-[#94a3b8] text-sm">{proj.stat}</div>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Footer Section */}

      <div className="mt-10">
        <a
          href="mailto:luckya.developer@gmail.com"
          className="group flex items-center justify-between bg-[#222b3a] hover:bg-[#263141] transition-all duration-300 p-8 rounded-lg cursor-pointer"
        >
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-slate-100">
              Connect Me
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-1">
              luckya.developer@gmail.com
            </p>
          </div>

          <FiArrowUpRight className="text-blue-400 text-2xl transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </div>
    </section>
  );
};

export default Project;
