"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { fadeIn } from "@/lib/animations";

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
}

const portfolio: PortfolioItem[] = [
  {
    id: "dental-care",
    title: "Dental Care Website",
    category: "Healthcare",
    description: "A modern and responsive website for a dental clinic with appointment booking system",
    image: "/portfolio/dental-care.jpg",
    link: "https://dentalcare.example.com",
    technologies: ["Next.js", "Tailwind CSS", "MongoDB"]
  },
  {
    id: "law-firm",
    title: "Law Firm Website",
    category: "Legal",
    description: "Professional website for a law firm with case management system",
    image: "/portfolio/law-firm.jpg",
    link: "https://lawfirm.example.com",
    technologies: ["React", "Node.js", "Stripe"]
  },
  {
    id: "freelancer",
    title: "Freelancer Portfolio",
    category: "Portfolio",
    description: "Modern portfolio website for freelance designers and developers",
    image: "/portfolio/freelancer.jpg",
    link: "https://portfolio.example.com",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    id: "doctor",
    title: "Doctor's Website",
    category: "Healthcare",
    description: "Personal website for medical professionals with appointment scheduling",
    image: "/portfolio/doctor.jpg",
    link: "https://doctor.example.com",
    technologies: ["React", "Firebase", "Material-UI"]
  }
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Check out our recent projects and see how we bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolio.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="aspect-w-16 aspect-h-9">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/90 mb-4">{item.category}</p>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 text-white/90 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={item.link}
                  target="_blank"
                  className="inline-flex items-center mt-4 text-white/90 hover:text-white transition-colors"
                >
                  View Project
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}//     title: "Dr. Sarah's Dental Care",
//     category: "Healthcare",
//     description: "Modern dental clinic website with online appointment booking, patient portal, and treatment information.",
//     image: "https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg",
//     link: "/projects/dental-care",
//     technologies: ["Next.js", "Tailwind CSS", "Supabase", "Stripe"]
//   },
//   {
//     id: "law-firm",
//     title: "Kumar & Associates",
//     category: "Law Firm",
//     description: "Professional law firm website with case management, client portal, and legal resources library.",
//     image: "https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg",
//     link: "/projects/law-firm",
//     technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"]
//   },
//   {
//     id: "grocery-store",
//     title: "Bangalore Fresh Market",
//     category: "E-commerce",
//     description: "Online grocery store with real-time inventory, secure payments, and same-day delivery tracking.",
//     image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg",
//     link: "/projects/grocery-store",
//     technologies: ["Next.js", "Redux", "Stripe", "MongoDB"]
//   },
//   {
//     id: "portfolio",
//     title: "CodeCraft Portfolio",
//     category: "Portfolio",
//     description: "Dynamic developer portfolio showcasing projects with live demos and GitHub integration.",
//     image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
//     link: "/projects/portfolio",
//     technologies: ["Next.js", "TailwindCSS", "Three.js", "Framer Motion"]
//   },
//   {
//     id: "fitness",
//     title: "FitLife Pro",
//     category: "Health & Fitness",
//     description: "Fitness trainer's website with workout planning, progress tracking, and nutrition guidance.",
//     image: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg",
//     link: "/projects/fitness",
//     technologies: ["React", "Firebase", "TailwindCSS", "Chart.js"]
//   },
//   {
//     id: "restaurant",
//     title: "Spice Junction",
//     category: "Restaurant",
//     description: "Restaurant website with online ordering, table reservations, and dynamic menu management.",
//     image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
//     link: "/projects/restaurant",
//     technologies: ["Next.js", "PostgreSQL", "Prisma", "Stripe"]
//   },
//   {
//     id: "real-estate",
//     title: "Bangalore Homes",
//     category: "Real Estate",
//     description: "Property listing platform with virtual tours, mortgage calculator, and agent dashboard.",
//     image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
//     link: "/projects/real-estate",
//     technologies: ["Next.js", "Supabase", "Three.js", "Mapbox"]
//   },
//   {
//     id: "agency",
//     title: "Digital Artisans",
//     category: "Creative Agency",
//     description: "Digital marketing agency website with interactive portfolio and service showcases.",
//     image: "https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg",
//     link: "/projects/agency",
//     technologies: ["Next.js", "Framer Motion", "GSAP", "Sanity.io"]
//   },
//   {
//     id: "vet-clinic",
//     title: "PetCare Plus",
//     category: "Pet Services",
//     description: "Veterinary clinic website with appointment scheduling and pet health records.",
//     image: "https://images.pexels.com/photos/1904105/pexels-photo-1904105.jpeg",
//     link: "/projects/vet-clinic",
//     technologies: ["React", "Node.js", "MongoDB", "Socket.io"]
//   },
//   {
//     id: "events",
//     title: "Bangalore Events",
//     category: "Events",
//     description: "Event management platform with ticket booking and virtual event hosting capabilities.",
//     image: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg",
//     link: "/projects/events",
//     technologies: ["Next.js", "Supabase", "Stripe", "WebRTC"]
//   },
//   {
//     id: "education",
//     title: "EduTech Learning",
//     category: "Education",
//     description: "Online learning platform with interactive courses and student management system.",
//     image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
//     link: "/projects/education",
//     technologies: ["Next.js", "TypeScript", "MongoDB", "React Query"]
//   }
// ];

// const cardVariants = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
// };

// const PortfolioSection = () => {
//   return (
//     <section
//       id="portfolio"
//       className="py-16 md:py-24"
//       aria-label="Our portfolio projects"
//     >
//       <div className="container mx-auto px-4">
//         <motion.div
//           variants={fadeIn("up", 0.1)}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.25 }}
//           className="text-center max-w-2xl mx-auto mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4" id="portfolio-heading">
//             Our Portfolio
//           </h2>
//           <p className="text-muted-foreground text-lg">
//             Check out our latest projects and collaborations.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {portfolio.map((item) => (
//             <motion.div
//               key={item.id}
//               variants={cardVariants}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.25 }}
//               className="group relative overflow-hidden rounded-xl bg-card shadow-lg hover:shadow-xl transition-shadow duration-300"
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30 group-hover:to-black/50 transition-colors duration-300"></div>
//               <Image
//                 src={item.image}
//                 alt={item.title}
//                 width={400}
//                 height={300}
//                 className="w-full h-full object-cover"
//                 priority={portfolio.indexOf(item) < 3}
//                 onError={(e) => {
//                   const img = e.target as HTMLImageElement;
//                   img.src = "/placeholder-image.jpg";
//                 }}
//               />

//               <div className="absolute inset-0 flex flex-col justify-end p-6">
//                 <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
//                 <p className="text-sm text-white/80 mb-4">{item.description}</p>
//                       {item.category}
//                     </span>
//                     <h3 className="text-2xl font-bold">{item.title}</h3>
//                   </div>
//                   <Link
//                     href={item.link}
//                     className="bg-primary text-primary-foreground p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary/90"
//                   >
//                     <ExternalLink size={20} />
//                   </Link>
//                 </div>

//                 <p className="text-muted-foreground mb-4">{item.description}</p>

//                 <div className="flex flex-wrap gap-2">
//                   {item.technologies.map((tech, techIndex) => (
//                     <span
//                       key={techIndex}
//                       className="px-2 py-1 bg-secondary/10 text-secondary rounded-md text-sm"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 <Link
//                   href={item.link}
//                   className="mt-4 inline-flex items-center text-primary hover:text-primary/90 transition-colors"
//                 >
//                   <span className="mr-2">View Project</span>
//                   <ArrowRight size={16} />
//                 </Link>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }