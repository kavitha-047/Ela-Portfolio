"use client";

import React from "react";
import { ArrowRight, Download } from "lucide-react";
import { candidateData } from "@/lib/data";
import Image from "next/image";

export default function Hero() {

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden grid-bg"
    >
      {/* Dynamic drifting background particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg className="absolute w-full h-full opacity-[0.15] dark:opacity-[0.25]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="tealGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* Animated data points */}
          <circle cx="10%" cy="25%" r="6" fill="#06b6d4" className="animate-pulse" />
          <circle cx="85%" cy="30%" r="8" fill="#0891b2" className="animate-bounce" style={{ animationDuration: "8s" }} />
          <circle cx="45%" cy="75%" r="5" fill="#06b6d4" className="animate-float" />
          {/* Faint network lines */}
          <line x1="10%" y1="25%" x2="45%" y2="75%" stroke="rgba(6, 182, 212, 0.1)" strokeWidth="1" />
          <line x1="45%" y1="75%" x2="85%" y2="30%" stroke="rgba(6, 182, 212, 0.1)" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text content Column */}
          <div className="lg:col-span-7 space-y-6 text-left order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-brand-cyan/20 bg-brand-cyan/5 text-brand-cyan text-sm font-semibold tracking-wide uppercase animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-ping"></span>
              <span>Available for Hire</span>
            </div>
            
            <div className="space-y-2">
              <p className="text-lg font-medium text-muted-foreground">Hello, I&apos;m</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
                {candidateData.name}
              </h1>
              <p className="text-2xl sm:text-3xl font-bold text-brand-cyan">
                {candidateData.title}
              </p>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {candidateData.summary}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => handleScrollTo("projects")}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium bg-brand-cyan hover:bg-brand-cyan-dark transition-all shadow-md shadow-brand-cyan/20 group cursor-pointer focus:ring-2 focus:ring-brand-cyan focus:outline-none"
              >
                <span>View Projects</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="/assets/projects/Resume_Elamathi.pdf"
                download="Resume_Elamathi.pdf"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-foreground font-medium border border-border bg-card-bg hover:bg-muted/50 transition-all cursor-pointer focus:ring-2 focus:ring-brand-cyan/50 focus:outline-none"
              >
                <Download className="mr-2 h-5 w-5" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => handleScrollTo("contact")}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-muted-foreground hover:text-foreground font-medium transition-all cursor-pointer hover:underline"
              >
                <span>Contact Me</span>
              </button>
            </div>
          </div>

          {/* Profile Photo Column */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative group">
              {/* Subtle cyan glow behind the card */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-brand-cyan/20 to-brand-cyan-dark/10 opacity-35 blur-xl group-hover:opacity-60 transition duration-500 z-0"></div>
              
              {/* Main Photo Frame */}
              <div className="relative glass-card p-2.5 rounded-2xl overflow-hidden shadow-2xl border border-border bg-card-bg/50 max-w-[280px] sm:max-w-[320px] md:max-w-[340px] z-10 transition-all duration-300">
                <div className="relative rounded-xl overflow-hidden bg-muted/20">
                  <Image
                    src="/assets/profile.jpg"
                    width={792}
                    height={1024}
                    alt="Elamathi N - Data Analyst"
                    priority
                    className="w-full h-auto object-cover transition duration-700 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Padding refined
