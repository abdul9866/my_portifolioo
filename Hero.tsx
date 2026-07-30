"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const TYPING_ROLES = [
  "Software Engineer",
  "Java Developer",
  "Python Developer",
  "AI/ML Enthusiast",
  "Full Stack Developer",
  "Problem Solver",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Typing effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = TYPING_ROLES[roleIndex];
    const typingSpeed = isDeleting ? 30 : 80;

    if (!isDeleting && currentText === fullText) {
      // Wait before deleting
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % TYPING_ROLES.length);
    } else {
      timer = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting
            ? fullText.substring(0, prev.length - 1)
            : fullText.substring(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  // 3D Card tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Spotlight pointer position percentages
    const mousePctX = ((e.clientX - rect.left) / rect.width) * 100;
    const mousePctY = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--mouse-x", `${mousePctX}%`);
    card.style.setProperty("--mouse-y", `${mousePctY}%`);

    // Rotation values
    const rotX = (y / rect.height) * -15; // Limit rotation to -15deg to 15deg
    const rotY = (x / rect.width) * 15;
    card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
    >
      {/* Background Matrix/Grid (Tailwind overlay) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b0f19_1px,transparent_1px),linear-gradient(to_bottom,#0b0f19_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 w-full">
        {/* Left Info Column */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-space-grotesk text-xs uppercase tracking-widest text-brand-accent font-semibold px-3 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 w-fit">
              Available for Internships & Projects
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 font-sora font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white leading-tight"
          >
            Hi, I&apos;m{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-accent via-brand-primary to-brand-secondary">
              Abdul Rahamtulla
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-4 flex items-center gap-2 text-xl sm:text-2xl text-brand-muted h-10 font-space-grotesk"
          >
            <span>I build solutions as a</span>
            <span className="text-brand-accent font-semibold border-r-2 border-brand-accent pr-1 animate-pulse">
              {currentText}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-base sm:text-lg text-brand-muted leading-relaxed max-w-xl"
          >
            B.Tech Computer Science student at VIT AP with hands-on experience
            in Python, Java, and machine learning. Specialized in full-stack
            web engineering, data structures, and computer vision (OpenCV). Fast
            learner dedicated to solving real-world challenges.
          </motion.p>

          {/* Call to action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary text-sm font-semibold text-white shadow-lg shadow-brand-primary/20 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="px-6 py-3.5 rounded-full glass-card hover:bg-white/5 text-sm font-semibold text-white border border-white/10 hover:border-white/20 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Hire Me
            </a>
            <a
              href="/resume.pdf"
              download="Shaik_Abdul_Rahamtulla_Resume.pdf"
              className="flex items-center gap-2 px-6 py-3.5 rounded-full border border-brand-accent/30 bg-brand-accent/5 hover:bg-brand-accent/10 text-sm font-semibold text-brand-accent transition-all duration-200"
            >
              <Download size={15} />
              Download Resume
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex items-center gap-6 border-t border-white/5 pt-8 w-fit"
          >
            <a
              href="https://github.com/shaikabdulrahamtulla"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/5 hover:border-white/15 text-brand-muted hover:text-white transition-all hover:scale-110"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/shaik-abdul-rahamtulla"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/5 hover:border-white/15 text-brand-muted hover:text-white transition-all hover:scale-110"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:shaikabdulrahamtulla@gmail.com"
              className="p-2.5 rounded-full bg-white/5 border border-white/5 hover:border-white/15 text-brand-muted hover:text-white transition-all hover:scale-110"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </div>

        {/* Right 3D Visual Card Column */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-72 h-80 sm:w-80 sm:h-96"
          >
            {/* Glowing blur blobs behind the card */}
            <div className="absolute inset-0 -m-8 bg-gradient-to-r from-brand-accent via-brand-primary to-brand-secondary rounded-full opacity-20 blur-3xl" />

            {/* Neon Border wrapper */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-brand-accent via-brand-primary to-brand-secondary p-[1.5px] shadow-2xl animate-pulse">
              {/* 3D Glass Interactive Card */}
              <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="w-full h-full rounded-2xl glass-card overflow-hidden spotlight-card flex flex-col items-center justify-between p-6 transition-all duration-200 cursor-pointer shadow-[0_0_50px_rgba(37,99,235,0.15)]"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Photo container */}
                <div
                  className="w-full h-[85%] rounded-xl overflow-hidden relative border border-white/5 shadow-inner"
                  style={{ transform: "translateZ(30px)" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent z-10 opacity-70" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/shaik-photo.jpg"
                    alt="Shaik Abdul Rahamtulla"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                {/* Card footer details */}
                <div
                  className="w-full text-center mt-3"
                  style={{ transform: "translateZ(20px)" }}
                >
                  <p className="font-sora text-base font-bold text-white tracking-wide uppercase">
                    Shaik Abdul Rahamtulla
                  </p>
                  <p className="font-space-grotesk text-xs text-brand-accent font-medium mt-0.5">
                    B.Tech Computer Science &bull; 2027
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
