import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const gallery = [
  "https://images.unsplash.com/photo-1672191276718-f1b7ef696929?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1555126634-323283e090fa?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1574484284002-952d92456975?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&h=500&fit=crop"
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    rating: 5,
    text: "Best maggi in Mangalagiri! The cheese variety is absolutely delicious. Must try!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  },
  {
    name: "Priya Sharma",
    rating: 5,
    text: "My evening go-to spot! Love the schezwan maggi. Quick service and amazing taste.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    name: "Amit Patel",
    rating: 5,
    text: "Affordable and tasty! The butter masala maggi is my favorite. Highly recommended!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
  }
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 sm:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">
            Gallery
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 tracking-tight">
            Food <span className="gradient-text">Showcase</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-20">
          {gallery.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold">
            What Our <span className="gradient-text">Customers Say</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="p-6 rounded-2xl bg-card border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
