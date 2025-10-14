import Image from "next/image";
import FadeInWhenVisible from "./FadeInWhenVisible";

export default function HowItWorks() {
  const steps = [
    {
      key: "record",
      image: "/images/iphone_recording.jpg", 
    },
    {
      key: "review",
      image: "/images/iphone_editing.jpg",
    },
    {
      key: "relive",
      image: "/images/iphone_memoir.jpg",
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
                className={`${
                  index % 2 === 0 ? "bg-white/70" : "bg-[#F9F6F0]"
                } border border-gray-200 rounded-2xl shadow-sm p-8 hover:shadow-md transition-shadow duration-300`}
              >
                <div
                  className={`flex flex-col md:flex-row items-center gap-10 ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="w-full md:w-1/2 flex justify-center">
                    <div className="max-w-[260px] md:max-w-[320px] rounded-3xl overflow-hidden shadow-md">
                      <Image
                        src={step.image}
                        alt={step.key}
                        width={320}
                        height={640}
                        className="w-full h-auto rounded-3xl"
                      />
                    </div>
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
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}
