export interface Project {
  title: string;
  category: "Python Projects" | "Excel Projects" | "Dashboard Projects";
  description: string;
  tech: string[];
  githubLink: string;
  liveDemoLink: string | null;
  insights: string[];
  challenges: string[];
  thumbnail: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  bullets: string[];
}

export interface Certification {
  name: string;
  issuer: string | null;
  date: string | null;
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  score: string;
}

export interface CandidateData {
  name: string;
  title: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  location: string;
  summary: string;
  skills: {
    programming: string[];
    dataAnalysisVisualization: string[];
    databases: string[];
    dataHandling: string[];
    toolsPlatforms: string[];
    analyticalConcepts: string[];
  };
  experience: Experience[];
  projects: Project[];
  certifications: Certification[];
  education: Education[];
  currentlyLearning: string[];
}

export const candidateData: CandidateData = {
  name: "Elamathi N",
  title: "Aspiring Data Analyst",
  phone: "+91 9894744719",
  email: "elamathiela511@gmail.com",
  linkedin: "REPLACE_LINKEDIN_URL",
  github: "https://github.com/Elamathi27",
  location: "Pollachi, Tamil Nadu, India",
  summary: "Entry-level Data Analyst with hands-on experience in Python, R, SQL, Excel, Power BI, and Tableau. Delivered end-to-end analysis projects and supported a Junior Data Analyst internship, cleaning and analyzing datasets, building dashboards, and translating insights for stakeholders. Skilled in statistical analysis, data modeling, and creating impactful visualizations to drive data-informed decisions.",
  skills: {
    programming: ["Python", "R"],
    dataAnalysisVisualization: ["Excel (VLOOKUP)", "Power BI", "DAX", "Tableau", "EDA", "KPI", "ETL"],
    databases: ["MySQL", "SQL Server"],
    dataHandling: ["Missing Value Treatment", "Duplicate Handling", "Data Cleaning", "Data Transformation"],
    toolsPlatforms: ["GitHub", "Google Analytics", "Looker", "BigQuery", "Microsoft Office"],
    analyticalConcepts: ["Statistical Analysis", "Basic AI & NLP Concepts", "Data Modeling", "Business Insights", "Performance Analysis", "Operational Metrics", "Data-Driven Decision Making"]
  },
  experience: [
    {
      company: "Sadhvi Academy",
      role: "Junior Data Analyst Intern",
      duration: "Jun 2025 – Aug 2025",
      bullets: [
        "Cleaned, transformed, and analysed datasets using Python and SQL, applying statistical analysis to uncover trends.",
        "Supported end-to-end BI projects from data consolidation to dashboard delivery, applying ETL techniques across SQL Server and Excel data sources.",
        "Collaborated with operations and finance teams to define KPIs and translate reporting requirements into interactive Tableau dashboards."
      ]
    }
  ],
  projects: [
    {
      title: "Flipkart Review Sentiment Analysis",
      category: "Python Projects",
      description: "Analyses customer reviews from Flipkart to classify them as positive, negative, or neutral using Natural Language Processing (NLP), helping businesses understand customer opinions and improve product offerings.",
      tech: ["Python", "NLP", "Pandas"],
      githubLink: "REPLACE_WITH_REPO_URL",
      liveDemoLink: null,
      insights: [
        "Uncovered that over 65% of negative customer reviews were linked to shipping delay and packaging issues, rather than actual product quality.",
        "Identified a strong correlation between 3-star ratings and ambiguous product descriptions, providing actionable suggestions for seller content optimization."
      ],
      challenges: [
        "Handling noisy textual data: Resolved by designing a custom regex-based text pre-processing pipeline that stripped HTML tags, emojis, and slang before tokenization."
      ],
      thumbnail: "/assets/projects/flipkart_sentiment.svg"
    },
    {
      title: "Product Sales by Region",
      category: "Excel Projects",
      description: "An Excel-based dashboard analysing regional sales performance of products, identifying high-performing regions, product demand, and sales trends.",
      tech: ["Excel", "VLOOKUP", "Pivot Tables", "Dashboards"],
      githubLink: "REPLACE_WITH_REPO_URL",
      liveDemoLink: null,
      insights: [
        "Found that the Southern region generated 42% of total revenue but had the lowest profit margin due to aggressive promotional discount campaigns.",
        "Discovered that product categories A and B peaked in sales during Q3, correlating with seasonal promotion cycles."
      ],
      challenges: [
        "Consolidating fragmented raw data: Standardized disparate regional templates using advanced Power Query functions and dynamic VLOOKUP arrays."
      ],
      thumbnail: "/assets/projects/excel_sales.svg"
    },
    {
      title: "Google App Store Data Analysis",
      category: "Dashboard Projects",
      description: "An end-to-end data analysis project using multiple tools to analyse app performance based on ratings, reviews, category, installs, and pricing.",
      tech: ["Python", "SQL", "Power BI", "EDA"],
      githubLink: "REPLACE_WITH_REPO_URL",
      liveDemoLink: null,
      insights: [
        "Determined that free apps with microtransactions had a 3.8x higher installation rate and 20% higher user retention than paid alternatives.",
        "Mapped app ratings against category sizes, highlighting that the 'Finance' sector was highly saturated but had low average ratings."
      ],
      challenges: [
        "Managing data anomalies: Handled duplicate app entries and parsed non-standard install numbers (e.g., '10,000+') into numeric values using SQL ETL procedures."
      ],
      thumbnail: "/assets/projects/google_app_store.svg"
    }
  ],
  certifications: [
    { name: "Data Analysis Course (Python, SQL, Excel, Power BI, Statistics)", issuer: null, date: null },
    { name: "Python for Data Science", issuer: "IBM", date: null },
    { name: "Google Analytics Certification", issuer: "Google", date: null }
  ],
  education: [
    {
      degree: "B.Sc. Computer Science with Data Analytics",
      institution: "Nallamuthu Gounder Mahalingam College, Pollachi",
      duration: "Aug 2022 – May 2025",
      score: "7.2 CGPA"
    }
  ],
  currentlyLearning: [
    "Advanced Machine Learning & Predictive Modeling",
    "Cloud Data Warehousing with Snowflake",
    "Advanced SQL Query Optimization & Window Functions"
  ]
};
