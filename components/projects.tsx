"use client";

import { Badge } from "@/components/ui/badge";
import { useEffect, useRef, useState } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import { motion, useScroll, useTransform } from "framer-motion";
import FloatingShapes3D from "./floating-shapes-3d";


const projectsData = [
  {
    name: "My Portfolio",
    image: "/images/Portfolio.png",
    description:
      "My personal portfolio website — under active development — showcasing my career, projects, and skills.",
    skills: ["Next.js", "React", "Tailwind CSS"],
    mainLink: "https://github.com/Kimathii/Mathias",
  },
  {
    name: "SkillNest",
    image: "/images/SkillNest.png",
    description:
      "A comprehensive learning resource platform designed to help users find, share, and organize educational content across various skills and programming languages.",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    mainLink: "https://github.com/Mickyj70/SkillNest",
  },
  {
    name: "Test Prep Ville",
    image: "/images/TestPrepVille.png",
    description:
      "An online tutoring platform offering private, expert-led prep for GRE, GMAT, SAT, and more. Designed with a focus on user experience and seamless conversions.",
    skills: ["Web Development", "UI/UX Design", "Frontend"],
    mainLink: "https://testprepville.com",
    linkText: "Check it out",
  },
  {
    name: "Framez Social App",
    image: "/images/Framez.png",
    description:
      "A social mobile app built with React Native and TypeScript, featuring authentication, real-time feeds, image uploads, and Firebase backend integration.",
    skills: ["React Native", "Expo", "TypeScript", "Firebase", "Cloudinary"],
    mainLink: "https://github.com/Kimathii/Framez-Stage-4-",
  },
  {
    name: "HNG Ticket App",
    image: "/images/Ticket.png",
    description:
      "TicketFlow: A ticket management web app with full CRUD, responsive design, simulated authentication, and dashboard features — built with React and Vite.",
    skills: ["React", "JavaScript", "Vite", "UI Design"],
    mainLink: "https://github.com/Kimathii/HNG-Ticket-App",
  },
  {
    name: "Profile Card",
    image: "/images/ProfileCard.png",
    description:
      "A responsive profile card UI built as part of the HNG Stage 0 frontend challenge, including personal details and semantic markup.",
    skills: ["HTML", "CSS", "JavaScript"],
    mainLink: "https://github.com/Kimathii/HNG-Stage0-Profile_Card",
  },
  {
    name: "Receipt Gen",
    image: "/images/Receipt.png",
    description:
      "A React + Vite receipt generator application that lets users dynamically create receipts via a web interface, deployed to a public link.",
    skills: ["React", "Vite", "JavaScript"],
    mainLink: "https://github.com/Kimathii/My-Receipt-Gen",
  },
];

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [showDots, setShowDots] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);

  const totalSlides = projectsData.length + 1; // +1 for intro slide

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  // Scroll to specific slide (Desktop only mainly, but can work on mobile if we want)
  const scrollToSlide = (slideIndex: number) => {
    if (!containerRef.current) return;
    
    if (isDesktop) {
        const containerTop = containerRef.current.offsetTop;
        const containerHeight = containerRef.current.offsetHeight;
        const scrollProgress = slideIndex / (totalSlides - 1);
        const targetScroll = containerTop + containerHeight * scrollProgress;
        window.scrollTo({ top: targetScroll, behavior: "smooth" });
    } else {
        // Mobile: Scroll to specific element ID or just rough position? 
        // For now, disabling dot scroll on mobile as it's a vertical list.
        // Or we could implement scrollIntoView logic for mobile sections.
    }
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0vw", `-${(totalSlides - 1) * 100}vw`]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (isDesktop) {
          const slide = Math.round(latest * (totalSlides - 1));
          setActiveSlide(slide);
          setShowDots(latest > 0.02 && latest < 0.98);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, totalSlides, isDesktop]);

  return (
    <section id="projects" className="relative bg-white dark:bg-black transition-colors duration-300">
      <div ref={containerRef} className="relative min-h-screen lg:h-[600vh]">
        <div className="relative w-full overflow-hidden lg:sticky lg:top-0 lg:h-screen lg:w-screen">
          <FloatingShapes3D scrollProgress={scrollYProgress} />
          <motion.div 
            style={{ x: isDesktop ? x : 0 }} 
            className="flex flex-col lg:flex-row lg:h-full relative z-10"
          >
            {/* Intro Slide */}
            <div className="relative w-full min-h-screen lg:w-screen lg:h-screen shrink-0 flex items-center justify-center text-black dark:text-white py-20 lg:py-0">
              <div className="max-w-4xl mx-auto px-8 text-center z-10">
                <h2 className="text-5xl lg:text-7xl font-bold mb-6">Portfolio & Previous Projects</h2>
                <p className="text-lg lg:text-xl text-black dark:text-gray-300 mb-8 leading-relaxed font-medium lg:font-normal">
                  I have built a variety of projects tailored to different aspects of each client business. If you'd like to see more examples beyond what's showcased here, feel free to{" "}
                  <a href="#contact" className="text-purple-600 dark:text-purple-500 hover:text-purple-500 dark:hover:text-purple-400 underline">
                    get in touch
                  </a>{" "}
                  — I'd be happy to share.
                </p>
                {/* <button className="text-purple-500 font-semibold text-lg flex items-center gap-2 mx-auto hover:gap-4 transition-all">
                  See Projects <span>→</span>
                </button> */}
              </div>
            </div>

            {/* Project Slides */}
            {projectsData.map((project, index) => (
              <div key={index} className="relative w-full min-h-screen lg:w-screen lg:h-screen shrink-0 flex items-center text-black dark:text-white px-8 lg:px-16 py-20 lg:py-0 border-t lg:border-none border-black/5 dark:border-white/10">
                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="flex flex-col gap-6 z-10">
                    <span className="text-sm text-black/50 dark:text-gray-400 uppercase tracking-widest">Web Application</span>
                    <h3 className="text-4xl lg:text-6xl font-bold">{project.name}</h3>
                    <p className="text-base lg:text-lg text-black dark:text-gray-300 leading-relaxed font-medium lg:font-normal">{project.description}</p>

                    <div className="flex flex-col gap-3">
                      <span className="font-semibold text-black dark:text-white">Built with:</span>
                      <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill, idx) => (
                          <Badge key={idx} className="text-purple-400 bg-purple-500/10 border-purple-500/20">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 mt-4">
                      {project.mainLink && (
                        <a
                          href={project.mainLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all"
                        >
                          {/* @ts-ignore */}
                          {project.linkText || "View the code"} <LuArrowUpRight className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Image Section */}
                  <div className="flex items-center justify-center lg:justify-end">
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      viewport={{ once: true, amount: 0.2 }}
                      className="relative w-full max-w-md sm:max-w-lg lg:max-w-2xl"
                    >
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-auto object-contain rounded-lg shadow-2xl"
                      />
                    </motion.div>
                  </div>

                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Slide Navigation Dots (Desktop Only) */}
      {showDots && isDesktop && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-50">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                activeSlide === index ? "bg-purple-500 w-8" : "bg-gray-600 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
