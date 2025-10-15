import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import WhyItMatters from "../components/WhyItMatters";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      {/* Fixed header stays visible as you scroll */}
      <Header />

      {/* Main content starts below header */}
      <main className="pt-[60px]">
        <HeroSection />
        <HowItWorks />	
        <div className="h-24 bg-gradient-to-b from-[#FAF7F1] to-[#FAF8F3]" />
        <Features />
        <WhyItMatters />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
