import FadeInWhenVisible from "./FadeInWhenVisible";

export default function FAQ() {
  const questions = [
    {
      q: "Do I need to write, or can I just speak my answers?",
      a: "You can simply speak! MyMemoir automatically transcribes and organizes your words.",
    },
    {
      q: "Is my data private?",
      a: "Yes. Your recordings and transcripts remain private and secure.",
    },
    {
      q: "Can I use languages other than English?",
      a: "Absolutely. MyMemoir supports both multilingual input and output.",
    },
  ];

  return (
    <FadeInWhenVisible delay={0.4}>
      <section className="py-24 px-6 bg-background dark:bg-background-dark">
        <h2 className="text-4xl font-semibold text-center mb-16 text-primary dark:text-primary-dark">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-10">
          {questions.map((item, i) => (
            <div
              key={i}
              className="bg-secondaryBackground dark:bg-secondaryBackground-dark p-6 rounded-xl shadow-sm"
            >
              <h3 className="text-xl font-bold mb-2 text-primary dark:text-primary-dark">{item.q}</h3>
              <p className="text-textcolor dark:text-textcolor-dark text-lg">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </FadeInWhenVisible>
  );
}
