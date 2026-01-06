"use client";

import Image from "next/image";

// Hero content - edit this directly
const heroContent = {
  image: "/images/profile.jpg", // Put your image in public/images/
  introduction: "Hi, I'm Mathias",
  position: "A Frontend Developer",
  summary: "I like to build autonomous systems and create amazing web experiences.",
  subtitle: "JavaScript Enthusiast, Creative Problem Solver",
  description: [
    "Professionally connected to the web development world. I am passionate about solving problems, collaborating with great people, and continuously learning.",
    "Outside of work, you will find me playing football, exploring the outdoors, or diving into a good video game and, of course, experimenting with new tech.",
  ],
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen w-full bg-black text-white overflow-hidden"
    >
      {/* Decorative blurred code bars - Top Left */}
      <div className="absolute top-6 left-6 space-y-4 opacity-70">
        <div className="h-1.5 w-40 bg-purple-500 blur-md"></div>
        <div className="h-1.5 w-32 bg-blue-500 blur-md"></div>
        <div className="h-1.5 w-36 bg-cyan-500 blur-md"></div>
      </div>

      {/* Decorative blurred code bars - Bottom Right */}
      <div className="absolute bottom-10 right-10 space-y-4 opacity-70">
        <div className="h-1.5 w-48 bg-purple-500 blur-md"></div>
        <div className="h-1.5 w-40 bg-cyan-500 blur-md"></div>
        <div className="h-1.5 w-44 bg-yellow-500 blur-md"></div>
      </div>

      {/* Large profile image as background element */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <div
          className="relative w-[70%] h-[80%]
                     sm:w-[60%] sm:h-[75%]
                     md:w-[55%] md:h-[80%]
                     lg:w-[45%] lg:h-[85%]"
        >
          <Image
            src={heroContent.image}
            alt="Profile"
            fill
            className="object-cover grayscale"
            priority
          />
        </div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-20 sm:py-24">
        {/* Grid layout - Hero text on left, description on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-12 text-center lg:text-left">
          {/* Left side - Main hero text */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-8xl font-bold leading-tight">
              {heroContent.introduction}
              <br />
              <span className="text-3xl sm:text-4xl lg:text-7xl font-normal text-gray-300">
                {heroContent.position}
              </span>
            </h1>

            {/* Subtitle under main heading */}
            <p className="text-lg lg:text-xl text-gray-400 max-w-lg">
              {heroContent.subtitle}
            </p>
          </div>

          {/* Right side - Description text */}
          <div className="space-y-6 lg:ml-auto lg:max-w-lg">
            <p className="text-base text-gray-300 leading-relaxed">
              {heroContent.summary}
            </p>

            {heroContent.description.map((paragraph, index) => (
              <p key={index} className="text-base text-gray-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;