import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero";
import { ServicesSection } from "@/components/services";
import { WhyChooseSection } from "@/components/why-choose";
import { ProjectsSection } from "@/components/projects";
import { TestimonialsSection } from "@/components/testimonials";
import { FAQSection } from "@/components/faq";
import { ContactSection } from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <ProjectsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
