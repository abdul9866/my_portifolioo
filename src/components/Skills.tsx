"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Brain, Globe, Database, Terminal, Settings } from "lucide-react";

type Skill = {
  name: string;
  level: number; // 0-100 percentage for display rings
};

type SkillGroup = {
  category: string;
  icon: React.ReactNode;
  color: string;
  skills: Skill[];
};

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });

  const skillGroups: SkillGroup[] = [
    {
      category: "Programming Languages",
      icon: <Code2 size={18} />,
      color: "from-brand-accent to-brand-primary",
      skills: [
        { name: "Java", level: 85 },
        { name: "Python", level: 90 },
        { name: "C", level: 75 },
        { name: "C++", level: 80 },
      ],
    },
    {
      category: "Web Development",
      icon: <Globe size={18} />,
      color: "from-brand-primary to-brand-secondary",
      skills: [
        { name: "React.js", level: 85 },
        { name: "Node.js", level: 75 },
        { name: "JavaScript", level: 85 },
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
      ],
    },
    {
      category: "AI & Machine Learning",
      icon: <Brain size={18} />,
      color: "from-brand-secondary to-pink-500",
      skills: [
        { name: "ML Fundamentals", level: 85 },
        { name: "Model Evaluation", level: 80 },
        { name: "Computer Vision (OpenCV)", level: 75 },
      ],
    },
    {
      category: "Databases",
      icon: <Database size={18} />,
      color: "from-green-400 to-emerald-600",
      skills: [{ name: "MySQL", level: 80 }],
    },
    {
      category: "Tools & Platforms",
      icon: <Terminal size={18} />,
      color: "from-yellow-400 to-brand-warning",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "Jupyter Notebook", level: 85 },
        { name: "Google Colab", level: 80 },
        { name: "VS Code", level: 90 },
        { name: "Kaggle", level: 70 },
      ],
    },
    {
      category: "Core Concepts",
      icon: <Settings size={18} />,
      color: "from-brand-accent to-indigo-500",
      skills: [
        { name: "Data Structures & Algorithms", level: 80 },
        { name: "Object-Oriented Programming", level: 85 },
      ],
    },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const cards = document.querySelectorAll(".skill-spotlight");
    cards.forEach((card: any) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  };

  return (
    <section
      id="skills"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative py-24 border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center md:text-left">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-space-grotesk text-xs uppercase tracking-widest text-brand-accent font-semibold"
          >
            Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 font-sora font-extrabold text-3xl md:text-5xl text-white"
          >
            Technical Expertise
          </motion.h2>
          <div className="mt-4 w-12 h-1 bg-gradient-to-r from-brand-accent to-brand-primary rounded-full mx-auto md:mx-0" />
        </div>

        {/* Skill Groups Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: groupIdx * 0.08 }}
              className="glass-card rounded-2xl p-6 border border-white/5 skill-spotlight spotlight-card flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-9 h-9 rounded-lg bg-gradient-to-br ${group.color} flex items-center justify-center text-white shadow-lg`}
                  >
                    {group.icon}
                  </div>
                  <h3 className="font-sora font-bold text-base text-white">
                    {group.category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="group/item">
                      <div className="flex items-center justify-between text-sm font-medium mb-1.5">
                        <span className="text-brand-muted group-hover/item:text-white transition-colors">
                          {skill.name}
                        </span>
                        <span className="font-space-grotesk text-xs text-brand-accent">
                          {skill.level}%
                        </span>
                      </div>
                      {/* Progress bar container */}
                      <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: 0.3 + groupIdx * 0.1 }}
                          className={`h-full bg-gradient-to-r ${group.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
