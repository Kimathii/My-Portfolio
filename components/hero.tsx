"use client";

import Image from "next/image";
import ProfilePic from "@/public/images/profile.jpg";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations";
import { LuArrowDown, LuMail } from "react-icons/lu";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen w-full bg-white dark:bg-black text-black dark:text-white overflow-hidden transition-colors duration-300">
      {/* Decorative blurred code bars - Top Left */}
      <div className="absolute top-6 left-6 space-y-4 opacity-40 dark:opacity-30">
        <motion.div
          className="h-1.5 w-40 bg-purple-500/40 dark:bg-purple-500/50 blur-md"
          animate={{ scaleX: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="h-1.5 w-32 bg-blue-500/40 dark:bg-blue-500/50 blur-md"
          animate={{ scaleX: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        />
        <motion.div
          className="h-1.5 w-36 bg-cyan-500/40 dark:bg-cyan-500/50 blur-md"
          animate={{ scaleX: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        />
      </div>

      {/* Decorative blurred code bars - Bottom Right */}
      <div className="absolute bottom-10 right-10 space-y-4 opacity-40 dark:opacity-30">
        <motion.div
          className="h-1.5 w-48 bg-purple-500/40 dark:bg-purple-500/50 blur-md"
          animate={{ scaleX: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        />
        <motion.div
          className="h-1.5 w-40 bg-cyan-500/40 dark:bg-cyan-500/50 blur-md"
          animate={{ scaleX: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        />
        <motion.div
          className="h-1.5 w-44 bg-yellow-500/40 dark:bg-yellow-500/50 blur-md"
          animate={{ scaleX: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* Large profile image as background element */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center opacity-25 dark:opacity-20 pointer-events-none"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative w-[70%] h-[80%] sm:w-[60%] sm:h-[75%] md:w-[55%] md:h-[80%] outline outline-black/10 dark:outline-white/10">
          <Image
            src={ProfilePic}
            alt="Profile"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
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
          <motion.div className="space-y-6 flex flex-col items-center lg:items-start" variants={staggerContainer}>
            {/* Status Indicator */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-xs font-semibold backdrop-blur-xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Available for Opportunities
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-8xl font-bold leading-tight"
              variants={fadeUp}
            >
              Hi, I&apos;m Mathias
              <br />
              <motion.span
                className="text-2xl sm:text-3xl lg:text-5xl mt-2 block font-normal text-black dark:text-gray-300"
                variants={fadeUp}
              >
                I&apos;m a Software Developer
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-lg lg:text-xl text-black/80 dark:text-gray-400 max-w-lg"
              variants={fadeUp}
            >
              JavaScript Enthusiast, Creative Problem Solver
            </motion.p>

            {/* Quick Action CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-3.5 pt-2 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm lg:text-base shadow-lg shadow-purple-500/25 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Projects</span>
                <LuArrowDown className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 rounded-xl border border-gray-300 dark:border-white/15 hover:border-purple-500/50 hover:bg-gray-100 dark:hover:bg-white/5 text-black dark:text-white font-medium text-sm lg:text-base transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Get in Touch</span>
                <LuMail className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - Description */}
          <motion.div
            className="space-y-6 lg:ml-auto lg:max-w-lg"
            variants={staggerContainer}
          >
            <motion.p
              className="text-base text-black dark:text-gray-300 leading-relaxed font-medium lg:font-normal"
              variants={fadeIn}
            >
              Passionate about solving problems, collaborating with great people, and continuously learning.
            </motion.p>
            <motion.p
              className="text-base text-black dark:text-gray-300 leading-relaxed font-medium lg:font-normal"
              variants={fadeIn}
            >
              Professionally connected to the web development world.
            </motion.p>
            <motion.p
              className="text-base text-black dark:text-gray-300 leading-relaxed font-medium lg:font-normal"
              variants={fadeIn}
            >
              Outside of work, I enjoy football, exploring the outdoors, chess, and experimenting with new tech.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};


export default Hero;
