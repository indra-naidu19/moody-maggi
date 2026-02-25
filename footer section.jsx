import React from "react";
import { ArrowUp, Heart, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="text-center md:text-left">
            <span className="text-lg font-bold tracking-tight gradient-text">Portfolio</span>
            <p className="text-sm text-muted-foreground mt-1">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Center - Social */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>

          {/* Right - Made with love + back to top */}
          <div className="flex items-center gap-4">
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              Made with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> in India
            </p>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="rounded-full w-9 h-9 border-border hover:bg-accent"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
