import React from "react";
import { Award, Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import { candidateData } from "@/lib/data";

export default function Experience() {
  const { experience, certifications } = candidateData;

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Experience & Certifications
          </h2>
          <div className="h-1 w-20 bg-brand-cyan mx-auto mt-4 rounded-full"></div>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Professional roles, internships, and accredited validation programs.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-8 border-l-2 border-brand-cyan/20 space-y-12">
          
          {/* Loop over Experiences */}
          {experience.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Indicator dot */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-background border-2 border-brand-cyan flex items-center justify-center text-brand-cyan group-hover:scale-110 transition-transform">
                <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              
              <div className="glass-card rounded-2xl p-6 sm:p-8 bg-card-bg border border-border space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                    <p className="text-base font-semibold text-brand-cyan">{exp.company}</p>
                  </div>
                  <div className="flex items-center space-x-1.5 text-xs sm:text-sm font-semibold text-muted-foreground bg-muted/40 px-3 py-1 rounded-md border border-border/40">
                    <Calendar className="w-4 h-4 text-brand-cyan" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start text-sm sm:text-base text-muted-foreground leading-relaxed">
                      <span className="text-brand-cyan mr-2.5 mt-1 font-bold">↳</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Certifications Block as timeline entry */}
          <div className="relative group">
            {/* Timeline Indicator dot */}
            <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-background border-2 border-amber-500 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
              <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>

            <div className="glass-card rounded-2xl p-6 sm:p-8 bg-card-bg border border-border space-y-6">
              <div>
                <h3 className="text-xl font-bold text-foreground">Accredited Certifications</h3>
                <p className="text-sm text-muted-foreground mt-1">Validation of expert domains and theoretical methodologies.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, cIdx) => (
                  <div 
                    key={cIdx} 
                    className="p-4 rounded-xl bg-muted/20 border border-border/50 flex items-start gap-3 transition-colors hover:border-brand-cyan/20"
                  >
                    <div className="w-8 h-8 rounded bg-brand-cyan/5 border border-brand-cyan/15 flex items-center justify-center text-brand-cyan shrink-0">
                      <CheckCircle2 className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground leading-snug">
                        {cert.name}
                      </h4>
                      {cert.issuer && (
                        <p className="text-xs text-muted-foreground mt-0.5 font-medium">
                          Issuer: <span className="text-brand-cyan font-bold">{cert.issuer}</span>
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
