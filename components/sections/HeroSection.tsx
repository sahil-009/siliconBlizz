"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeIn } from "@/lib/animations";
import { useLottieAnimation } from "@/hooks/useLottieAnimation";

export default function HeroSection() {
  const lottieRef = useLottieAnimation({
    path: "https://assets5.lottiefiles.com/packages/lf20_kkflmtur.json"
  });

  return (
    <section id="home" className="pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="md:col-span-7 space-y-6"
          >
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Website & App Development Company
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Get a Website That <span className="text-primary">Works</span> for You.
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl">
              Websites for doctors, freelancers, lawyers & local businesses at budget-friendly prices.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="#pricing"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium flex items-center space-x-2 hover:bg-primary/90 transition-all hover:translate-y-[-2px] shadow-sm"
              >
                <span>See Pricing</span>
                <ArrowRight size={18} />
              </Link>
              <Link
                href="#contact"
                className="bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-medium hover:bg-secondary/80 transition-all"
              >
                Book Free Call
              </Link>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="md:col-span-5"
          >
            <div ref={lottieRef} className="w-full h-[300px] md:h-[400px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}