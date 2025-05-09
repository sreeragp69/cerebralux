import React from "react";
import about1 from "../assets/about-1.jpeg";

const About = () => {
  return (
    <section className="flex pt-10  pb-20 justify-center items-center sm:pt-12 sm:pb-16 px-4 bg-[hsl(var(--background))] min-h-screen fade-in">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-white font-playfair">
          About Celebralux
        </h2>
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Left Image Block */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={"https://www.eduoneinternational.com/wp-content/uploads/2022/04/MBA-1-1024x683.jpg"}
              alt="Celebralux team or workspace"
              className="w-full max-h-72 object-fit rounded-2xl transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right Text Block */}
          <div className="space-y-6 text-white/90 text-base leading-relaxed">
            <p>
              Celebralux is a personal branding and marketing company that helps
              individuals and businesses establish a powerful digital presence.
              We specialize in branding, marketing strategies and social media
              management,creating impactful visuals and campaign that drive
              engagements.
            </p>
            <p>
              At Celebralux, we don’t just build and manage profiles—we craft
              legacies. As Kerala’s leading personal branding powerhouse, we
              specialize in elevating the presence of business tycoons,
              entrepreneurs, and industry leaders across Kerala and the Middle
              East.
            </p>
          </div>

          {/* Right Text Block */}
          <div className="space-y-6 text-white/90 text-base leading-relaxed">
            <p>
              Our expertise lies in strategic personal branding, PR services,
              social media management, and high-impact content production,
              ensuring our clients don’t just gain visibility but establish
              influence, authority, and a lasting legacy in their industries.
            </p>
            <p>
              With an exclusive clientele that includes some of the most
              successful business minds, we operate beyond conventional
              branding—we curate narratives, position thought leaders, and shape
              public perceptions. Our approach is data-driven, storytelling
              centric, and results-oriented, making us the go-to firm for those
              who aspire not just to be seen, but to be remembered.
            </p>
            <p className="font-semibold italic">
              At Celebralux, your brand is more than a name—it’s a movement, a
              legacy in the making. Let’s build it together.
            </p>
          </div>

          {/* Left Image Block */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={about1}
              alt="Celebralux team or workspace"
              className="w-full max-h-72 object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
