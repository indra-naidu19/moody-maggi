import React from "react";
import { ArrowUp, Heart, Instagram, Facebook, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <UtensilsCrossed className="h-6 w-6 gradient-text" />
              <span className="text-xl font-bold gradient-text">Moody Maggi</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Mangalagiri's favorite evening food stall serving delicious maggi varieties
              since day one. Fresh, hot, and full of flavor!
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <button
                onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Menu
              </button>
              <button
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Gallery
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Timings</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Open Daily<br />
              <span className="font-semibold text-foreground">5:00 PM - 11:00 PM</span>
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            © {new Date().getFullYear()} Moody Maggi. Made with <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500" /> in Mangalagiri
          </p>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className="rounded-full w-10 h-10 border-border hover:bg-accent"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
