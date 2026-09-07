"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LuGraduationCap,
  LuAward,
  LuCircleCheck,
  LuExternalLink,
  LuCalendar,
  LuBuilding2,
  LuBookOpen,
  LuSparkles,
  LuShieldCheck,
  LuX,
  LuEye,
} from "react-icons/lu";
import { Badge } from "@/components/badge";
import { fadeUp, popIn, staggerContainer } from "@/lib/animations";

interface Credential {
  id: string;
  type: "degree" | "certification";
  title: string;
  subtitle: string;
  issuer: string;
  issuerUrl?: string;
  date: string;
  badgeText: string;
  badgeVariant?: "default" | "secondary" | "outline";
  description: string;
  keyHighlights: string[];
  skills: string[];
  verificationNote?: string;
  certImage?: string;
}

const credentialsData: Credential[] = [
  {
    id: "beng-futminna",
    type: "degree",
    title: "Bachelor of Engineering (B.Eng.)",
    subtitle: "Computer Engineering",
    issuer: "Federal University of Technology Minna (FUT Minna)",
    date: "Graduated",
    badgeText: "Accredited Degree",
    description:
      "A rigorous 5-year engineering curriculum bridging computer hardware architecture with robust modern software systems, algorithms, and applied engineering mathematics.",
    keyHighlights: [
      "Hardware-Software Co-design & Embedded Systems",
      "Data Structures, Algorithms & Computational Logic",
      "Computer Architecture, Networking & Systems Programming",
      "Applied Software Engineering & Database Systems",
    ],
    skills: [
      "Computer Engineering",
      "Software Systems",
      "Algorithms",
      "System Architecture",
      "Hardware & IoT",
      "Problem Solving",
    ],
    verificationNote:
      "Official academic transcripts & degree verification available upon request",
  },
  {
    id: "hng-finalist-13",
    type: "certification",
    title: "HNG Internship 13 Finalist",
    subtitle: "Frontend Development Track",
    issuer: "HNG Tech (HNG.tech)",
    issuerUrl: "https://hng.tech",
    date: "Dec 16, 2025",
    badgeText: "Top 450 of 12,362 (Top 3.6%)",
    description:
      "Recognized as an outstanding finalist in the intensive HNG 13 Internship. Built fast-paced, high-performance web applications, met tight production deadlines, and collaborated in simulated real-world engineering sprints.",
    keyHighlights: [
      "Finished as one of top 450 finalists selected from 12,362 global candidates",
      "Developed production-grade responsive applications with React, Next.js, and TypeScript",
      "Demonstrated real-world agility, code quality, UI precision, and cross-team collaboration",
    ],
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "UI Engineering",
      "Performance Optimization",
      "Agile Sprints",
    ],
    verificationNote: "Verified digital credential issued by HNG Tech",
  },
];

