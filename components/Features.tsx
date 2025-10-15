import FadeInWhenVisible from "./FadeInWhenVisible";
import { Globe, Clock, ListChecks, SkipForward, Sparkles, Lock } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Globe,
      text: "Choose from 12+ languages for Q&A and memoir generation so you can record in your native language and share with loved ones in theirs.",
    },
    {
      icon: Clock,
      text: "Work entirely at your own pace. There’s no deadline, no schedule, no pressure — just your story unfolding naturally.",
    },
    {
      icon: ListChecks,
      text: "Unlimited Q&A — answer as many prompts as you like. The more detail you give, the richer your memoir becomes.",
    },
    {
      icon: SkipForward,
      text: "Don’t like a question? Skip it and instantly get a new one tailored to your journey.",
    },
    {
      icon: Sparkles,
      text: "Your AI biographer crafts each new question based on your previous answers, creating a uniquely personal experience.",
    },
    {
      icon: Lock,
      text: "Your data stays private and secure. Everything is stored locally on your device — we only access it temporarily when generating your memoir or personalizing new questions.",
    },
  ];

  return (
    <FadeInWhenVisible delay={0.3}>
      <section className="py-12 px-6 bg-[#F9F5EF] dark:bg-secondaryBackground-dark">
        <h2 className="text-4xl font-semibold text-center mb-12 text-primary dark:text-primary-dark">
          Why You’ll Love MyMemoir
        </h2>

        <ul className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 text-lg text-gray-800 dark:text-textcolor-dark">
          {features.map((f, i) => (
            <li
              key={i}
              className="flex items-center justify-start bg-[#F2EBE1] dark:bg-background-dark p-4 rounded-xl shadow-sm hover:shadow-md transition min-h-[140px]"
            >
              <div className="flex items-start gap-3">
                <f.icon className="text-primary dark:text-primary-dark w-6 h-6 mt-1 shrink-0" />
                <span className="leading-relaxed">{f.text}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </FadeInWhenVisible>
  );
}
