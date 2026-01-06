"use client";

import Image from "next/image";
import ProfilePic from "@/public/images/profile.jpg"; 

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen w-full bg-black text-white overflow-hidden">
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
        <div className="relative w-[70%] h-[80%] sm:w-[60%] sm:h-[75%] md:w-[55%] md:h-[80%]">
          <Image
            src={ProfilePic}
            alt="Profile"
            fill
            className="object-cover grayscale"
            priority
          />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-20 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-12 text-center lg:text-left">
            
          {/* Left side - Hero text */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-8xl font-bold leading-tight">
              Hi, I'm Mathias
              <br />
              <span className="text-3xl sm:text-4xl lg:text-7xl font-normal text-gray-300">
                Web Developer
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-400 max-w-lg">
              JavaScript Enthusiast, Creative Problem Solver
            </p>
          </div>

          {/* Right side - Description */}
          <div className="space-y-6 lg:ml-auto lg:max-w-lg">
            <p className="text-base text-gray-300 leading-relaxed">
              Passionate about solving problems, collaborating with great people, and continuously learning.
            </p>
            <p className="text-base text-gray-300 leading-relaxed">
              Professionally connected to the web development world.
            </p>
            <p className="text-base text-gray-300 leading-relaxed">
              Outside of work, I enjoy football, exploring the outdoors, gaming, and experimenting with new tech.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
