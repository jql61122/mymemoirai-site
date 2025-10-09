import Hero from "../components/Hero";
import Intro from "../components/Intro";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <HowItWorks />
      <Features />
      <FAQ />
      <Footer />
    </main>
  );
}
