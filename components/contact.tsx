"use client";

import { Button } from "@/components/ui/button";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

// CONTACT CONTENT
const contactContent = {
  heading: "What if a software expert was just one click away?",
  subtext:
    "Whether you are starting a new project, collaborating, or simply saying hello, I would love to hear from you.",
  email: "mechioda@gmail.com",
  socials: [
    {
      name: "LinkedIn",
      icon: FiLinkedin,
      url: "https://www.linkedin.com/in/echioda-mathias-431370253/",
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
  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-black text-white flex items-center overflow-hidden py-20"
    >
      {/* Floating Illustration */}
      <div className="absolute left-[-5%] top-1/2 -translate-y-1/2 w-125 h-125 lg:w-175 lg:h-175 opacity-30">
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
        className="absolute bottom-[15%] right-[10%] w-32 h-32 lg:w-40 lg:h-40 bg-linear-to-br from-gray-400 to-gray-600 opacity-80"
        style={{
          clipPath:
            "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
        }}
        animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Spacer for image */}
          <div className="hidden lg:block" />

          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              {contactContent.heading}
            </h2>

            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              {contactContent.subtext}
            </p>

            {/* Email */}
            <a
              href={`mailto:${contactContent.email}`}
              className="text-2xl lg:text-4xl font-bold hover:text-purple-400 transition-colors"
            >
              {contactContent.email}
            </a>

            {/* Socials */}
            <div className="flex flex-wrap gap-4 mt-4">
              {contactContent.socials.map((social) => (
                <Button
                  key={social.name}
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-white/20 hover:bg-white/10 hover:border-white/40"
                  asChild
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="hidden sm:inline">{social.name}</span>
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
