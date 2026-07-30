"use client";

import React from "react";
import { Mail, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5 bg-[#030611] py-12 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(37,99,235,0.08),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left column */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a href="#home" className="font-sora font-extrabold text-xl tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-brand-accent via-brand-primary to-brand-secondary">
            Abdul Rahamtulla
          </a>
          <p className="text-xs text-brand-muted mt-2 font-space-grotesk">
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>

        {/* Quick scroll-to-top */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-brand-muted hover:text-white border border-white/5 transition-all hover:-translate-y-1 active:translate-y-0"
        >
          <ArrowUp size={16} />
        </button>

        {/* Right column social links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/shaikabdulrahamtulla"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Link"
            className="text-brand-muted hover:text-white transition-colors"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://linkedin.com/in/shaik-abdul-rahamtulla"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Link"
            className="text-brand-muted hover:text-white transition-colors"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="mailto:shaikabdulrahamtulla@gmail.com"
            aria-label="Email Link"
            className="text-brand-muted hover:text-white transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
