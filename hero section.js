import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1672191276718-f1b7ef696929?w=1200&h=800&fit=crop",
    title: "Cheese Maggi Special",
    subtitle: "Extra cheesy, extra delicious"
  },
  {
    image: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=1200&h=800&fit=crop",
    title: "Masala Maggi Classic",
    subtitle: "Authentic street-style taste"
  },
  {
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=1200&h=800&fit=crop",
    title: "Spicy Schezwan Maggi",
    subtitle: "For those who love it hot"
  }
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
                <Star className="h-4 w-4 fill-primary" />
                Mangalagiri's Favorite Maggi Spot
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
            >
              <span className="gradient-text">Moody Maggi</span>
              <br />
              <span className="text-foreground">Freshest Street Food</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              Experience the most flavorful Maggi varieties in Mangalagiri.
              Cooked fresh with love, served with a smile!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Button
                onClick={() => scrollTo("menu")}
                className="gradient-bg text-white px-8 py-6 text-base font-semibold rounded-full hover:opacity-90 shadow-lg food-shadow"
              >
                View Menu
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollTo("contact")}
                className="px-8 py-6 text-base font-semibold rounded-full border-2 hover:bg-accent"
              >
                Find Us
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-wrap gap-6 text-sm"
            >
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-5 w-5 text-primary" />
                <span className="font-medium">5 PM - 11 PM Daily</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-medium">Mangalagiri, AP</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
          className="rounded-full bg-background/80 backdrop-blur-sm border-border hover:bg-background"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
          className="rounded-full bg-background/80 backdrop-blur-sm border-border hover:bg-background"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
