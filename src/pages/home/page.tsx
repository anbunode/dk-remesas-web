import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StepsSection from './components/StepsSection';
import WhyDKSection from './components/WhyDKSection';
import CoverageSection from './components/CoverageSection';
import WhatsAppSection from './components/WhatsAppSection';
import PaymentsSection from './components/PaymentsSection';
import SecuritySection from './components/SecuritySection';
import FAQSection from './components/FAQSection';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <StepsSection />
      <WhyDKSection />
      <CoverageSection />
      <WhatsAppSection />
      <PaymentsSection />
      <SecuritySection />
      <FAQSection />
      <CTABanner />
      <Footer />
    </main>
  );
}