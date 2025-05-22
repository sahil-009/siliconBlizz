"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { fadeIn } from "@/lib/animations";

interface Testimonial {
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Dr. Aisha Patel",
    position: "Dentist",
    company: "Smile Dental Clinic",
    image: "https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote: "Silicon Blizz created a beautiful website for my dental practice that perfectly represents our brand. Patient bookings have increased by 30% since launch!",
    rating: 5,
  },
  {
    name: "Rahul Sharma",
    position: "Attorney",
    company: "Sharma Legal Associates",
    image: "https://images.pexels.com/photos/5397723/pexels-photo-5397723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote: "Their professional approach and attention to detail helped us establish a strong online presence. Our website now generates quality leads consistently.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    position: "Owner",
    company: "Organic Foods",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote: "Working with Silicon Blizz was a breeze! They helped our small business establish an online store that matches our brand perfectly. Sales have improved significantly!",
    rating: 4,
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const lottieContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animation: any;
    
    const loadLottie = async () => {
      try {
        const lottie = (await import('lottie-web')).default;
        if (lottieContainer.current) {
          animation = lottie.loadAnimation({
            container: lottieContainer.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            path: "https://assets5.lottiefiles.com/packages/lf20_eop7ymay.json",
          });
        }
      } catch (error) {
        console.error("Error loading Lottie animation:", error);
      }
    };

    loadLottie();

    return () => {
      if (animation) {
        animation.destroy();
      }
    };
  }, []);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 md:py-24 bg-muted/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="relative h-[300px] rounded-lg overflow-hidden hidden lg:block"
          >
            <div ref={lottieContainer} className="w-full h-full" />
          </motion.div>
          
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              What Our Clients Say
            </h2>
            
            <div className="relative">
              <div className="overflow-hidden">
                <div 
                  className="transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  <div className="flex">
                    {testimonials.map((testimonial, index) => (
                      <div 
                        key={index} 
                        className="w-full flex-shrink-0 bg-card p-6 rounded-lg shadow-sm border border-border"
                        style={{ minWidth: '100%' }}
                      >
                        <div className="flex gap-4 items-center mb-4">
                          <div className="relative w-14 h-14 rounded-full overflow-hidden bg-muted">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              fill
                              className="object-cover"
                              sizes="56px"
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold">{testimonial.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.position}, {testimonial.company}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={18}
                              className={i < testimonial.rating ? "text-[#FFB800] fill-[#FFB800]" : "text-muted"}
                            />
                          ))}
                        </div>
                        
                        <blockquote className="text-lg italic">
                          "{testimonial.quote}"
                        </blockquote>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center mt-6 space-x-4">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-card hover:bg-muted border border-border transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                <div className="flex space-x-2 items-center">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full ${
                        activeIndex === index ? "bg-primary" : "bg-muted"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-card hover:bg-muted border border-border transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}