export default function Certifications() {
  const [selectedCred, setSelectedCred] = useState<Credential | null>(null);

  return (
    <section
      id="certifications"
      className="relative w-full min-h-screen bg-white dark:bg-black text-black dark:text-white flex items-center justify-center overflow-hidden py-24 transition-colors duration-300 scroll-mt-16"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 dark:bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 w-full relative z-10">
        <motion.div
          className="flex flex-col items-center gap-6 lg:gap-8 text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section Tag */}
          <motion.div variants={fadeUp} className="flex items-center gap-2">
            <span className="h-px w-8 bg-purple-600 dark:bg-purple-400" />
            <span className="text-xs lg:text-sm text-black/60 dark:text-gray-400 uppercase tracking-widest font-semibold">
              Academic & Professional Credentials
            </span>
            <span className="h-px w-8 bg-purple-600 dark:bg-purple-400" />
          </motion.div>

          {/* Section Heading */}
          <motion.h2
            className="text-4xl lg:text-6xl font-bold tracking-tight"
            variants={fadeUp}
          >
            Education &{" "}
            <span className="text-purple-600 dark:text-purple-400">
              Certifications
            </span>
          </motion.h2>

          <motion.p
            className="text-base lg:text-lg text-black/70 dark:text-gray-300 max-w-2xl leading-relaxed"
            variants={fadeUp}
          >
            A strong foundation in Computer Engineering coupled with rigorous,
            real-world frontend development experience.
          </motion.p>
        </motion.div>

        {/* Credentials Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {credentialsData.map((cred) => (
            <motion.div
              key={cred.id}
              variants={popIn}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative flex flex-col justify-between rounded-2xl border border-gray-200/80 dark:border-white/10 bg-gray-50/70 dark:bg-zinc-900/60 backdrop-blur-md p-8 lg:p-10 shadow-lg shadow-black/[0.03] dark:shadow-black/40 hover:border-purple-500/50 dark:hover:border-purple-500/40 hover:shadow-purple-500/5 transition-all duration-300"
            >
              {/* Top Accent Gradient Border */}
              <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-transparent via-purple-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Header Meta: Icon + Type Badge + Date */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 ring-1 ring-purple-500/20 group-hover:scale-110 transition-transform duration-300">
                      {cred.type === "degree" ? (
                        <LuGraduationCap className="w-6 h-6" />
                      ) : (
                        <LuAward className="w-6 h-6" />
                      )}
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                        {cred.type === "degree"
                          ? "University Degree"
                          : "Professional Certification"}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-black/50 dark:text-gray-400 mt-0.5">
                        <LuCalendar className="w-3.5 h-3.5" />
                        <span>{cred.date}</span>
                      </div>
                    </div>
                  </div>

                  <Badge
                    variant="outline"
                    className="border-purple-500/30 text-purple-700 dark:text-purple-300 bg-purple-500/10 text-xs px-2.5 py-1 font-medium"
                  >
                    {cred.badgeText}
                  </Badge>
                </div>

                {/* Main Titles */}
                <h3 className="text-2xl lg:text-3xl font-bold tracking-tight text-black dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {cred.title}
                </h3>
                <h4 className="text-lg font-semibold text-black/80 dark:text-gray-200 mt-1">
                  {cred.subtitle}
                </h4>

                {/* Issuer Info */}
                <div className="flex items-center gap-2 text-sm text-black/60 dark:text-gray-400 mt-2 mb-6">
                  <LuBuilding2 className="w-4 h-4 shrink-0 text-purple-500" />
                  {cred.issuerUrl ? (
                    <a
                      href={cred.issuerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-purple-600 dark:hover:text-purple-400 underline-offset-4 hover:underline flex items-center gap-1 font-medium"
                    >
                      {cred.issuer}
                      <LuExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="font-medium">{cred.issuer}</span>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm lg:text-base text-black/75 dark:text-gray-300 leading-relaxed mb-6">
                  {cred.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2.5 mb-6 pt-4 border-t border-gray-200/70 dark:border-white/5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-black/50 dark:text-gray-400 flex items-center gap-1.5">
                    <LuSparkles className="w-3.5 h-3.5 text-purple-500" />
                    Key Focus & Highlights
                  </span>
                  <ul className="space-y-2 text-xs lg:text-sm text-black/80 dark:text-gray-300">
                    {cred.keyHighlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <LuCircleCheck className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer Section: Skills + Verification */}
              <div className="pt-6 border-t border-gray-200/70 dark:border-white/5 mt-auto">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cred.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-md bg-gray-200/70 dark:bg-white/5 text-black/80 dark:text-gray-300 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Verification Notice / Safety Pill */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-1.5 text-xs text-black/60 dark:text-gray-400 italic">
                    <LuShieldCheck className="w-4 h-4 text-green-600 dark:text-green-400 shrink-0" />
                    <span>{cred.verificationNote}</span>
                  </div>

                  <button
                    onClick={() => setSelectedCred(cred)}
                    className="cursor-pointer text-xs font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-500 flex items-center gap-1 ml-2 shrink-0 group-hover:translate-x-0.5 transition-transform"
                    aria-label={`View details for ${cred.title}`}
                  >
                    <span>Details</span>
                    <LuEye className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Interactive Detail Modal */}
      <AnimatePresence>
        {selectedCred && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/10 rounded-2xl p-6 lg:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCred(null)}
                className="cursor-pointer absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 text-black/60 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <LuX className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-purple-100 dark:bg-purple-950/70 text-purple-600 dark:text-purple-400">
                  {selectedCred.type === "degree" ? (
                    <LuGraduationCap className="w-5 h-5" />
                  ) : (
                    <LuAward className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <Badge
                    variant="outline"
                    className="text-xs border-purple-500/30 text-purple-600 dark:text-purple-300"
                  >
                    {selectedCred.badgeText}
                  </Badge>
                  <h3 className="text-xl font-bold text-black dark:text-white mt-1">
                    {selectedCred.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-sm text-black/80 dark:text-gray-300">
                <div className="bg-gray-50 dark:bg-zinc-800/50 p-4 rounded-xl space-y-1 border border-gray-100 dark:border-white/5">
                  <p className="font-semibold text-black dark:text-white">
                    {selectedCred.subtitle}
                  </p>
                  <p className="text-xs text-black/60 dark:text-gray-400">
                    {selectedCred.issuer}
                  </p>
                  <p className="text-xs text-purple-600 dark:text-purple-400 font-medium">
                    Issued / Completed: {selectedCred.date}
                  </p>
                </div>

                <p className="leading-relaxed">{selectedCred.description}</p>

                <div>
                  <h4 className="font-semibold text-black dark:text-white mb-2 flex items-center gap-1.5">
                    <LuBookOpen className="w-4 h-4 text-purple-500" />
                    Key Competencies & Highlights:
                  </h4>
                  <ul className="space-y-1.5 pl-2">
                    {selectedCred.keyHighlights.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs lg:text-sm"
                      >
                        <LuCircleCheck className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <LuShieldCheck className="w-4 h-4 text-green-500" />
                    <span>{selectedCred.verificationNote}</span>
                  </div>
                  {selectedCred.issuerUrl && (
                    <a
                      href={selectedCred.issuerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1"
                    >
                      <span>Visit Issuer</span>
                      <LuExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
