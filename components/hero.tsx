"use client";

import Image from "next/image";
import ProfilePic from "@/public/images/profile.jpg";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen w-full bg-black text-white overflow-hidden">
      {/* Decorative blurred code bars - Top Left */}
      <div className="absolute top-6 left-6 space-y-4 opacity-70">
        <motion.div
          className="h-1.5 w-40 bg-purple-500 blur-md"
          animate={{ scaleX: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="h-1.5 w-32 bg-blue-500 blur-md"
          animate={{ scaleX: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        />
        <motion.div
          className="h-1.5 w-36 bg-cyan-500 blur-md"
          animate={{ scaleX: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        />
      </div>

      {/* Decorative blurred code bars - Bottom Right */}
      <div className="absolute bottom-10 right-10 space-y-4 opacity-70">
        <motion.div
          className="h-1.5 w-48 bg-purple-500 blur-md"
          animate={{ scaleX: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        />
        <motion.div
          className="h-1.5 w-40 bg-cyan-500 blur-md"
          animate={{ scaleX: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        />
        <motion.div
          className="h-1.5 w-44 bg-yellow-500 blur-md"
          animate={{ scaleX: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* Large profile image as background element */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative w-[70%] h-[80%] sm:w-[60%] sm:h-[75%] md:w-[55%] md:h-[80%]">
          <Image
            src={ProfilePic}
            alt="Profile"
            fill
            className="object-cover grayscale"
            priority
          />
        </div>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-20 sm:py-24">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-12 text-center lg:text-left"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Left side - Hero text */}
          <motion.div className="space-y-6" variants={staggerContainer}>
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-8xl font-bold leading-tight"
              variants={fadeUp}
            >
              Hi, I&apos;m Mathias
              <br />
              <motion.span
                className="text-3xl sm:text-4xl lg:text-7xl font-normal text-gray-300"
                variants={fadeUp}
              >
                I&apos;m a Web Developer
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-lg lg:text-xl text-gray-400 max-w-lg"
              variants={fadeUp}
            >
              JavaScript Enthusiast, Creative Problem Solver
            </motion.p>
          </motion.div>

          {/* Right side - Description */}
          <motion.div
            className="space-y-6 lg:ml-auto lg:max-w-lg"
            variants={staggerContainer}
          >
            <motion.p
              className="text-base text-gray-300 leading-relaxed"
              variants={fadeIn}
            >
              Passionate about solving problems, collaborating with great people, and continuously learning.
            </motion.p>
            <motion.p
              className="text-base text-gray-300 leading-relaxed"
              variants={fadeIn}
            >
              Professionally connected to the web development world.
            </motion.p>
            <motion.p
              className="text-base text-gray-300 leading-relaxed"
              variants={fadeIn}
            >
              Outside of work, I enjoy football, exploring the outdoors, gaming, and experimenting with new tech.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
