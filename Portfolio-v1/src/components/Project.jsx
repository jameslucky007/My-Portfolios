import React from 'react';

const projects = [
  {
    image: '/spotify-app.png', // replace with your image path
    title: 'Build a Spotify Connected App',
    description:
      'Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.',
    tags: ['Node', 'Express', 'React', 'Spotify API'],
    link: '#',
  },
  {
    image: '/spotify-profile.png',
    title: 'Spotify Profile',
    description:
      'Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.',
    tags: ['React', 'Express', 'Spotify API', 'Heroku'],
    stat: '★ 696',
    link: '#',
  },
  {
    image: '/halcyon-theme.png',
    title: 'Halcyon Theme',
    description:
      'Minimal dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.',
    tags: [],
    stat: '↓ 100k+ Installs',
    link: '#',
  },
];

const Project = () => {
  return (
    <section className="min-h-screen py-12 px-4" id='projects'>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#d0d7de] mb-8 tracking-tight">
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
                className="w-[120px] h-[80px] object-cover rounded-md mb-4 md:mb-0 md:mr-8 border-2 border-[#232e41]"
              />
              <div className="flex-1">
                <div className="text-xl font-semibold text-[#78fff0] mb-1">
                  {proj.title}
                </div>
                <div className="text-[#d0d7de] mb-3">{proj.description}</div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {proj.tags.map(tag => (
                    <span
                      key={tag}
                      className="bg-[#151a23] text-[#78fff0] px-2 py-1 rounded text-xs font-mono"
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
    </section>
  );
};

export default Project;
