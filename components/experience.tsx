"use client";

import { LuArrowUpRight } from "react-icons/lu";
import Image from "next/image";

// EXPERIENCE CONTENT
const experienceContent = {
  tagline: "It is okay to not know, it is not okay to not try.",
  title: "Skills & Experience",
  description: [
    "I specialize in crafting engaging and high-quality client-side web applications.",
    "My experience includes HTML, CSS, and JavaScript, building projects with React and Next.js, developing custom features and components, creating animations, and coding interactive layouts. I also have experience with TypeScript, Firebase, and modern frontend tooling.",
    "linkedin", // marker for LinkedIn paragraph
  ],
  linkedInUrl: "https://www.linkedin.com/in/echioda-mathias-431370253/",
  resumeUrl: "/resume.pdf",
  techStack: [
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
  ],
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative w-full min-h-screen bg-black text-white flex items-center justify-center overflow-hidden py-20"
    >
      <div className="max-w-6xl mx-auto px-8 lg:px-16 w-full">
        <div className="flex flex-col items-center gap-8 lg:gap-12 text-center">
          {/* Tagline */}
          <p className="text-sm lg:text-base text-gray-400 uppercase tracking-widest">
            {experienceContent.tagline}
          </p>

          {/* Title */}
          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold">
            {experienceContent.title}
          </h2>

          {/* Description */}
          <div className="flex flex-col gap-6 max-w-4xl text-base lg:text-lg text-gray-300 leading-relaxed">
            {experienceContent.description.map((item, index) =>
              item === "linkedin" ? (
                <p key={index}>
                  For a deeper look at my work and experience, visit my{" "}
                  <a
                    href={experienceContent.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-500 hover:text-purple-400 underline"
                  >
                    LinkedIn
                  </a>
                  .
                </p>
              ) : (
                <p key={index}>{item}</p>
              )
            )}
          </div>

          {/* Tech Stack */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 lg:gap-12 mt-8 lg:mt-12">
            {experienceContent.techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center gap-3 group cursor-pointer"
              >
                <div className="w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center bg-gray-900 rounded-lg p-3 transition-all group-hover:bg-gray-800 group-hover:scale-110">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={80}
                    height={80}
                    className="object-contain filter brightness-90 group-hover:brightness-110"
                  />
                </div>
                <span className="text-xs lg:text-sm text-gray-400 group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          {/* Resume Link */}
          <a
            href={experienceContent.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group text-white font-bold text-base lg:text-lg hover:text-purple-500 mt-8 transition-colors flex items-center gap-1"
          >
            <span>View Full Resume</span>
            <LuArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
