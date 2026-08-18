import { Code, Database, Eye, ShieldAlert, Sparkles, Terminal } from "lucide-react";
import { candidateData } from "@/lib/data";

const categoryMeta = [
  {
    key: "programming",
    title: "Programming Languages",
    icon: Code,
    color: "text-blue-500 bg-blue-500/10",
  },
  {
    key: "dataAnalysisVisualization",
    title: "Data Analysis & BI",
    icon: Eye,
    color: "text-cyan-500 bg-cyan-500/10",
  },
  {
    key: "databases",
    title: "Databases",
    icon: Database,
    color: "text-emerald-500 bg-emerald-500/10",
  },
  {
    key: "dataHandling",
    title: "Data Quality & Prep",
    icon: ShieldAlert,
    color: "text-amber-500 bg-amber-500/10",
  },
  {
    key: "toolsPlatforms",
    title: "Tools & Platforms",
    icon: Terminal,
    color: "text-indigo-500 bg-indigo-500/10",
  },
  {
    key: "analyticalConcepts",
    title: "Analytical Concepts",
    icon: Sparkles,
    color: "text-purple-500 bg-purple-500/10",
  },
];

export default function Skills() {
  const { skills } = candidateData;

  // We assign dynamic proficiency indicators to add realistic technical context:
  // - "Proficient" (Main skills utilized heavily in projects/internships)
  // - "Comfortable" (Standard database/analysis concepts)
  // - "Familiar" (Academic or recently acquired)
  const getProficiency = (skill: string) => {
    const proficient = [
      "Python",
      "R",
      "Excel (VLOOKUP)",
      "Power BI",
      "Tableau",
      "SQL Server",
      "Data Cleaning",
      "Data Transformation",
      "Duplicate Handling",
      "Missing Value Treatment",
      "GitHub",
      "EDA",
      "KPI",
      "ETL"
    ];
    const comfortable = [
      "MySQL",
      "Microsoft Office",
      "Statistical Analysis",
      "Data Modeling",
      "Business Insights"
    ];
    
    const normalizedSkill = skill.trim().toLowerCase();
    if (proficient.some(p => p.toLowerCase() === normalizedSkill)) {
      return { label: "Proficient", color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" };
    }
    if (comfortable.some(c => c.toLowerCase() === normalizedSkill)) {
      return { label: "Comfortable", color: "bg-brand-cyan/10 text-brand-cyan border-brand-cyan/20" };
    }
    return { label: "Familiar", color: "bg-muted-foreground/10 text-muted-foreground border-muted-foreground/20" };
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Skills & Competencies
          </h2>
          <div className="h-1 w-20 bg-brand-cyan mx-auto mt-4 rounded-full"></div>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            A comprehensive mapping of my database, programming, and dashboard capabilities.
          </p>
        </div>

        {/* Grid of skill categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryMeta.map((cat) => {
            const Icon = cat.icon;
            // Get array of skills from dynamic key
            const skillList = skills[cat.key as keyof typeof skills] || [];
            
            return (
              <div 
                key={cat.key} 
                className="glass-card rounded-xl p-6 bg-card-bg border border-border flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${cat.color}`}>
                      <Icon className="w-5.5 h-5.5" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {skillList.map((skill) => {
                      const level = getProficiency(skill);
                      return (
                        <div 
                          key={skill}
                          className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-border bg-muted/20 text-sm text-foreground transition-all duration-200 hover:border-brand-cyan/35"
                        >
                          <span className="font-medium">{skill}</span>
                          <span className={`text-[10px] uppercase font-bold tracking-wide px-1.5 py-0.5 rounded-md border ${level.color}`}>
                            {level.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dashboard Extras: Currently Learning */}
        <div className="mt-12 max-w-2xl mx-auto w-full">
          {/* Currently Learning */}
          <div className="glass-card rounded-xl p-6 bg-card-bg border border-border flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-brand-cyan bg-brand-cyan/10">
                  <Sparkles className="w-5.5 h-5.5" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Currently Learning</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Active study tracks and technologies I am currently exploring to expand my skill set:
              </p>
              <ul className="space-y-3">
                {candidateData.currentlyLearning.map((item, idx) => (
                  <li key={idx} className="flex items-start text-sm text-muted-foreground">
                    <span className="text-brand-cyan font-bold mr-2">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
