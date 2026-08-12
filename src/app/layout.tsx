import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { candidateData } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${candidateData.name} | ${candidateData.title} Portfolio`,
  description: candidateData.summary,
  authors: [{ name: candidateData.name }],
  keywords: ["Data Analyst", "Data Portfolio", "Python", "SQL", "Power BI", "Tableau", "Excel", "Data Visualization", "Pollachi", "Tamil Nadu"],
  openGraph: {
    title: `${candidateData.name} | ${candidateData.title} Portfolio`,
    description: candidateData.summary,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${candidateData.name} | ${candidateData.title} Portfolio`,
    description: candidateData.summary,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured JSON-LD Data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": candidateData.name,
    "jobTitle": "Data Analyst",
    "url": "https://github.com/kavitha-047/Ela-Portfolio",
    "sameAs": [
      candidateData.linkedin,
      candidateData.github
    ],
    "telephone": candidateData.phone,
    "email": candidateData.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pollachi",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "India"
    },
    "description": candidateData.summary
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col transition-colors duration-300">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

// SEO optimized
