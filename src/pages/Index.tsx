import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import MethodologySection from "@/components/MethodologySection";
import CaseStudies from "@/components/CaseStudiesSection";
import KaizenGallery from "@/components/KaizenGallery";
import ClientsBand from "@/components/ClientsBand";
import FounderSection from "@/components/FounderSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ProgramsSection />
        <MethodologySection />
        <KaizenGallery />
        <CaseStudies />
        <ClientsBand />
        <FounderSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
