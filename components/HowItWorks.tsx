import { useState, useRef, useEffect } from "react";
import Image from "next/image";
// If you didn’t install lucide-react, use unicode arrows instead (see note below).
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      key: "record",
      title: "Record",
      text:
        "You’ll be prompted with one question at a time to inspire your storytelling. Each question adapts based on your previous responses. Choose from any of 12+ languages so you can tell your story in the way that feels natural to you.",
      image: "/images/iphone_recording.jpg",
    },
    {
      key: "review",
      title: "Review",
      text:
        "Your AI biographer organizes your recordings into clear, readable text while preserving your tone and personality. Edit by typing or simply speak new instructions to refine wording, tone, or flow.",
      image: "/images/iphone_editing.jpg",
    },
    {
      key: "relive",
      title: "Relive",
      text:
        "Once you’ve answered enough questions, instantly generate your memoir in any language or tone. Read it in-app or export to PDF to share seamlessly with the people who matter most.",
      image: "/images/iphone_memoir.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollTo = (index: number) => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.clientWidth;
    scrollRef.current.scrollTo({ left: width * index, behavior: "smooth" });
  };

  // keep slide alignment correct after resizes
  useEffect(() => {
    const onResize = () => scrollTo(current);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [current]);

  // sync state when user swipes
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.clientWidth;
    const index = Math.round(scrollRef.current.scrollLeft / width);
    if (index !== current) setCurrent(index);
  };

  // arrow handlers
  const prev = () => {
    if (current === 0) return;
    const nextIndex = current - 1;
    setCurrent(nextIndex);
    scrollTo(nextIndex);
  };
  const next = () => {
    if (current === steps.length - 1) return;
    const nextIndex = current + 1;
    setCurrent(nextIndex);
    scrollTo(nextIndex);
  };

  return (
    <section className="bg-[#FAF7F1] py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-serif text-gray-800 mb-10">How It Works</h2>

        {/* Viewport wrapper constrains height and hides overflow */}
        <div className="relative overflow-hidden rounded-2xl">
          {/* Slider: one full-width slide at a time, fixed height to prevent reflow */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide"
          >
            {steps.map((step, index) => (
              <div
                key={step.key}
                /* FIX 1: Use a fixed height instead of min-height to stop first-slide growth.
                   Tweak these numbers to taste. */
                  className={`flex-shrink-0 w-full min-h-[520px] md:min-h-[480px]
                              snap-center border border-gray-200 shadow-sm rounded-2xl 
                              p-6 md:p-8 bg-[#F2EBE1]`}

              >
                {/* FIX 2: Use grid to vertically center both columns reliably */}
                  <div className="grid grid-cols-1 md:grid-cols-[0.4fr_0.6fr] h-full items-center gap-6 md:gap-8">
                    <div className="flex justify-center">
                      <div className="w-[220px] md:w-[300px] rounded-3xl overflow-hidden shadow-md">
                        <Image
                          src={step.image}
                          alt={step.title}
                          width={512}
                          height={768}
                          className="w-full h-auto rounded-3xl object-contain"
                          priority={index === 0}
                        />
                      </div>
                    </div>

                  {/* Text column */}
                  <div className="text-center md:text-left md:ml-4 lg:ml-6 md:max-w-[440px] lg:max-w-[480px] xl:max-w-[500px]">
                    <p className="text-sm text-gray-600 mb-2 font-semibold">
                      Step {index + 1}
                    </p>
                    <h3 className="text-2xl font-serif text-gray-800 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{step.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Nav arrows (desktop) */}
          <button
            onClick={prev}
            aria-label="Previous"
            className={`hidden md:flex items-center justify-center absolute top-1/2 left-4 -translate-y-1/2 
                        bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition 
                        ${current === 0 ? "opacity-40 cursor-not-allowed" : ""}`}
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className={`hidden md:flex items-center justify-center absolute top-1/2 right-4 -translate-y-1/2 
                        bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition 
                        ${current === steps.length - 1 ? "opacity-40 cursor-not-allowed" : ""}`}
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrent(i);
                scrollTo(i);
              }}
              aria-label={`Go to step ${i + 1}`}
              className={`w-3 h-3 rounded-full transition ${
                current === i ? "bg-gray-800" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
