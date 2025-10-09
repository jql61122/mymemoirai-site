import Image from "next/image";
import FadeInWhenVisible from "./FadeInWhenVisible";

export default function Hero() {
  return (
    <FadeInWhenVisible>
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-background dark:bg-background-dark relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-10 dark:opacity-20">
          <Image
            src="/hero-placeholder.jpg"
            alt=""
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        <h1 className="text-6xl md:text-7xl font-extrabold mb-6 text-primary dark:text-primary-dark tracking-tight">
          MyMemoir
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-10 leading-relaxed text-textcolor dark:text-textcolor-dark">
          Capture your life story — beautifully, effortlessly, and in your own words.
        </p>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center"
        >
          <Image
            src="/appstore-badge.svg"
            alt="Download on the App Store"
            width={200}
            height={66}
            className="transition-transform hover:scale-105"
          />
        </a>
      </section>
    </FadeInWhenVisible>
  );
}
