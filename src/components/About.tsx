"use client";

import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Award, BookOpen, Globe2 } from "lucide-react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const cards = document.querySelectorAll(".about-spotlight");
    cards.forEach((card: any) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  };

  const statItems = [
    { label: "B.Tech CGPA", value: "7.91", suffix: "/10", sub: "VIT AP" },
    { label: "Junior College", value: "95.8", suffix: "%", sub: "Sri Chaitanya" },
    { label: "High School (10th)", value: "99.5", suffix: "%", sub: "MBHS School" },
    { label: "Languages", value: "4", suffix: "", sub: "English, Urdu, Hindi..." },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative py-24 border-t border-white/5 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-brand-surface/20 to-brand-bg pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center md:text-left">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-space-grotesk text-xs uppercase tracking-widest text-brand-accent font-semibold"
          >
            My Story
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 font-sora font-extrabold text-3xl md:text-5xl text-white"
          >
            Engineering With Passion
          </motion.h2>
          <div className="mt-4 w-12 h-1 bg-gradient-to-r from-brand-accent to-brand-primary rounded-full mx-auto md:mx-0" />
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Narrative text (Left Column) */}
          <div className="lg:col-span-7 space-y-6 text-brand-muted text-base leading-relaxed">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-2xl p-6 md:p-8 relative border border-white/5 about-spotlight spotlight-card"
            >
              <h3 className="font-sora font-bold text-xl text-white mb-4">
                Who I Am
              </h3>
              <p>
                I am a Computer Science & Engineering undergraduate at Vellore
                Institute of Technology (VIT) Andhra Pradesh, graduating in 2027.
                My focus lies in building clean software architectures and applying
                machine learning methods to practical problems.
              </p>
              <p className="mt-4">
                With solid foundations in core computer science, Object-Oriented
                Programming, and Data Structures & Algorithms, I aim to create
                impactful web app experiences and AI models. I am an eager developer
                constantly seeking challenges to refine my engineering capabilities.
              </p>
            </motion.div>

            {/* Core Strengths & Objective */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="glass-card rounded-2xl p-6 border border-white/5 about-spotlight spotlight-card">
                <div className="w-10 h-10 rounded-lg bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary mb-4">
                  <Award size={20} />
                </div>
                <h4 className="font-sora font-bold text-sm text-white uppercase tracking-wide">
                  Core Strengths
                </h4>
                <p className="mt-2 text-xs text-brand-muted leading-relaxed">
                  Fast learner, algorithmic problem solving, MERN stack full-stack
                  development, structured OOP concepts, computer vision analysis.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-6 border border-white/5 about-spotlight spotlight-card">
                <div className="w-10 h-10 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent mb-4">
                  <Globe2 size={20} />
                </div>
                <h4 className="font-sora font-bold text-sm text-white uppercase tracking-wide">
                  Languages
                </h4>
                <p className="mt-2 text-xs text-brand-muted leading-relaxed">
                  Bilingual proficiency across English, Urdu, Hindi, and Telugu.
                  Enables effective collaborative communication in diverse team environments.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Animated Statistics & Metrics (Right Column) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-6">
            {statItems.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="glass-card rounded-2xl p-6 border border-white/5 relative flex flex-col justify-between h-40 overflow-hidden shadow-lg group hover:border-brand-accent/30 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Visual Glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent/5 rounded-full blur-2xl group-hover:bg-brand-accent/10 transition-colors" />

                <span className="font-space-grotesk text-xs uppercase tracking-widest text-brand-muted group-hover:text-brand-accent transition-colors font-medium">
                  {stat.label}
                </span>

                <div className="my-2">
                  <span className="font-space-grotesk font-extrabold text-4xl sm:text-5xl tracking-tight text-white">
                    {stat.value}
                  </span>
                  <span className="font-space-grotesk text-sm font-semibold text-brand-accent ml-0.5">
                    {stat.suffix}
                  </span>
                </div>

                <span className="text-xs text-brand-muted mt-auto">
                  {stat.sub}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
