import Head from "next/head";
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
      <Head>
        <title>MyMemoir – Share Your Story</title>
        <meta
          name="description"
          content="MyMemoir helps you capture and share your life stories effortlessly across generations."
        />
      </Head>

      <Header />
      <main className="pt-[60px]">
        <HeroSection />
        <HowItWorks />
        <Features />
        <WhyItMatters />
        <Footer />
      </main>
    </>
  );
}
