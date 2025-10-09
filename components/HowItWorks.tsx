import Image from "next/image";
import FadeInWhenVisible from "./FadeInWhenVisible";

export default function HowItWorks() {
  const steps = [
    {
      title: "Answer prompts in your own voice",
      desc: "Speak freely — the app transcribes and summarizes your responses.",
      image: "/step1-placeholder.jpg",
    },
    {
      title: "Reflect and refine",
      desc: "Review your words and edit them at your own pace.",
      image: "/step2-placeholder.jpg",
    },
    {
      title: "Receive your complete memoir",
      desc: "A personalized book, written in your tone and style.",
      image: "/step3-placeholder.jpg",
    },
  ];

  return (
    <FadeInWhenVisible delay={0.2}>
      <section className="py-24 px-6 bg-background dark:bg-background-dark">
        <h2 className="text-4xl font-semibold text-center text-primary dark:text-primary-dark mb-16">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {steps.map((s, i) => (
            <div key={i} className="bg-secondaryBackground dark:bg-secondaryBackground-dark rounded-2xl shadow-sm overflow-hidden">
              <div className="relative h-48">
                <Image src={s.image} alt={s.title} fill style={{ objectFit: "cover" }} />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-primary dark:text-primary-dark">
                  {s.title}
                </h3>
                <p className="text-textcolor dark:text-textcolor-dark text-base">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </FadeInWhenVisible>
  );
}
