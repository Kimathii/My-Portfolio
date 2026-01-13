"use client";

import { Badge } from "@/components/ui/badge";
import { useEffect, useRef, useState } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import { motion, useScroll, useTransform } from "framer-motion";


const projectsData = [
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
  {
    name: "My Portfolio",
    image: "/images/Portfolio.png",
    description:
      "My personal portfolio website — under active development — showcasing my career, projects, and skills.",
    skills: ["Next.js", "React", "Tailwind CSS"],
    mainLink: "https://github.com/Kimathii/Mathias",
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

  const floatingShapes = [
    [
      { type: "circle", color: "bg-blue-500", size: "w-16 h-16 lg:w-32 lg:h-32", top: "20%", right: "15%", delay: 0 },
      { type: "square", color: "bg-purple-500", size: "w-12 h-12 lg:w-24 lg:h-24", bottom: "30%", left: "10%", delay: 0.2 },
    ],
    [
      { type: "triangle", color: "bg-pink-500", size: "w-20 h-20 lg:w-40 lg:h-40", top: "15%", right: "20%", delay: 0 },
      { type: "circle", color: "bg-cyan-500", size: "w-14 h-14 lg:w-28 lg:h-28", bottom: "25%", left: "15%", delay: 0.3 },
    ],
    [
      { type: "square", color: "bg-yellow-500", size: "w-18 h-18 lg:w-36 lg:h-36", top: "25%", left: "10%", delay: 0.1 },
      { type: "circle", color: "bg-green-500", size: "w-16 h-16 lg:w-32 lg:h-32", bottom: "20%", right: "12%", delay: 0.2 },
    ],
    [
      { type: "triangle", color: "bg-purple-500", size: "w-22 h-22 lg:w-44 lg:h-44", top: "18%", right: "18%", delay: 0 },
      { type: "square", color: "bg-orange-500", size: "w-14 h-14 lg:w-28 lg:h-28", bottom: "28%", left: "8%", delay: 0.25 },
    ],
    [
      { type: "circle", color: "bg-indigo-500", size: "w-18 h-18 lg:w-36 lg:h-36", top: "22%", left: "12%", delay: 0.15 },
      { type: "triangle", color: "bg-rose-500", size: "w-16 h-16 lg:w-32 lg:h-32", bottom: "24%", right: "15%", delay: 0.1 },
    ],
    [
      { type: "square", color: "bg-teal-500", size: "w-20 h-20 lg:w-40 lg:h-40", top: "20%", right: "10%", delay: 0.2 },
      { type: "circle", color: "bg-amber-500", size: "w-15 h-15 lg:w-30 lg:h-30", bottom: "26%", left: "14%", delay: 0 },
    ],
  ];

  return (
    <section id="projects" className="relative bg-black">
      {/* 
          Desktop: Height 600vh for scroll effect
          Mobile: Auto height for natural vertical flow 
      */}
      <div ref={containerRef} className="relative min-h-screen lg:h-[600vh]">
        {/*
           Desktop: Sticky container
           Mobile: Normal relative flow, allow vertical stack
        */}
        <div className="relative w-full overflow-hidden lg:sticky lg:top-0 lg:h-screen lg:w-screen">
          
          <motion.div 
            style={{ x: isDesktop ? x : 0 }} 
            className="flex flex-col lg:flex-row lg:h-full"
          >
            {/* Intro Slide */}
            <div className="relative w-full min-h-screen lg:w-screen lg:h-screen shrink-0 flex items-center justify-center text-white py-20 lg:py-0">
               {/* Background Shapes */}
              {floatingShapes[0].map((shape, idx) => (
                <motion.div
                  key={idx}
                  className={`absolute ${shape.size} ${shape.color} opacity-70 blur-sm`}
                  style={{
                    top: shape.top,
                    bottom: shape.bottom,
                    left: shape.left,
                    right: shape.right,
                    borderRadius: shape.type === "circle" ? "50%" : "8px",
                    transform: shape.type === "triangle" ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                  animate={{
                    y: [0, -20, 0],
                    rotate: shape.type === "square" ? [0, 15, 0] : [0, 0, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: shape.delay, ease: "easeInOut" }}
                />
              ))}

              <div className="max-w-4xl mx-auto px-8 text-center z-10">
                <h2 className="text-5xl lg:text-7xl font-bold mb-6">Portfolio & Previous Projects</h2>
                <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed">
                  I have built a variety of projects tailored to different aspects of each client business. If you'd like to see more examples beyond what's showcased here, feel free to{" "}
                  <a href="#contact" className="text-purple-500 hover:text-purple-400 underline">
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
              <div key={index} className="relative w-full min-h-screen lg:w-screen lg:h-screen shrink-0 flex items-center text-white px-8 lg:px-16 py-20 lg:py-0 border-t lg:border-none border-white/10">
                {floatingShapes[index + 1]?.map((shape, idx) => (
                  <motion.div
                    key={idx}
                    // Removed 'hidden lg:block' to show on mobile now, but resized via the checks above
                    className={`absolute ${shape.size} ${shape.color} opacity-60 blur-sm block`}
                    style={{
                      top: shape.top,
                      bottom: shape.bottom,
                      left: shape.left,
                      right: shape.right,
                      borderRadius: shape.type === "circle" ? "50%" : "8px",
                      transform: shape.type === "triangle" ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                    animate={{
                      y: [0, -25, 0],
                      x: [0, 15, 0],
                      rotate: shape.type === "square" ? [0, 20, 0] : [0, 0, 0],
                    }}
                    transition={{ duration: 5, repeat: Infinity, delay: shape.delay, ease: "easeInOut" }}
                  />
                ))}

                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="flex flex-col gap-6 z-10">
                    <span className="text-sm text-gray-400 uppercase tracking-widest">Web Application</span>
                    <h3 className="text-4xl lg:text-6xl font-bold">{project.name}</h3>
                    <p className="text-base lg:text-lg text-gray-300 leading-relaxed">{project.description}</p>

                    <div className="flex flex-col gap-3">
                      <span className="font-semibold text-white">Built with:</span>
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
                          View the code <LuArrowUpRight className="w-4 h-4" />
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
