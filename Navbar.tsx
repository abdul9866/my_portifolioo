"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Mail, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? "bg-brand-bg/85 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="font-sora font-extrabold text-xl md:text-2xl tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-brand-accent via-brand-primary to-brand-secondary">
            SAR
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent group-hover:scale-150 transition-transform" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-brand-muted hover:text-white transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Socials & CTA */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="https://github.com/shaikabdulrahamtulla"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-brand-muted hover:text-white transition-colors duration-200"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://linkedin.com/in/shaik-abdul-rahamtulla"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-brand-muted hover:text-white transition-colors duration-200"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="mailto:shaikabdulrahamtulla@gmail.com"
            aria-label="Send Email"
            className="text-brand-muted hover:text-white transition-colors duration-200"
          >
            <Mail size={18} />
          </a>

          <a
            href="/resume.pdf"
            download="Shaik_Abdul_Rahamtulla_Resume.pdf"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary text-xs font-semibold text-white shadow-lg shadow-brand-primary/20 hover:bg-brand-primary/80 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Download size={13} />
            Resume
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          className="md:hidden text-white hover:text-brand-accent transition-colors p-1"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[60px] w-full h-[calc(100vh-60px)] bg-brand-bg/98 z-30 flex flex-col items-center justify-center gap-8 md:hidden transition-all duration-300">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-xl font-medium text-brand-muted hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-6 mt-6">
            <a
              href="https://github.com/shaikabdulrahamtulla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-muted hover:text-white"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://linkedin.com/in/shaik-abdul-rahamtulla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-muted hover:text-white"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="mailto:shaikabdulrahamtulla@gmail.com"
              className="text-brand-muted hover:text-white"
            >
              <Mail size={22} />
            </a>
          </div>
          <a
            href="/resume.pdf"
            download="Shaik_Abdul_Rahamtulla_Resume.pdf"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-brand-primary text-sm font-semibold text-white shadow-lg shadow-brand-primary/20"
          >
            <Download size={14} />
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}
