import FadeInWhenVisible from "./FadeInWhenVisible";
import Image from "next/image";

export default function WhyItMatters() {
  return (
    <FadeInWhenVisible delay={0.3}>
		<section className="relative py-40 px-6 text-center text-[#FAF3E7]">
		  <Image
		    src="/images/why-it-matters-bg.jpg"
		    alt=""
		    fill
		    className="object-cover brightness-[0.55]"
		  />
		  <div className="relative z-10 max-w-2xl mx-auto">
			<p className="text-2xl md:text-3xl font-serif italic leading-relaxed tracking-wide max-w-3xl mx-auto mb-6">
			  So many stories go untold.
			</p>
			<p className="text-2xl md:text-3xl font-serif italic leading-relaxed tracking-wide max-w-3xl mx-auto mb-6">
			  MyMemoir brings those stories to light and makes sharing effortless, across languages and generations.
			</p>
			<p className="text-2xl md:text-3xl font-serif italic leading-relaxed tracking-wide max-w-3xl mx-auto">
			  What begins as a simple conversation becomes a legacy that lasts.
			</p>
		  </div>
		</section>
    </FadeInWhenVisible>
  );
}
