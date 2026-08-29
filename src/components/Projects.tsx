"use client";

import React, { useState } from "react";
import { ExternalLink, Info, AlertTriangle, Layers } from "lucide-react";
import { GitHub } from "@/components/Icons";
import { candidateData, Project } from "@/lib/data";
import Image from "next/image";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "Python Projects", label: "Python Projects" },
  { id: "SQL Projects", label: "SQL Projects" },
  { id: "Dashboard Projects", label: "Dashboard Projects" },
  { id: "Excel Projects", label: "Excel Projects" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const getFilteredProjects = (): Project[] => {
    if (activeFilter === "all") return candidateData.projects;
    
    return candidateData.projects.filter((project) => {
      // Special match for SQL Projects since it is a secondary filter
      if (activeFilter === "SQL Projects") {
        return (project.category as string) === "SQL Projects" || project.tech.includes("SQL");
      }
      return project.category === activeFilter;
    });
  };

  const getProjectCount = (categoryId: string): number => {
    if (categoryId === "all") return candidateData.projects.length;
    if (categoryId === "SQL Projects") {
      return candidateData.projects.filter(p => (p.category as string) === "SQL Projects" || p.tech.includes("SQL")).length;
    }
    return candidateData.projects.filter(p => (p.category as string) === categoryId).length;
  };

  const filteredProjects = getFilteredProjects();

  return (
    <section id="projects" className="py-20 bg-muted/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-brand-cyan mx-auto mt-4 rounded-full"></div>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            A showcase of data analytics projects spanning NLP, sales dashboards, and application performance analysis.
          </p>
        </div>

        {/* Filters Panel */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const count = getProjectCount(cat.id);
            const isEmpty = count === 0;
            const isActive = activeFilter === cat.id;

            return (
              <button
                key={cat.id}
                disabled={isEmpty}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 border cursor-pointer ${
                  isEmpty
                    ? "opacity-40 cursor-not-allowed border-border bg-transparent text-muted-foreground"
                    : isActive
                    ? "bg-brand-cyan text-white border-brand-cyan shadow-sm shadow-brand-cyan/20"
                    : "bg-card-bg border-border text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <span>{cat.label}</span>
                <span className={`ml-1.5 text-xs font-bold px-1.5 py-0.5 rounded-full ${
                  isActive ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.title} 
              className="glass-card rounded-2xl bg-card-bg border border-border flex flex-col justify-between overflow-hidden group shadow-lg"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative h-48 w-full bg-gradient-to-br from-brand-cyan/10 to-indigo-500/10 border-b border-border/50 flex items-center justify-center">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                  <div className="absolute top-4 left-4 px-2.5 py-1 rounded-md text-[10px] uppercase font-extrabold tracking-wider bg-background/80 border border-border text-brand-cyan">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-5">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-brand-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span 
                        key={t}
                        className="px-2 py-1 rounded bg-muted/60 text-xs font-semibold text-foreground/80 border border-border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Insights Section */}
                  <div className="space-y-2.5 pt-2 border-t border-border/50">
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-brand-cyan flex items-center gap-1.5">
                      <Info className="w-3.5 h-3.5" />
                      Key Insights Uncovered
                    </h4>
                    <ul className="space-y-1.5 pl-1.5">
                      {project.insights.map((insight, i) => (
                        <li key={i} className="text-xs text-muted-foreground leading-relaxed list-disc list-inside">
                          {insight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Challenges Solved */}
                  <div className="space-y-2.5 pt-2 border-t border-border/50">
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-amber-500 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      Challenges Solved
                    </h4>
                    <ul className="space-y-1.5 pl-1.5">
                      {project.challenges.map((challenge, c) => (
                        <li key={c} className="text-xs text-muted-foreground leading-relaxed list-disc list-inside">
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 border-t border-border/40 flex items-center gap-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-lg border border-border text-sm font-semibold text-foreground hover:bg-muted/50 transition-all gap-2"
                >
                  <GitHub className="w-4 h-4" />
                  <span>View Code</span>
                </a>
                
                {project.liveDemoLink && (
                  <a
                    href={project.liveDemoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-brand-cyan text-white text-sm font-semibold hover:bg-brand-cyan-dark transition-all gap-2 shadow-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// Image priorities updated

// Image priorities updated
