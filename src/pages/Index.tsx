/**
 * ============================================================
 * Index Page — Natural Love
 * 
 * Página principal que ensambla todas las secciones.
 * Cada sección es un componente independiente.
 * Para reordenar secciones, mover los componentes abajo.
 * ============================================================
 */

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import DifferentialsSection from "@/components/DifferentialsSection";
import ProductsSection from "@/components/ProductsSection";
import PresentationsSection from "@/components/PresentationsSection";
import ProfessionalSection from "@/components/ProfessionalSection";
import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative z-10 min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <DifferentialsSection />
        <ProductsSection />
        <PresentationsSection />
        <ProfessionalSection />
        <AboutSection />
        <BenefitsSection />
        <TrustSignalsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
