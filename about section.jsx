import React from "react";
import { motion } from "framer-motion";
import { Code2, Palette, Zap, Coffee } from "lucide-react";

const skills = [
  { name: "HTML / CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "React", level: 88 },
  { name: "Python", level: 82 },
  { name: "Node.js", level: 78 },
  { name: "TypeScript", level: 75 },
];

const highlights = [
  { icon: Code2, label: "3+ Years Experience", desc: "Building web apps" },
  { icon: Palette, label: "UI / UX Focus", desc: "Pixel-perfect design" },
  { icon: Zap, label: "Fast Learner", desc: "Adapts to new tech" },
  { icon: Coffee, label: "500+ Cups", desc: "Of coffee consumed" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
            Get to know me
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              Hi! I'm a passionate software developer based in Mangalagiri, India.
              I specialize in building modern web applications that are fast,
              accessible, and visually stunning. My journey in tech started with
              curiosity and has evolved into a career dedicated to solving real-world
              problems through code.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              When I'm not writing code, you'll find me exploring new technologies,
              contributing to open-source projects, or mentoring aspiring developers.
              I believe in continuous learning and pushing the boundaries of what's
              possible on the web.
            </p>

            {/* Highlight cards */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map(({ icon: Icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                  className="p-4 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors group"
                >
                  <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors mb-2" />
                  <div className="text-sm font-semibold">{label}</div>
                  <div className="text-xs text-muted-foreground">{desc}</div>
                </motion.div>
              ))}
            </div>

            {/* Fun fact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="mt-6 p-4 rounded-xl bg-accent/50 border border-border"
            >
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Fun fact:</span>{" "}
                I once debugged a production issue at 3 AM and celebrated by ordering
                biryani. Priorities! 🍛
              </p>
            </motion.div>
          </motion.div>

          {/* Right - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6">Technical Skills</h3>
            <div className="space-y-5">
              {skills.map(({ name, level }, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">{name}</span>
                    <span className="text-xs text-muted-foreground">{level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.08, duration: 0.8, ease: "easeOut" }}
                      className="h-full rounded-full gradient-bg"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tech stack badges */}
            <div className="mt-10">
              <h3 className="text-lg font-semibold mb-4">Also familiar with</h3>
              <div className="flex flex-wrap gap-2">
                {["Git", "Docker", "MongoDB", "PostgreSQL", "Tailwind CSS", "Figma", "AWS", "REST APIs", "GraphQL"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-accent text-accent-foreground border border-border hover:border-primary/30 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
