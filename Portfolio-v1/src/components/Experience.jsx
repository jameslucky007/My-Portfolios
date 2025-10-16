'use client';
import React from 'react';

const ExperienceSection = () => {
  const experiences = [
    {
      period: "2024 — PRESENT",
      title: "Freelancer",
      hasArrow: true,
      description: "Build and maintain critical components used to construct Klaviyo's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
      technologies: ["JavaScript", "TypeScript", "React", "Storybook"]
    },
    {
      period: "2024 — PRESENT",
      title: "Frontend Engineer, Accessibility",
      company: "Kwiqsoft",
      hasArrow: true,
      subtitle: "Senior Engineer",
      subtitle2: "Engineer", 
      description: "Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.",
      technologies: ["JavaScript", "TypeScript", "HTML & SCSS", "React", "Next.js", "React Native", "WordPress", "Contentful", "Node.js", "PHP"]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 " id='experience'>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div 
            key={index}
            className="group hover:bg-slate-800/50 hover:shadow-lg transition-all duration-300 rounded-lg p-6 -mx-6"
          >
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Time Period */}
              <div className="lg:w-1/4 flex-shrink-0">
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                  {exp.period}
                </p>
              </div>

              {/* Content */}
              <div className="lg:w-3/4">
                {/* Job Title and Company */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-slate-200 group-hover:text-blue-400 transition-colors duration-200 flex items-center gap-2">
                    {exp.title} • {exp.company}
                    {exp.hasArrow && (
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </h3>
                  
                  {/* Subtitles for career progression */}
                  {exp.subtitle && (
                    <div className="mt-2 space-y-1">
                      <p className="text-slate-400 text-base">{exp.subtitle}</p>
                      {exp.subtitle2 && (
                        <p className="text-slate-400 text-base">{exp.subtitle2}</p>
                      )}
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed mb-6 text-sm lg:text-base">
                  {exp.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-teal-400/10 text-blue-300 rounded-full border border-teal-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


const Experience = () => {
  return (
    <div className="min-h-screen  text-slate-300">
      {/* Background noise texture */}
      <div 
        className="fixed inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}
      />
      
      <ExperienceSection />
   
    </div>

    
  );
};

export default Experience;