"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Award, Calendar, CheckSquare } from "lucide-react";

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });

  const educationTimeline = [
    {
      institution: "Vellore Institute of Technology — Andhra Pradesh",
      degree: "B.Tech in Computer Science & Engineering",
      period: "2023 – 2027",
      grade: "CGPA: 7.91",
      details: "Focusing on AI/ML applications, algorithm design, structures, and web technologies.",
    },
    {
      institution: "Sri Chaitanya Junior College",
      degree: "MPC (Math, Physics, Chemistry)",
      period: "2021 – 2023",
      grade: "Percentage: 95.8%",
      details: "Strong fundamentals in Mathematics, Physics, and Chemistry.",
    },
    {
      institution: "MBHS School",
      degree: "Secondary School (10th)",
      period: "2020 – 2021",
      grade: "Percentage: 99.5%",
      details: "High scholastic achievements in state secondary standard curriculums.",
    },
  ];

  const certifications = [
    {
      title: "Modern Web Development with MERN Stack",
      provider: "Certificate Program",
      description: "Comprehensive training in MongoDB, Express, React, and Node.js for engineering production full-stack web architectures.",
    },
    {
      title: "Wadhwani Foundation IGNITE 3",
      provider: "Certificate Program",
      description: "Focus on entrepreneurial mindset, structured startup incubation fundamentals, and critical thinking.",
    },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const cards = document.querySelectorAll(".edu-spotlight");
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
      id="education"
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
            Chronology
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 font-sora font-extrabold text-3xl md:text-5xl text-white"
          >
            Education & Certifications
          </motion.h2>
          <div className="mt-4 w-12 h-1 bg-gradient-to-r from-brand-accent to-brand-primary rounded-full mx-auto md:mx-0" />
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Education Timeline (Left Column) */}
          <div className="lg:col-span-7 relative">
            <h3 className="font-sora font-bold text-xl text-white mb-8 flex items-center gap-2.5">
              <GraduationCap className="text-brand-accent" size={22} />
              Academic History
            </h3>

            {/* Vertical Line */}
            <div className="absolute left-4 top-16 bottom-4 w-[1px] bg-white/10" />

            <div className="space-y-8 pl-10 relative">
              {educationTimeline.map((item, i) => (
                <motion.div
                  key={item.institution}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative group"
                >
                  {/* Timeline Dot Indicator */}
                  <span className="absolute -left-[46px] top-1.5 w-3 h-3 rounded-full bg-brand-bg border-2 border-brand-accent group-hover:scale-150 transition-transform duration-300" />

                  <div className="glass-card rounded-2xl p-6 border border-white/5 edu-spotlight spotlight-card hover:border-brand-accent/20 transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="font-space-grotesk text-xs text-brand-accent font-semibold px-2 py-0.5 rounded bg-brand-accent/10 border border-brand-accent/20">
                        {item.period}
                      </span>
                      <span className="font-space-grotesk text-xs font-bold text-white uppercase tracking-wider bg-white/5 px-2 py-0.5 rounded border border-white/5">
                        {item.grade}
                      </span>
                    </div>

                    <h4 className="font-sora font-bold text-base text-white group-hover:text-brand-accent transition-colors">
                      {item.institution}
                    </h4>
                    <p className="text-xs text-brand-muted font-medium mt-1">
                      {item.degree}
                    </p>
                    <p className="text-sm text-brand-muted mt-3 leading-relaxed">
                      {item.details}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications (Right Column) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="font-sora font-bold text-xl text-white mb-8 flex items-center gap-2.5">
                <Award className="text-brand-secondary" size={22} />
                Certifications
              </h3>

              <div className="space-y-6">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                    className="glass-card rounded-2xl p-6 border border-white/5 edu-spotlight spotlight-card hover:border-brand-secondary/20 transition-all duration-300"
                  >
                    <span className="font-space-grotesk text-[10px] text-brand-secondary font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-secondary/10 border border-brand-secondary/20">
                      {cert.provider}
                    </span>

                    <h4 className="font-sora font-bold text-base text-white mt-3 hover:text-brand-secondary transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-brand-muted mt-2 leading-relaxed">
                      {cert.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
