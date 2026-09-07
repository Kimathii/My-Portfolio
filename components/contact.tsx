"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { LuCopy, LuCheck, LuArrowUp } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, popIn, staggerContainer, staggerContainerSlow } from "@/lib/animations";

// CONTACT CONTENT
const contactContent = {
  heading: "Ready to bring your ideas to life? Let's connect.",
  subtext:
    "Whether you are starting a new project, collaborating, or simply saying hello, I would love to hear from you.",
  email: "mechioda@gmail.com",
  socials: [
    {
      name: "LinkedIn",
      icon: FiLinkedin,
      url: "https://www.linkedin.com/in/echioda-mathias-jr/",
    },
    {
      name: "GitHub",
      icon: FiGithub,
      url: "https://github.com/Kimathii",
    },
    {
      name: "X",
      icon: FaXTwitter,
      url: "https://x.com/_Mathias_Jr_",
    },
  ],
  floatingImage: "/images/about.png",
};

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactContent.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col justify-between overflow-hidden pt-24 pb-8 transition-colors duration-300 scroll-mt-16"
    >
      {/* Floating Illustration */}
      <div className="absolute left-[-5%] top-1/2 -translate-y-1/2 w-125 h-125 lg:w-175 lg:h-175 opacity-10 dark:opacity-20 pointer-events-none">
        <motion.img
          src={contactContent.floatingImage}
          alt="Contact illustration"
          className="w-full h-full object-contain"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating Shape */}
      <motion.div
        className="absolute bottom-[20%] right-[10%] w-32 h-32 lg:w-40 lg:h-40 bg-linear-to-br from-gray-200 to-gray-400 dark:from-gray-700 dark:to-gray-900 opacity-40 dark:opacity-60 pointer-events-none"
        style={{
          clipPath:
            "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
        }}
        animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Spacer for image */}
          <div className="hidden lg:block" />

          {/* Contact Info */}
          <motion.div
            className="flex flex-col gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight"
              variants={fadeUp}
            >
              {contactContent.heading}
            </motion.h2>

            <motion.p
              className="text-base lg:text-lg text-black dark:text-gray-300 leading-relaxed font-medium lg:font-normal"
              variants={fadeUp}
            >
              {contactContent.subtext}
            </motion.p>

            {/* Email with Copy Action */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <motion.a
                href={`mailto:${contactContent.email}`}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {contactContent.email}
              </motion.a>

              <button
                onClick={handleCopyEmail}
                className="cursor-pointer relative p-2.5 rounded-xl border border-gray-300 dark:border-white/20 bg-gray-100/80 dark:bg-zinc-800/80 hover:bg-gray-200 dark:hover:bg-zinc-700 text-black dark:text-white transition-all shadow-xs"
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0.7, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.7, opacity: 0 }}
                      className="flex items-center gap-1.5 text-xs font-semibold text-green-600 dark:text-green-400"
                    >
                      <LuCheck className="w-4 h-4" />
                      <span>Copied!</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="copy"
                      initial={{ scale: 0.7, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.7, opacity: 0 }}
                    >
                      <LuCopy className="w-4 h-4" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>

            {/* Socials */}
            <motion.div
              className="flex flex-wrap gap-4 mt-2"
              variants={staggerContainerSlow}
            >
              {contactContent.socials.map((social) => (
                <motion.div
                  key={social.name}
                  variants={popIn}
                  whileHover={{ y: -3, transition: { type: "spring", stiffness: 400 } }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-transparent border-gray-300 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10 hover:border-purple-500/40 text-black dark:text-white"
                    asChild
                  >
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <social.icon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      <span className="inline">{social.name}</span>
                    </a>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer Strip */}
      <footer className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 w-full pt-16 border-t border-black/5 dark:border-white/10 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-black/60 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Mathias Echioda. All rights reserved.</p>
        <p className="text-center">Built with Next.js, Tailwind CSS & Framer Motion</p>
        <button
          onClick={scrollToTop}
          className="cursor-pointer flex items-center gap-1.5 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium"
        >
          <span>Back to Top</span>
          <LuArrowUp className="w-3.5 h-3.5" />
        </button>
      </footer>
    </section>
  );
};

export default Contact;

