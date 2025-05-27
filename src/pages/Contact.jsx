import React from "react";
import { FaRegEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="pb-20 pt-10 px-4 bg-[hsl(var(--background))] fade-in">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-white font-playfair">
          Get in Touch
        </h2>

        <div className="grid gap-12 md:grid-cols-2">
          {/* General Enquiries Block */}
          <div className="glass-effect p-5 md:p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-6 text-white">
              General Enquiries
            </h3>
            <p className="text-white/90 text-sm mb-6">
              For any media, press, general, career-based enquiries, or anything
              else you'd like to speak to us about, please send us an email:
            </p>
            <div className="bg-white/10 p-3 md:p-6 rounded-lg flex items-center gap-4">
              <FaRegEnvelope className="h-4 w-4 md:h-6 md:w-6 text-white/70" />
              <a
                href="mailto:info.celebralux@gmail.com"
                className="text-white hover:text-white/90 transition-colors"
                aria-label="Send an email to info.celebralux@gmail.com"
              >
                info.celebralux@gmail.com
              </a>
            </div>
          </div>

          {/* Personal Brand Enquiries Block */}
          <div className="glass-effect p-5 md:p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-6 text-white">
              Personal Brand Enquiries
            </h3>
            <p className="text-white/90 text-sm mb-6">
              Ready to make a global impact? Ask about our personal branding,
              PR, and production packages.
            </p>
            <a
              href="https://calendly.com/your-link/15min" // Replace with your actual link
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mb-6 bg-white/10 text-white hover:bg-white/20 border border-white/20 hover:scale-105 text-center block py-2 rounded"
              aria-label="Book a 15-minute call with a branding specialist"
            >
              Book a 15-minute call
            </a>

            <p className="text-white/90 text-center mt-4">
              Our personal branding specialists are looking forward to meeting
              you and helping craft your personalized global identity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
