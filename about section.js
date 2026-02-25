import React from "react";
import { motion } from "framer-motion";
import { Award, Clock, Heart, Users } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every dish cooked fresh with passion and care"
  },
  {
    icon: Award,
    title: "Quality First",
    description: "Premium ingredients and authentic spices"
  },
  {
    icon: Clock,
    title: "Quick Service",
    description: "Hot & fresh maggi ready in minutes"
  },
  {
    icon: Users,
    title: "Crowd Favorite",
    description: "Loved by locals and food enthusiasts"
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-primary">
              About Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-6 tracking-tight">
              Your Favorite <span className="gradient-text">Evening Spot</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Welcome to <span className="font-semibold text-foreground">Moody Maggi</span>, 
                Mangalagiri's most loved evening food stall! We've been serving delicious, 
                hot maggi varieties to hungry souls since our inception.
              </p>
              <p>
                What started as a passion project has now become a favorite hangout spot 
                for students, office-goers, and families. Our secret? Fresh ingredients, 
                authentic flavors, and a commitment to quality that never wavers.
              </p>
              <p>
                From our classic masala maggi to innovative fusion varieties, each dish 
                is crafted with care and served with a smile. Visit us in the evening 
                and experience the magic yourself!
              </p>
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="h-6 w-6 text-primary" />
                <h3 className="font-bold text-lg">Operating Hours</h3>
              </div>
              <p className="text-muted-foreground">
                Open Daily: <span className="font-semibold text-foreground">5:00 PM - 11:00 PM</span>
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Perfect timing for evening snacks and late-night cravings!
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                className="flex gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl gradient-bg flex items-center justify-center text-white">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}

            <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop"
                alt="Food stall atmosphere"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
