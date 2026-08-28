"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";
import { GitHub, LinkedIn } from "@/components/Icons";
import { candidateData } from "@/lib/data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    // Constructing Mailto Link
    const subjectLine = form.subject ? `[Portfolio] ${form.subject}` : `[Portfolio Contact] Message from ${form.name}`;
    const emailBody = `Hi Elamathi,\n\n${form.message}\n\nRegards,\n${form.name}\nContact Email: ${form.email}`;
    
    const mailtoUrl = `mailto:${candidateData.email}?subject=${encodeURIComponent(
      subjectLine
    )}&body=${encodeURIComponent(emailBody)}`;
    
    // Redirect browser to trigger native email client
    window.location.href = mailtoUrl;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const contactItems = [
    {
      icon: Mail,
      title: "Email Address",
      value: candidateData.email,
      href: `mailto:${candidateData.email}`,
      color: "text-red-500 bg-red-500/10 border-red-500/20",
    },
    {
      icon: Phone,
      title: "Phone Number",
      value: candidateData.phone,
      href: `tel:${candidateData.phone.replace(/\s+/g, "")}`,
      color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      icon: MapPin,
      title: "Location",
      value: candidateData.location,
      href: null,
      color: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    },
    {
      icon: LinkedIn,
      title: "LinkedIn Profile",
      value: "linkedin.com/in/elamathi-n",
      href: "https://www.linkedin.com/in/elamathin",
      color: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    },
    {
      icon: GitHub,
      title: "GitHub Repository",
      value: "https://github.com/Elamathi27",
      href: "https://github.com/Elamathi27",
      color: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-brand-cyan mx-auto mt-4 rounded-full"></div>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Interested in hiring? Let&apos;s talk about how my database and analysis skills can support your team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details cards */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Contact Directory</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Reach out directly via phone or email, or connect with me via professional networks. 
              I am open to both remote and location-based roles near Tamil Nadu.
            </p>

            <div className="space-y-4">
              {contactItems.map((item, idx) => {
                const Icon = item.icon;
                const Wrapper = item.href ? "a" : "div";
                const wrapperProps = item.href
                  ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
                  : {};

                return (
                  <Wrapper
                    key={idx}
                    {...wrapperProps}
                    className={`flex items-center gap-4 p-4 rounded-xl border border-border bg-card-bg transition-all duration-200 ${
                      item.href ? "hover:border-brand-cyan/30 hover:scale-[1.01]" : ""
                    }`}
                  >
                    <div className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 border ${item.color}`}>
                      <Icon className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wide">
                        {item.title}
                      </h4>
                      <p className="text-sm sm:text-base font-semibold text-foreground mt-0.5 break-all">
                        {item.value}
                      </p>
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 bg-card-bg border border-border shadow-lg">
              <h3 className="text-xl font-bold text-foreground mb-6">Send an Inquiry</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="form-name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Full Name *
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-muted/20 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 focus:border-brand-cyan transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="form-email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Email Address *
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="e.g. john@company.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-muted/20 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 focus:border-brand-cyan transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="form-subject" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Subject (Optional)
                  </label>
                  <input
                    id="form-subject"
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="e.g. Job Opportunity / Freelance Inquiry"
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-muted/20 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 focus:border-brand-cyan transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="form-message" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Message Body *
                  </label>
                  <textarea
                    id="form-message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Write details about the role, expectations, or schedule..."
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-muted/20 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 focus:border-brand-cyan transition-all resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg bg-brand-cyan hover:bg-brand-cyan-dark text-white font-semibold transition-all gap-2 cursor-pointer shadow-md shadow-brand-cyan/10"
                >
                  {submitted ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span>Redirecting to Mail App...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Draft Mail Outline</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

// Accessibility refined

// Accessibility refined
