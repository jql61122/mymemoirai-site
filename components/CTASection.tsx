import FadeInWhenVisible from "./FadeInWhenVisible";
import Image from "next/image";

export default function CTASection() {
  return (
    <FadeInWhenVisible delay={0.3}>
      <section className="relative py-24 px-6 text-center text-[#FAF3E7]">
        {/* Background image */}
        <Image
          src="/images/cta-bg.jpg"
          alt=""
          fill
          className="object-cover brightness-[0.5]"
        />

        {/* Foreground content */}
        <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center space-y-6">
          {/* App Icon */}
          <Image
            src="/images/mymemoir-icon.png"
            alt="MyMemoir app icon"
            width={80}
            height={80}
            className="rounded-2xl shadow-lg"
          />

          {/* Headline (Desktop only) */}
          <h2 className="hidden md:block text-2xl font-semibold mt-4">
            Get MyMemoir on your iPhone
          </h2>

          {/* Subtitle (Desktop only) */}
          <p className="hidden md:block text-lg text-[#E5DACD]">
            Scan the QR code or download directly from the App Store.
          </p>

          {/* QR Code (Desktop only) */}
          <div className="hidden md:block mt-4">
            <Image
              src="/images/qr-placeholder.png"
              alt="QR code to download MyMemoir"
              width={120}
              height={120}
              className="rounded-lg shadow-md border border-[#E5DACD]/30"
            />
          </div>

          {/* App Store Badge */}
          <a
            href="https://apps.apple.com/app/mymemoir"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4"
          >
            <Image
              src="/images/app-store-badge.svg"
              alt="Download on the App Store"
              width={180}
              height={60}
              className="mx-auto"
            />
          </a>
        </div>
      </section>
    </FadeInWhenVisible>
  );
}
