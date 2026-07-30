import React from "react";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import ThreeBackground from "@/components/ThreeBackground";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-brand-bg text-brand-text overflow-hidden select-none">
      {/* Interactive 3D Particles Background Canvas */}
      <ThreeBackground />

      {/* Floating custom cursor trail (Desktop only) */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navbar />

      <main className="relative z-10">
        {/* Hero Landing */}
        <Hero />

        {/* Narrative bio and counters */}
        <About />

        {/* Professional skills matrix */}
        <Skills />

        {/* Dynamic portfolio case studies */}
        <Projects />

        {/* Timelines and certifications */}
        <Education />

        {/* Validation-ready forms and indicators */}
        <Contact />
      </main>

      {/* Structured Footer */}
      <Footer />
    </div>
  );
}

