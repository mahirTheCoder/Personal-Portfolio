import React from "react";

// Your Project Data
const projects = [
  {
    title: "HTML/CSS Project: Responsive Landing Page",
    stack: "HTML, CSS",
    link: "#", // Add project link here
  },
  {
    title: "React JS Project: To-Do Application",
    stack: "React.js, Hooks",
    link: "#",
  },
  {
    title: "React JS Project: E-commerce UI Demo",
    stack: "React.js, Styled Components",
    link: "#",
  },
  {
    title: "Next.js Project: Personal Blog Site",
    stack: "Next.js, SSR",
    link: "#",
  },
  {
    title: "Admin Dashboard / Node.js Project",
    stack: "Node.js, Dashboard UI",
    link: "#",
  },
];

const Portfolio = () => {
  return (
    // Section background is bg-gray-950
    <section
      id="Portfolio"
      className=" mt-30 text-white mb-30 font-sans"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-12 text-amber-500 ">
          My Projects
        </h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            // Each Project Card (Div) background is also bg-gray-950
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block" // Makes the entire card clickable
            >
              <div
                className="p-6 rounded-xl shadow-2xl transition-all duration-300 transform 
                           bg-gray-950 border border-gray-800 
                           hover:border-amber-500 hover:shadow-amber-500/20"
              >
                {/* Project Title */}
                <h3 className="text-xl font-semibold mb-3 text-gray-100">
                  {project.title}
                </h3>

                {/* Technology Stack */}
                <p className="text-sm font-medium text-gray-400 mb-4">
                  Technology:{" "}
                  <span className="text-amber-500">{project.stack}</span>
                </p>

                {/* Simple Description */}
                <p className="text-sm text-gray-500">
                  This project focuses on clean architecture and solid user
                  experience.
                </p>

                {/* 'View Project' Tag */}
                <div className="mt-4 text-sm text-amber-500 font-medium">
                  View Project →
                </div>
              </div>
            </a>
          ))}
        </div>

     
      </div>
    </section>
  );
};

export default Portfolio;
