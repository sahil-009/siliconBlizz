import dynamic from 'next/dynamic';

// Import all components as dynamic to handle client components
const HeroSection = dynamic(() => import('@/components/sections/HeroSection'));
const ClientsSection = dynamic(() => import('@/components/sections/ClientsSection'));
const ServiceSection = dynamic(() => import('@/components/sections/ServiceSection'));
const PricingSection = dynamic(() => import('@/components/sections/PricingSection'));
// PortfolioSection is currently commented out
const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection'));
const ContactSection = dynamic(() => import('@/components/sections/ContactSection'));

export default function Home() {
  return (
    <>
      <HeroSection />
      <ClientsSection />
      <ServiceSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}