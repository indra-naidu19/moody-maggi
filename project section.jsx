import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "TaskFlow",
    description:
      "A modern project management app with drag-and-drop boards, real-time collaboration, and analytics dashboard.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "WeatherVista",
    description:
      "Beautiful weather application with 7-day forecasts, interactive maps, and location-based alerts with smooth animations.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    tags: ["React", "Tailwind CSS", "OpenWeather API"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "CryptoTrack",
    description:
      "Real-time cryptocurrency tracker with portfolio management, price alerts, and historical data visualization.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
    tags: ["Python", "Flask", "React", "CoinGecko API"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "DevBlog",
    description:
      "Minimal blogging platform for developers with Markdown support, syntax highlighting, and RSS feed generation.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop",
    tags: ["TypeScript", "Next.js", "MDX", "Vercel"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
            Selected work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            A collection of projects that showcase my skills and passion for building great digital products.
          </p>
        </motion.div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/20 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Hover actions */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub`}
                    className="w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-background transition-colors"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live demo`}
                    className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-primary-foreground hover:opacity-90 transition-opacity"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 group-hover:gradient-text transition-all">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
