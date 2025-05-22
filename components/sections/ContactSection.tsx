"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { fadeIn } from "@/lib/animations";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", phone: "", message: "" });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg">
            Have a project in mind? Contact us for a free consultation. We're here to help your business grow online.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Phone className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-medium">Call Us</p>
                    <Link href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 98765 43210
                    </Link>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-medium">Email Us</p>
                    <Link href="mailto:info@bangaloreblizz.com" className="text-muted-foreground hover:text-primary transition-colors">
                      info@bangaloreblizz.com
                    </Link>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-medium">Office</p>
                    <p className="text-muted-foreground">
                      Koramangala, Bangalore 560034
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-3">Working Hours</h4>
                <p className="text-muted-foreground">Monday - Friday: 9AM - 6PM</p>
                <p className="text-muted-foreground">Saturday: 10AM - 4PM</p>
              </div>
            </div>
            
            <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
              <h3 className="text-xl font-semibold mb-3">Book a Free Call</h3>
              <p className="text-muted-foreground mb-4">
                Schedule a free 30-minute consultation to discuss your project requirements.
              </p>
              <Link
                href="#"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium inline-flex items-center space-x-2 hover:bg-primary/90 transition-all"
              >
                <span>Book a Call</span>
                <Phone size={16} />
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="lg:col-span-3"
          >
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <h3 className="text-xl font-semibold mb-6">Send us a Message</h3>
              
              {isSubmitted ? (
                <div className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 p-4 rounded-lg flex items-center space-x-3">
                  <CheckCircle2 className="flex-shrink-0" size={20} />
                  <p>Thank you for your message! We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">
                      Phone/WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Your Requirements
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium flex items-center space-x-2 hover:bg-primary/90 transition-all ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}