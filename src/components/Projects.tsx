"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ExternalLink, Cpu, Database, Brain, Globe, CheckCircle2, ArrowUpRight, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";

type ProjectDetail = {
  id: string;
  title: string;
  subtitle: string;
  brief: string;
  category: string;
  icon: React.ReactNode;
  color: string;
  tech: string[];
  problem: string;
  solution: string;
  features: string[];
  architecture: string;
  challenges: string;
  result: string;
  githubUrl: string;
  liveUrl?: string;
};

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeProject, setActiveProject] = useState<ProjectDetail | null>(null);

  const projectsList: ProjectDetail[] = [
    {
      id: "crop-ml",
      title: "Crop Recommendation System",
      subtitle: "Supervised ML Classification Model",
      brief: "A predictive ML system recommending optimal crops using soil composition and real-time environmental factors.",
      category: "Machine Learning",
      icon: <Brain className="text-pink-400" size={20} />,
      color: "from-pink-500/20 via-purple-500/10 to-transparent",
      tech: ["Python", "Random Forest", "SVM", "KNN", "Decision Tree", "Naive Bayes", "Scikit-Learn"],
      problem: "Farmers face challenges determining which crops are best suited for their lands due to fluctuating soil parameters and unpredictable environmental patterns, leading to suboptimal yields.",
      solution: "Developed an intelligence system that parses N (Nitrogen), P (Phosphorus), K (Potassium) levels alongside temperature, humidity, rainfall, and soil pH to forecast the highest-yield crop options.",
      features: [
        "Analyzes soil metrics (N, P, K) and climate factors.",
        "Compares Random Forest, SVM, KNN, Decision Tree, and Naive Bayes.",
        "99%+ prediction accuracy using Random Forest.",
        "Detailed performance evaluation matrices."
      ],
      architecture: "Pipeline reads values -> Pre-processes dataset -> Feeds into Scikit-learn models -> Performs cross-validation -> Selects Random Forest -> Predicts crop indices.",
      challenges: "Mitigating variance and avoiding overfitting in high-correlation classes (e.g. similar temperature/pH ranges for different crops). Resolved by tuning Random Forest hyperparameters and pruning depth.",
      result: "Achieved an accuracy score of 99%+ with the top-performing model, establishing a robust blueprint for algorithmic crop selection.",
      githubUrl: "https://github.com/shaikabdulrahamtulla/crop-recommendation-ml"
    },
    {
      id: "irrigation-iot",
      title: "Smart Plant Watering Robot",
      subtitle: "Automated Microcontroller Irrigation System",
      brief: "An IoT embedded robotics solution automating crop watering based on soil moisture thresholds.",
      category: "Embedded & IoT",
      icon: <Cpu className="text-brand-accent" size={20} />,
      color: "from-brand-accent/20 via-brand-primary/10 to-transparent",
      tech: ["Arduino Hardware", "Embedded C++", "Soil Sensors", "Relay Control Modules"],
      problem: "Manual watering is either labor-intensive or prone to human error, resulting in overwatering or underwatering that harms root development and wastes local water resources.",
      solution: "Created a robotic watering system utilizing real-time soil moisture sensors. It triggers a water pump automatically only when the moisture levels drop below configured thresholds.",
      features: [
        "Real-time soil condition diagnostics.",
        "Automatic pump actuation via relay modules.",
        "Power-efficient logic for continuous battery operation.",
        "Feedback loop preventer to avoid moisture saturation overshooting."
      ],
      architecture: "Soil Moisture Sensor -> Arduino UNO Microcontroller -> Relay Switch -> Submersible Water Pump -> Closed-loop feedback system.",
      challenges: "Interference in analog sensor readings due to soil chemistry changes and battery voltage drops. Solved by implementing dynamic threshold calibration and averaging sensor inputs in the control loop.",
      result: "Maintained constant, hands-free soil hydration levels while reducing water consumption by approximately 35% compared to manual schedules.",
      githubUrl: "https://github.com/shaikabdulrahamtulla/smart-watering-bot"
    },
    {
      id: "foodprep-web",
      title: "Food Prep Frontend Website",
      subtitle: "Interactive Food-Ordering Landing UI",
      brief: "A responsive, modern frontend ordering dashboard styled with premium micro-interactions.",
      category: "Frontend Web",
      icon: <Globe className="text-green-400" size={20} />,
      color: "from-green-500/20 via-emerald-500/10 to-transparent",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      problem: "Many food delivery and food preparation interfaces are slow, cluttered, and lack mobile responsiveness, resulting in high shopping-cart dropoff rates.",
      solution: "Built a visually striking, highly responsive food-ordering landing interface emphasizing fluid navigation and smooth CSS animations.",
      features: [
        "Fluid grid system adjusting for laptops, tablets, and phones.",
        "Dynamic cart calculation and menu displays.",
        "Interactive hover overlays and micro-animations.",
        "Highly accessible semantic layout markup."
      ],
      architecture: "Responsive HTML5 markup -> Modern CSS flexbox/grid layout and variables -> Vanilla JS state management for cart/menu items.",
      challenges: "Optimizing menu image loading and asset size for fast mobile rendering. Resolved by applying image compression formats and CSS lazy-effects.",
      result: "Delivered a lightweight, highly responsive frontend prototype featuring modern interactive layouts that recruiters can test immediately.",
      githubUrl: "https://github.com/shaikabdulrahamtulla/food-prep-frontend",
      liveUrl: "https://shaikabdulrahamtulla.github.io/food-prep-frontend"
    }
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const cards = document.querySelectorAll(".project-spotlight");
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
      id="projects"
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
            Showcase
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 font-sora font-extrabold text-3xl md:text-5xl text-white"
          >
            Featured Projects
          </motion.h2>
          <div className="mt-4 w-12 h-1 bg-gradient-to-r from-brand-accent to-brand-primary rounded-full mx-auto md:mx-0" />
        </div>

        {/* Projects Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card rounded-2xl border border-white/5 overflow-hidden project-spotlight spotlight-card flex flex-col justify-between group hover:border-brand-primary/20 transition-all duration-300"
            >
              {/* Card Banner with colored gradient glow */}
              <div className={`h-24 bg-gradient-to-br ${project.color} relative overflow-hidden flex items-end p-4 border-b border-white/5`}>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur flex items-center justify-center border border-white/10">
                  {project.icon}
                </div>
                <span className="font-space-grotesk text-xs text-brand-accent font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-brand-bg/85 border border-brand-accent/20">
                  {project.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-sora font-bold text-lg text-white mb-1 group-hover:text-brand-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-space-grotesk text-xs text-brand-muted mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-brand-muted leading-relaxed line-clamp-3">
                    {project.brief}
                  </p>
                </div>

                <div className="mt-6">
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-space-grotesk px-2 py-1 rounded bg-white/5 text-brand-muted border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-[10px] font-space-grotesk px-2 py-1 rounded bg-white/5 text-brand-accent">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between border-t border-white/5 pt-4">
                    <button
                      onClick={() => setActiveProject(project)}
                      className="flex items-center gap-1.5 text-xs font-semibold text-white hover:text-brand-accent transition-colors"
                    >
                      Read Case Study
                      <ArrowUpRight size={14} />
                    </button>

                    <div className="flex items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Repository"
                        className="text-brand-muted hover:text-white transition-colors"
                      >
                        <FaGithub size={16} />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live Demo"
                          className="text-brand-muted hover:text-white transition-colors"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Detailed Overlay Drawer */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 260 }}
              className="relative w-full max-w-2xl h-full bg-brand-surface border-l border-white/10 shadow-2xl overflow-y-auto z-10 flex flex-col p-8 sm:p-12 text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                aria-label="Close Case Study"
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-brand-muted hover:text-white transition-colors border border-white/5"
              >
                <X size={20} />
              </button>

              {/* Content Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="font-space-grotesk text-xs uppercase tracking-wider text-brand-accent font-semibold px-2.5 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20">
                  {activeProject.category}
                </span>
                <span className="text-brand-muted text-xs font-space-grotesk">
                  {activeProject.subtitle}
                </span>
              </div>

              <h3 className="font-sora font-extrabold text-2xl sm:text-3xl text-white">
                {activeProject.title}
              </h3>

              <div className="mt-8 space-y-8 flex-grow">
                {/* Problem */}
                <div className="space-y-2">
                  <h4 className="font-sora text-sm font-bold uppercase tracking-wider text-white">
                    The Problem
                  </h4>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    {activeProject.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="space-y-2">
                  <h4 className="font-sora text-sm font-bold uppercase tracking-wider text-white">
                    The Solution
                  </h4>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    {activeProject.solution}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="font-sora text-sm font-bold uppercase tracking-wider text-white">
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeProject.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs text-brand-muted">
                        <CheckCircle2 size={16} className="text-brand-accent mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack used */}
                <div className="space-y-2">
                  <h4 className="font-sora text-sm font-bold uppercase tracking-wider text-white">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-space-grotesk px-2.5 py-1 rounded bg-white/5 text-white border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Architecture */}
                <div className="space-y-2">
                  <h4 className="font-sora text-sm font-bold uppercase tracking-wider text-white">
                    Architecture & Flow
                  </h4>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    {activeProject.architecture}
                  </p>
                </div>

                {/* Challenges */}
                <div className="space-y-2">
                  <h4 className="font-sora text-sm font-bold uppercase tracking-wider text-white">
                    Key Challenges Faced
                  </h4>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    {activeProject.challenges}
                  </p>
                </div>

                {/* Result */}
                <div className="space-y-2">
                  <h4 className="font-sora text-sm font-bold uppercase tracking-wider text-white">
                    Result & Performance
                  </h4>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    {activeProject.result}
                  </p>
                </div>
              </div>

              {/* Action Footer */}
              <div className="mt-12 flex gap-4 border-t border-white/5 pt-6 shrink-0">
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 text-sm font-semibold text-white border border-white/10 transition-all flex-1"
                >
                  <FaGithub size={16} />
                  GitHub Repository
                </a>
                {activeProject.liveUrl && (
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary text-sm font-semibold text-white shadow-lg shadow-brand-primary/20 transition-all flex-1"
                  >
                    <ExternalLink size={16} />
                    Live Preview
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
