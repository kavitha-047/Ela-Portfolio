import { Heart } from "lucide-react";
import { GitHub } from "@/components/Icons";
import { candidateData } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card-bg/30 py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Left copyright */}
          <div className="text-center sm:text-left text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} <span className="font-bold text-foreground">{candidateData.name}</span>. All rights reserved.
            </p>
          </div>

          {/* Core tech details */}
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span>Built with</span>
            <span className="font-bold text-foreground">Next.js 15</span>
            <span>•</span>
            <span className="font-bold text-foreground">Tailwind v4</span>
            <span>•</span>
            <span className="font-bold text-foreground">TypeScript</span>
          </div>

          {/* Right Link */}
          <a
            href={candidateData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-brand-cyan transition-colors"
          >
            <GitHub className="w-4 h-4" />
            <span>Repository Code</span>
          </a>

        </div>
      </div>
    </footer>
  );
}
