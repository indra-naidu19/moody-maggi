import React, { useState } from "react";
import { motion } from "framer-motion";
import { Flame, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
  {
    name: "Classic Masala Maggi",
    price: 30,
    image: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&h=300&fit=crop",
    category: "classic",
    spicy: 1,
    popular: true,
    description: "Traditional street-style masala maggi"
  },
  {
    name: "Cheese Burst Maggi",
    price: 50,
    image: "https://images.unsplash.com/photo-1672191276718-f1b7ef696929?w=400&h=300&fit=crop",
    category: "special",
    spicy: 1,
    popular: true,
    description: "Loaded with mozzarella cheese"
  },
  {
    name: "Schezwan Maggi",
    price: 45,
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop",
    category: "special",
    spicy: 3,
    description: "Spicy Indo-Chinese fusion"
  },
  {
    name: "Butter Masala Maggi",
    price: 40,
    image: "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=400&h=300&fit=crop",
    category: "special",
    spicy: 1,
    description: "Rich buttery flavor"
  },
  {
    name: "Tandoori Maggi",
    price: 55,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop",
    category: "special",
    spicy: 2,
    description: "Smoky tandoori spices"
  },
  {
    name: "Veg Loaded Maggi",
    price: 60,
    image: "https://images.unsplash.com/photo-1547928578-f5096b6311e1?w=400&h=300&fit=crop",
    category: "special",
    spicy: 1,
    description: "Fresh vegetables and herbs"
  },
  {
    name: "Peri Peri Maggi",
    price: 50,
    image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=400&h=300&fit=crop",
    category: "special",
    spicy: 3,
    description: "Zesty peri peri kick"
  },
  {
    name: "Cheese Corn Maggi",
    price: 65,
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop",
    category: "special",
    spicy: 0,
    popular: true,
    description: "Creamy cheese with sweet corn"
  },
  {
    name: "Egg Maggi",
    price: 40,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
    category: "egg",
    spicy: 1,
    description: "With scrambled eggs"
  },
  {
    name: "Double Egg Maggi",
    price: 55,
    image: "https://images.unsplash.com/photo-1582169296194-e4d644c48063?w=400&h=300&fit=crop",
    category: "egg",
    spicy: 1,
    description: "Extra protein boost"
  },
  {
    name: "Fried Egg Maggi",
    price: 50,
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=400&h=300&fit=crop",
    category: "egg",
    spicy: 1,
    description: "With sunny side up egg"
  },
  {
    name: "Veg Combo",
    price: 80,
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop",
    category: "combo",
    spicy: 1,
    description: "Maggi + Samosa + Soft Drink"
  }
];

const categories = [
  { id: "all", label: "All Items" },
  { id: "classic", label: "Classic" },
  { id: "special", label: "Special" },
  { id: "egg", label: "With Egg" },
  { id: "combo", label: "Combos" }
];

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 sm:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">
            Our Menu
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 tracking-tight">
            <span className="gradient-text">Delicious</span> Varieties
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            All dishes prepared fresh with premium ingredients and authentic spices
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              variant={activeCategory === cat.id ? "default" : "outline"}
              className={`rounded-full ${
                activeCategory === cat.id 
                  ? "gradient-bg text-white" 
                  : "hover:bg-accent"
              }`}
            >
              {cat.label}
            </Button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all hover:shadow-xl"
            >
              {item.popular && (
                <div className="absolute top-3 right-3 z-10 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center gap-1 shadow-lg">
                  <Sparkles className="h-3 w-3" />
                  Popular
                </div>
              )}

              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  {item.spicy > 0 && (
                    <div className="flex gap-0.5">
                      {[...Array(item.spicy)].map((_, i) => (
                        <Flame key={i} className="h-4 w-4 text-red-500 fill-red-500" />
                      ))}
                    </div>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold gradient-text">₹{item.price}</span>
                  <Button size="sm" className="gradient-bg text-white rounded-full px-6">
                    Order
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
