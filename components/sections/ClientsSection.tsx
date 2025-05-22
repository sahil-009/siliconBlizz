"use client";

import { motion } from "framer-motion";
import { UserRound, Scale, Code2, Building2 } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animations";

interface ClientCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const clients: ClientCard[] = [
  {
    icon: <UserRound size={36} className="text-primary" />,
    title: "Doctors",
    description: "Professional websites with booking systems and patient resources."
  },
  {
    icon: <Scale size={36} className="text-primary" />,
    title: "Lawyers",
    description: "Trust-building websites with client testimonials and service details."
  },
  {
    icon: <Code2 size={36} className="text-primary" />,
    title: "Developers",
    description: "Portfolio sites to showcase your skills and attract better clients."
  },
  {
    icon: <Building2 size={36} className="text-primary" />,
    title: "Small Businesses",
    description: "Affordable websites that drive local customers and boost sales."
  }
];

export default function ClientsSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Help</h2>
          <p className="text-muted-foreground text-lg">
            We specialize in creating effective websites for professionals and small businesses.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.1 * (index + 1))}
              className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-all hover:translate-y-[-5px] border border-border"
            >
              <div className="mb-4 bg-primary/10 p-3 rounded-lg inline-block">
                {client.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{client.title}</h3>
              <p className="text-muted-foreground">{client.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}