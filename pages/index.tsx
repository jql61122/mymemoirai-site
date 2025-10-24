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

        {/* Canonical URL */}
        <link rel="canonical" href="https://mymemoirai.com/" />

        {/* Open Graph (Facebook, iMessage, etc.) */}
        <meta property="og:title" content="MyMemoir – Share Your Story" />
        <meta
          property="og:description"
          content="MyMemoir helps you capture and share your life stories effortlessly across generations."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mymemoirai.com/" />
        <meta property="og:image" content="/og-image.jpg" />

        {/* Twitter card (optional but recommended) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MyMemoir – Share Your Story" />
        <meta
          name="twitter:description"
          content="MyMemoir helps you capture and share your life stories effortlessly across generations."
        />
        <meta name="twitter:image" content="/og-image.jpg" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "MyMemoir",
              operatingSystem: "iOS",
              applicationCategory: "LifestyleApplication",
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
              description:
                "MyMemoir helps you record and share your life stories effortlessly across generations using AI.",
              url: "https://mymemoirai.com",
              logo: "https://mymemoirai.com/favicon.ico",
              author: { "@type": "Organization", name: "MyMemoir" },
            }),
          }}
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
