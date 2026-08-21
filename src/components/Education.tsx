import React from "react";
import { Award, GraduationCap, School, MapPin } from "lucide-react";
import { candidateData } from "@/lib/data";

export default function Education() {
  const { education } = candidateData;

  return (
    <section id="education" className="py-20 bg-muted/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Education
          </h2>
          <div className="h-1 w-20 bg-brand-cyan mx-auto mt-4 rounded-full"></div>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Academic pathways and foundational data science studies.
          </p>
        </div>

        {/* Education Card */}
        <div className="max-w-3xl mx-auto">
          {education.map((edu, idx) => (
            <div 
              key={idx}
              className="glass-card rounded-2xl p-6 sm:p-8 bg-card-bg border border-border shadow-lg relative overflow-hidden"
            >
              {/* Background watermark */}
              <GraduationCap className="absolute -bottom-8 -right-8 w-48 h-48 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 mb-6 border-b border-border/50">
                <div className="space-y-1">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-cyan bg-brand-cyan/10 px-2.5 py-1 rounded-md">
                    <GraduationCap className="w-3.5 h-3.5" />
                    Undergraduate Degree
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    {edu.degree}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground font-semibold">
                    <span className="flex items-center gap-1.5">
                      <School className="w-4 h-4 text-brand-cyan" />
                      {edu.institution}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1.5">
                  <span className="text-sm font-semibold text-muted-foreground bg-muted/40 px-3 py-1 rounded-md border border-border/40 w-fit">
                    {edu.duration}
                  </span>
                  <div className="flex items-center gap-1.5 text-sm font-bold text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-md border border-emerald-500/15 w-fit">
                    <Award className="w-4 h-4" />
                    <span>Grade: {edu.score}</span>
                  </div>
                </div>
              </div>

              {/* Coursework highlights */}
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-brand-cyan mb-4">
                  Core Academic Focus & Coursework
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    "Database Management (SQL)",
                    "Data Structures & Algorithms",
                    "Statistical Analysis & Probability",
                    "Data Warehousing",
                    "Exploratory Data Analysis (EDA)",
                    "Python & R Programming"
                  ].map((topic, i) => (
                    <div 
                      key={i} 
                      className="px-3.5 py-2.5 rounded-lg border border-border bg-muted/20 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-brand-cyan/20 transition-all text-center"
                    >
                      {topic}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
