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
                {/* Image */}
                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-sm">
                  <Image
                    src={step.image}
                    alt={step.key}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <p className="text-sm text-gray-500 mb-2 font-semibold">
                    {`Step ${index + 1}`}
                  </p>
                  <h3 className="text-2xl font-serif text-gray-800 mb-4">
                    {step.key === "record"
                      ? "Record"
                      : step.key === "review"
                      ? "Review"
                      : "Relive"}
                  </h3>

                  <p className="text-gray-700 leading-relaxed">
                    {step.key === "record" &&
                      "You’ll be prompted with one question at a time to inspire your storytelling. Each question adapts based on your previous responses. Choose from any of 12+ languages so you can tell your story in the way that feels natural to you."}

                    {step.key === "review" &&
                      "Your AI biographer organizes your recordings into clear, readable text while preserving your tone and personality. Edit by typing or simply speak new instructions to refine wording, tone, or flow."}

                    {step.key === "relive" &&
                      "Once you’ve answered enough questions, instantly generate your memoir in any language or tone. Read it in-app or export to PDF to share seamlessly with the people who matter most."}
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
