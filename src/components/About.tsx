import React from "react";
import { CheckCircle, Database, Layout, ShieldAlert, Users } from "lucide-react";
import { candidateData } from "@/lib/data";

const strengths = [
  {
    icon: Database,
    title: "Data Cleaning & Prep",
    desc: "Transforming raw, messy datasets into analysis-ready assets. Skilled in missing value treatment, outlier detection, and schema alignment using SQL and Python.",
  },
  {
    icon: ShieldAlert,
    title: "Statistical & Trend Analysis",
    desc: "Applying statistical concepts and exploratory data analysis (EDA) to find correlations, sales cycles, and outliers that impact business operations.",
  },
  {
    icon: Layout,
    title: "Interactive Visualization",
    desc: "Designing responsive business intelligence dashboards using Power BI and Tableau. Familiar with DAX, pivot tables, and KPI metrics mapping.",
  },
  {
    icon: Users,
    title: "Stakeholder Collaboration",
    desc: "Engaging with finance and operations teams to translate complex data points into actionable insights, helping business managers make informed decisions.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            About Me
          </h2>
          <div className="h-1 w-20 bg-brand-cyan mx-auto mt-4 rounded-full"></div>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Get to know my academic background, technical focus, and professional career goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Career focus & Goal */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              My Journey & Analytical Vision
            </h3>
            
            <p className="text-muted-foreground leading-relaxed">
              Having completed my **B.Sc. in Computer Science with Data Analytics**, I have spent the last three years mastering the theoretical foundation of database models, statistics, and programming. 
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My internship at **Sadhvi Academy** refined these skills, letting me clean real-world transactional data and build live tracking dashboards. I enjoy bridging the gap between raw database tables and business executives who need clean, visual summaries.
            </p>

            <div className="p-5 rounded-xl border border-brand-cyan/20 bg-brand-cyan/5 text-foreground">
              <h4 className="font-bold text-brand-cyan flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5" />
                Career Goal
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Seeking an entry-level Data Analyst position where I can apply my SQL, Python, Excel, and BI dashboard skills to clean complex datasets, uncover trends, define operational KPIs, and support business decision-making.
              </p>
            </div>
          </div>

          {/* Core Competencies Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {strengths.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx} 
                  className="glass-card rounded-xl p-6 bg-card-bg border border-border flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 flex items-center justify-center text-brand-cyan mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
