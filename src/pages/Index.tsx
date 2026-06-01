import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBand from "@/components/TrustBand";
import ClientsBand from "@/components/ClientsBand";
import ExpertiseCards from "@/components/ExpertiseCards";
import StatsSection from "@/components/StatsSection";
import WhyUsSection from "@/components/WhyUsSection";
import ProcessSection from "@/components/ProcessSection";
import Testimonials from "@/components/Testimonials";
import ZonesIntervention from "@/components/ZonesIntervention";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBand />
      <ClientsBand />
      <ExpertiseCards />
      <StatsSection />
      <WhyUsSection />
      <ProcessSection />
      <Testimonials />
      <ZonesIntervention />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
