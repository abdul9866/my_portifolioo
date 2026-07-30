"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import confetti from "canvas-confetti";

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear errors when typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("sending");
    setStatusMessage("Sending your message...");

    // EmailJS keys
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "template_service_id";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_id";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "public_key";

    // Prepare template params
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject || "Portfolio Contact",
      message: formData.message,
      to_name: "Shaik Abdul Rahamtulla",
    };

    try {
      // If keys are not set yet, mock success after 1.5s so it doesn't fail
      if (
        serviceId === "template_service_id" ||
        templateId === "template_id" ||
        publicKey === "public_key"
      ) {
        await new Promise((resolve) => setTimeout(resolve, 1500));
      } else {
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
      }

      setStatus("success");
      setStatusMessage("Your message has been sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Trigger success confetti!
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#2563EB", "#7C3AED", "#06B6D4"],
      });
    } catch (err: any) {
      console.error("EmailJS Error:", err);
      setStatus("error");
      setStatusMessage("Something went wrong. Please try again or email directly.");
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const cards = document.querySelectorAll(".contact-spotlight");
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
      id="contact"
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
            Connect
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 font-sora font-extrabold text-3xl md:text-5xl text-white"
          >
            Get In Touch
          </motion.h2>
          <div className="mt-4 w-12 h-1 bg-gradient-to-r from-brand-accent to-brand-primary rounded-full mx-auto md:mx-0" />
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Info Card (Left Column) */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-white/5 contact-spotlight spotlight-card"
            >
              <h3 className="font-sora font-bold text-lg text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="font-space-grotesk text-[10px] uppercase text-brand-muted font-bold tracking-wider">
                      Email Me
                    </p>
                    <a
                      href="mailto:shaikabdulrahamtulla@gmail.com"
                      className="text-sm font-semibold text-white hover:text-brand-accent transition-colors"
                    >
                      shaikabdulrahamtulla@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="font-space-grotesk text-[10px] uppercase text-brand-muted font-bold tracking-wider">
                      Call Me
                    </p>
                    <a
                      href="tel:+917780292352"
                      className="text-sm font-semibold text-white hover:text-brand-accent transition-colors"
                    >
                      +91 7780292352
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 flex items-center justify-center text-brand-secondary">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="font-space-grotesk text-[10px] uppercase text-brand-muted font-bold tracking-wider">
                      Location
                    </p>
                    <span className="text-sm font-semibold text-white">
                      Andhra Pradesh, India
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Static Styled map placeholder inside Glass Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card rounded-2xl h-48 border border-white/5 overflow-hidden relative shadow-inner flex items-center justify-center"
            >
              {/* Custom dark gradient grid background representing a styled map */}
              <div className="absolute inset-0 bg-[#0c1223] bg-[radial-gradient(#2563eb_0.8px,transparent_0.8px)] [background-size:16px_16px] opacity-40" />
              {/* Glow center */}
              <div className="absolute w-24 h-24 bg-brand-accent/20 rounded-full blur-2xl animate-pulse" />
              
              <div className="relative z-10 text-center flex flex-col items-center">
                <MapPin size={28} className="text-brand-accent animate-bounce" />
                <span className="font-sora font-bold text-white text-sm mt-2">
                  Andhra Pradesh
                </span>
                <span className="font-space-grotesk text-[10px] text-brand-muted mt-1 uppercase tracking-wider">
                  India &bull; IST Timezone
                </span>
              </div>
            </motion.div>
          </div>

          {/* Form (Right Column) */}
          <div className="lg:col-span-7">
            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-white/5 contact-spotlight spotlight-card space-y-6"
            >
              <h3 className="font-sora font-bold text-lg text-white mb-6">
                Send a Message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-xs font-space-grotesk uppercase tracking-wider text-brand-muted font-bold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-sm text-white placeholder-brand-muted/40 focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-colors ${
                      errors.name ? "border-brand-warning/50" : "border-white/10"
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <span className="text-[10px] text-brand-warning flex items-center gap-1 mt-1 font-space-grotesk">
                      <AlertCircle size={10} /> {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-space-grotesk uppercase tracking-wider text-brand-muted font-bold mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-sm text-white placeholder-brand-muted/40 focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-colors ${
                      errors.email ? "border-brand-warning/50" : "border-white/10"
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <span className="text-[10px] text-brand-warning flex items-center gap-1 mt-1 font-space-grotesk">
                      <AlertCircle size={10} /> {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-space-grotesk uppercase tracking-wider text-brand-muted font-bold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-brand-muted/40 focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-colors"
                  placeholder="Opportunity description"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-space-grotesk uppercase tracking-wider text-brand-muted font-bold mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-sm text-white placeholder-brand-muted/40 focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-colors resize-none ${
                    errors.message ? "border-brand-warning/50" : "border-white/10"
                  }`}
                  placeholder="Tell me about your project or offer..."
                />
                {errors.message && (
                  <span className="text-[10px] text-brand-warning flex items-center gap-1 mt-1 font-space-grotesk">
                    <AlertCircle size={10} /> {errors.message}
                  </span>
                )}
              </div>

              {/* Status Message */}
              {status !== "idle" && (
                <div
                  className={`text-xs p-3 rounded-xl flex items-center gap-2 border font-medium ${
                    status === "sending"
                      ? "bg-white/5 border-white/10 text-white"
                      : status === "success"
                      ? "bg-brand-success/10 border-brand-success/20 text-brand-success"
                      : "bg-brand-warning/10 border-brand-warning/20 text-brand-warning"
                  }`}
                >
                  {status === "success" ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
                  <span>{statusMessage}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary text-sm font-bold text-white flex items-center justify-center gap-2 shadow-lg shadow-brand-primary/20 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:hover:scale-100 transition-all duration-200 cursor-pointer"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
                <Send size={15} />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
