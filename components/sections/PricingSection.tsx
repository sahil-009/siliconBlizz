"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import { fadeIn } from "@/lib/animations";

interface PricingFeature {
  title: string;
  basic: boolean;
  pro: boolean;
  premium: boolean;
}

const features: PricingFeature[] = [
  { title: "Responsive Design", basic: true, pro: true, premium: true },
  { title: "Custom Domain Setup", basic: true, pro: true, premium: true },
  { title: "Number of Pages", basic: false, pro: true, premium: true },
  { title: "Contact Form", basic: false, pro: true, premium: true },
  { title: "SEO Optimization", basic: false, pro: true, premium: true },
  { title: "Admin Panel", basic: false, pro: false, premium: true },
  { title: "Logo Design", basic: false, pro: false, premium: true },
  { title: "Booking System", basic: false, pro: false, premium: true },
  { title: "WhatsApp Integration", basic: false, pro: false, premium: true },
];

export default function PricingSection() {
  useEffect(() => {
    // Add smooth scrolling for anchor links
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const link = target as HTMLAnchorElement;
        const href = link.getAttribute('href');
        
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        }
      }
    };

    document.addEventListener('click', handleLinkClick);

    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  return (
    <section id="pricing" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing</h2>
          <p className="text-muted-foreground text-lg">
            Budget-friendly packages to get your business online without breaking the bank.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Package */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-md transition-all"
          >
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-bold">Basic</h3>
              <div className="flex items-end gap-1">
                <span className="text-4xl font-bold">₹4,999</span>
                <span className="text-muted-foreground pb-1">/ one-time</span>
              </div>
              <p className="text-muted-foreground">Perfect for solo professionals needing a simple online presence.</p>
            </div>
            
            <div className="p-6 border-t border-border space-y-4">
              <div className="space-y-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    {feature.basic ? (
                      <Check size={18} className="text-green-500 mr-2" />
                    ) : (
                      <X size={18} className="text-muted-foreground mr-2" />
                    )}
                    <span className={feature.basic ? "" : "text-muted-foreground"}>
                      {feature.title === "Number of Pages" ? "1 Page (Landing Page)" : feature.title}
                    </span>
                  </div>
                ))}
              </div>
              
              <Link
                href="#contact"
                className="w-full inline-block text-center bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-medium hover:bg-secondary/80 transition-all"
              >
                Get Started
              </Link>
            </div>
          </motion.div>

          {/* Pro Package */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="bg-card rounded-lg border border-primary shadow-lg relative hover:shadow-xl transition-all"
          >
            <div className="absolute top-0 right-0">
              <div className="bg-primary text-primary-foreground px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                Most Popular
              </div>
            </div>
            
            <div className="p-6 space-y-4 pt-10">
              <h3 className="text-2xl font-bold">Pro</h3>
              <div className="flex items-end gap-1">
                <span className="text-4xl font-bold">₹9,999</span>
                <span className="text-muted-foreground pb-1">/ one-time</span>
              </div>
              <p className="text-muted-foreground">Ideal for growing businesses needing more functionality.</p>
            </div>
            
            <div className="p-6 border-t border-border space-y-4">
              <div className="space-y-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    {feature.pro ? (
                      <Check size={18} className="text-green-500 mr-2" />
                    ) : (
                      <X size={18} className="text-muted-foreground mr-2" />
                    )}
                    <span className={feature.pro ? "" : "text-muted-foreground"}>
                      {feature.title === "Number of Pages" ? "3-5 Pages" : feature.title}
                    </span>
                  </div>
                ))}
              </div>
              
              <Link
                href="#contact"
                className="w-full inline-block text-center bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium flex items-center justify-center space-x-2 hover:bg-primary/90 transition-all"
              >
                <span>Choose Pro</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* Premium Package */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-md transition-all"
          >
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-bold">Premium</h3>
              <div className="flex items-end gap-1">
                <span className="text-4xl font-bold">₹14,999</span>
                <span className="text-muted-foreground pb-1">/ one-time</span>
              </div>
              <p className="text-muted-foreground">Complete package for businesses needing a comprehensive web presence.</p>
            </div>
            
            <div className="p-6 border-t border-border space-y-4">
              <div className="space-y-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    {feature.premium ? (
                      <Check size={18} className="text-green-500 mr-2" />
                    ) : (
                      <X size={18} className="text-muted-foreground mr-2" />
                    )}
                    <span>
                      {feature.title === "Number of Pages" ? "Unlimited Pages" : feature.title}
                    </span>
                  </div>
                ))}
              </div>
              
              <Link
                href="#contact"
                className="w-full inline-block text-center bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-medium hover:bg-secondary/80 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}