import FadeInWhenVisible from "./FadeInWhenVisible";
import Image from "next/image";

export default function WhyItMatters() {
  return (
    <FadeInWhenVisible delay={0.3}>
      <section 
      	id="why-it-matters"
      	className="relative py-40 px-6 text-center text-[#FAF3E7]"
      >
        {/* Background */}
        <Image
          src="/images/why-it-matters-bg.jpg"
          alt=""
          fill
          className="object-cover brightness-[0.55]"
        />

        {/* Overlay gradient to subtly separate CTA */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent" />

        {/* Foreground content */}
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          {/* Quote area */}
          <div className="mb-12">
            <p className="text-2xl md:text-3xl font-serif italic leading-relaxed tracking-wide mb-6">
              So many stories go untold.
            </p>
            <p className="text-2xl md:text-3xl font-serif italic leading-relaxed tracking-wide mb-6">
              MyMemoir brings those stories to light and makes sharing effortless,
              across languages and generations.
            </p>
            <p className="text-2xl md:text-3xl font-serif italic leading-relaxed tracking-wide">
              What begins as a simple conversation becomes a legacy that lasts.
            </p>
          </div>

          {/* Divider */}
          <div className="h-px w-24 bg-[#FAF3E7]/50 mb-8"></div>

          {/* CTA section */}
          <FadeInWhenVisible delay={0.6}>
            <div className="flex flex-col items-center space-y-3">
              <p className="text-xl md:text-2xl font-serif italic text-[#FAF3E7]">
                Leave your legacy today.
              </p>
              <p className="text-sm text-[#FAF3E7] mb-3">
                Scan the code to download the iOS App. 
              </p>

             {/* Desktop QR */}
              <div className="hidden md:block py-4">
                <Image
                  src="/images/qr-placeholder.jpg"
                  alt="QR code to download MyMemoir"
                  width={120}
                  height={120}
                  className="rounded-lg shadow-md border border-[#E5DACD]/30"
                />
              </div>

				{/* Mobile App Store badge */}
				<div className="block md:hidden py-6">
				  <a
				    href="https://apps.apple.com/app/mymemoir"
				    target="_blank"
				    rel="noopener noreferrer"
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

            </div>
          </FadeInWhenVisible>
        </div>
      </section>
    </FadeInWhenVisible>
  );
}
