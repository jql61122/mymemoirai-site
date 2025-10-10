import Image from "next/image";
import FadeInWhenVisible from "./FadeInWhenVisible";

export default function HowItWorks() {
  const steps = [
    {
      key: "record",
      image: "/images/howitworks-record.jpg", // replace with your actual photo later
    },
    {
      key: "review",
      image: "/images/howitworks-review.jpg",
    },
    {
      key: "relive",
      image: "/images/howitworks-relive.jpg",
    },
  ];

  return (
    <section className="bg-[#FAF7F1] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-serif text-center text-gray-800 mb-12">
          {/* t("howItWorks.title") */}
          How It Works
        </h2>

        <div className="space-y-20">
          {steps.map((step, index) => (
            <FadeInWhenVisible key={step.key} delay={index * 0.2}>
              <div
                className={`flex flex-col md:flex-row items-center gap-10 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-sm">
                  <Image
                    src={step.image}
                    alt={step.key}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="w-full md:w-1/2 text-center md:text-left">
                  <p className="text-sm text-gray-500 mb-2 font-semibold">
                    {`Step ${index + 1}`}
                  </p>
                  <h3 className="text-2xl font-serif text-gray-800 mb-2">
                    {step.key === "record"
                      ? "Record"
                      : step.key === "review"
                      ? "Review"
                      : "Relive"}
                  </h3>

                  <h4 className="text-lg font-medium text-gray-600 mb-4 italic">
                    {step.key === "record"
                      ? "We’ll provide the inspiration — you provide the memories."
                      : step.key === "review"
                      ? "Your AI biographer refines your words while keeping your voice intact."
                      : "When your story feels ready, bring it to life in moments."}
                  </h4>

                  <p className="text-gray-700 leading-relaxed">
                    {step.key === "record" &&
                      "Answer customized questions in your voice. Your AI biographer works from a selection of 12+ languages, so you can tell your story the way it’s meant to be told."}

                    {step.key === "review" &&
                      "Review the beautifully organized summaries of your recordings. You can make quick edits by typing, or simply give verbal instructions to adjust tone, flow, or add details."}

                    {step.key === "relive" &&
                      "Instantly create and customize your memoir in any language and tone — seamlessly transforming your spoken memories into stories you can share with the people who matter most."}
                  </p>
                </div>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}
