import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center h-[80vh] bg-[#FAF7F1] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-background.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#204B3D]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl px-6">
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">
          Share your story with the ones who matter most.
        </h1>
        <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
          Your AI biographer helps turn the memories that have shaped your life into a memoir to be treasured by generations to come, all in your own voice and language.
        </p>

        {/* App Store button! */}
        <div className="flex justify-center">
          <a
            href="https://apps.apple.com/your-app-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/app-store-badge.svg"
              alt="Download on the App Store"
              width={160}
              height={54}
            />
          </a>
        </div>
      </div> 
    </section>
  );
}
