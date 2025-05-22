"use client";

import { motion } from "framer-motion";
import { 
  Globe, 
  Database, 
  Smartphone, 
  Server, 
  Search, 
  Palette, 
  Calendar, 
  MessageCircle 
} from "lucide-react";
import { fadeIn } from "@/lib/animations";
import { useLottieAnimation } from "@/hooks/useLottieAnimation";

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  featured?: boolean;
}

const services: ServiceCard[] = [
  {
    icon: <Globe size={28} />,
    title: "Static Website",
    description: "Fast, responsive websites for professional presence.",
  },
  {
    icon: <Database size={28} />,
    title: "Dynamic Website",
    description: "Content management systems for easy updates.",
    featured: true,
  },
  {
    icon: <Smartphone size={28} />,
    title: "App Design",
    description: "User-friendly mobile applications tailored to your needs.",
  },
  {
    icon: <Server size={28} />,
    title: "Hosting Setup",
    description: "Secure, reliable website hosting with maintenance.",
  },
  {
    icon: <Search size={28} />,
    title: "SEO Boost",
    description: "Optimization to improve your search engine ranking.",
  },
  {
    icon: <Palette size={28} />,
    title: "Logo Design",
    description: "Professional branding to establish your identity.",
  },
  {
    icon: <Calendar size={28} />,
    title: "Booking System",
    description: "Online appointment scheduling for your clients.",
  },
  {
    icon: <MessageCircle size={28} />,
    title: "WhatsApp Chat",
    description: "Direct messaging integration for instant communication.",
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

export default function ServiceSection() {
  const lottieRef = useLottieAnimation({
    path: "https://assets3.lottiefiles.com/packages/lf20_iorpbol0.json"
  });

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            ref={lottieRef}
            className="h-[300px] md:h-[400px]"
          />
          
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="space-y-4"
          >
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Our Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Comprehensive Web Solutions for Every Need
            </h2>
            <p className="text-muted-foreground text-lg">
              We offer a range of services to get your business online with professional, 
              effective websites and apps that convert visitors into customers.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              className={`group bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-all hover:translate-y-[-5px] border ${
                service.featured ? "border-primary" : "border-border"
              }`}
            >
              <motion.div
                variants={iconVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`mb-4 ${
                  service.featured 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-secondary/10 text-secondary"
                } p-3 rounded-lg inline-block transition-colors group-hover:bg-primary group-hover:text-primary-foreground`}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}