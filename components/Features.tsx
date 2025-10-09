import FadeInWhenVisible from "./FadeInWhenVisible";

export default function Features() {
  const features = [
    "Supports multiple languages for input and output",
    "Unlimited Q&A — answer as many prompts as you like",
    "Work at your own pace — no schedule or pressure",
    "AI assistance that preserves your unique voice",
    "Private and secure — your words stay yours",
  ];

  return (
    <FadeInWhenVisible delay={0.3}>
      <section className="py-24 px-6 bg-secondaryBackground dark:bg-secondaryBackground-dark">
        <h2 className="text-4xl font-semibold text-center mb-16 text-primary dark:text-primary-dark">
          Key Features
        </h2>
        <ul className="max-w-4xl mx-auto grid md:grid-cols-2 gap-y-6 gap-x-8 text-lg text-textcolor dark:text-textcolor-dark">
          {features.map((f, i) => (
            <li
              key={i}
              className="flex items-start gap-3 bg-background dark:bg-background-dark p-4 rounded-xl shadow-sm"
            >
              <span className="text-primary dark:text-primary-dark text-2xl">•</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </section>
    </FadeInWhenVisible>
  );
}
