import React from "react";
import about1 from "../assets/about-1.webp";

const About = () => {
  return (
    <section className="flex pt-10 pb-20 justify-center items-center sm:pt-12 sm:pb-16 px-4 bg-[hsl(var(--background))] min-h-screen fade-in">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-white font-playfair">
          About Us
        </h2>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="rounded-md overflow-hidden shadow-lg">
            <img
              src={about1}
              alt="Celebralux team"
              className="w-full max-h-72 object-cover rounded-md transition-transform duration-300 hover:scale-105"
              width="600"
              height="400"
              loading="lazy"
            />
          </div>

          <div className="space-y-6 text-white/90 text-base leading-relaxed">
            <p>
              We specialize in transforming individuals and businesses into
              unforgettable brands. As a premium personal branding and social
              media management company, we combine strategy, storytelling, and
              standout visuals to elevate your digital presence and drive real
              impact.
            </p>
            <p>
              Founded with a vision to empower thought leaders, entrepreneurs,
              and enterprises, we craft tailor-made branding journeys that
              resonate with your audience and reflect your core values. From
              magnetic content and high-conversion campaigns to consistent
              social media growth, we ensure your online presence speaks with
              clarity, creativity, and confidence.
            </p>
            <p>
              Whether you’re building a brand from scratch or scaling your
              influence, our team of strategists, designers, and digital
              marketers are here to bring your vision to life—boldly and
              brilliantly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
