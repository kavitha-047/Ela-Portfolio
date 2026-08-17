"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, Download, Eye, Terminal } from "lucide-react";
import { candidateData } from "@/lib/data";

export default function Hero() {
  const [metrics, setMetrics] = useState({ projects: 0, internships: 0, certifications: 0 });

  useEffect(() => {
    // A clean, low-overhead animation of KPI numbers on load
    const duration = 1000;
    const steps = 30;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setMetrics({
        projects: Math.min(Math.round(progress * candidateData.projects.length), candidateData.projects.length),
        internships: Math.min(Math.round(progress * candidateData.experience.length), candidateData.experience.length),
        certifications: Math.min(Math.round(progress * candidateData.certifications.length), candidateData.certifications.length),
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

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
          <div className="lg:col-span-7 space-y-6 text-left">
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

          {/* Metric Dashboard Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="glass-card w-full max-w-md rounded-2xl p-6 relative overflow-hidden shadow-xl border border-border bg-card-bg">
              {/* Card top banner simulating Terminal header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-border">
                <div className="flex space-x-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/70"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/70"></span>
                </div>
                <div className="flex items-center space-x-1 text-xs text-muted-foreground font-mono">
                  <Terminal className="w-3 h-3 text-brand-cyan" />
                  <span>analyst_dashboard.py</span>
                </div>
              </div>

              {/* KPI metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                <div className="p-3.5 rounded-xl bg-muted/30 border border-border/50">
                  <p className="text-2xl sm:text-3xl font-extrabold text-foreground tabular-nums">
                    {metrics.projects}
                  </p>
                  <p className="text-xs text-muted-foreground font-semibold mt-1">Projects</p>
                </div>
                
                <div className="p-3.5 rounded-xl bg-muted/30 border border-border/50">
                  <p className="text-2xl sm:text-3xl font-extrabold text-foreground tabular-nums">
                    {metrics.internships}
                  </p>
                  <p className="text-xs text-muted-foreground font-semibold mt-1">Internship</p>
                </div>

                <div className="p-3.5 rounded-xl bg-muted/30 border border-border/50">
                  <p className="text-2xl sm:text-3xl font-extrabold text-foreground tabular-nums">
                    {metrics.certifications}
                  </p>
                  <p className="text-xs text-muted-foreground font-semibold mt-1">Certifications</p>
                </div>
              </div>

              {/* Fake visual Chart (SVG) */}
              <div className="space-y-4">
                <p className="text-xs font-semibold text-muted-foreground font-mono uppercase tracking-wider">
                  Performance Metrics (Sales / Retention Trend)
                </p>
                
                <div className="h-32 w-full bg-muted/10 rounded-lg p-2 border border-border/40 relative flex items-end">
                  <svg className="w-full h-full text-brand-cyan" viewBox="0 0 100 40" preserveAspectRatio="none">
                    <path
                      d="M0 35 Q10 20, 20 28 T40 15 T60 22 T80 8 T100 5 L100 40 L0 40 Z"
                      fill="url(#chartGrad)"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="currentColor" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="currentColor" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  {/* Faint overlay gridlines */}
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20 px-2 py-4">
                    <div className="border-b border-muted-foreground/40 w-full"></div>
                    <div className="border-b border-muted-foreground/40 w-full"></div>
                    <div className="border-b border-muted-foreground/40 w-full"></div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                  <span>SQL & Python Integration</span>
                  <span className="text-brand-cyan font-bold">Lighthouse Safe 100%</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
