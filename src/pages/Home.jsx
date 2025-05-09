import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="flex justify-center items-center  sm:pb-24 bg-[hsl(var(--background))]  h-screen">
      <div className="max-w-7xl mx-auto text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 2 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-4xl sm:text-6xl leading-11 md:leading-16 font-bold mb-6 text-[hsl(var(--foreground))] font-playfair"
        >
          Kerala's Leading Personal
          <br className="hidden sm:block" /> Branding Powerhouse
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-lg sm:text-xl text-[hsl(var(--foreground)/0.9)] max-w-3xl mx-auto mb-8"
        >
          We help individuals, entrepreneurs, influencers, and thought leaders
          build strong digital identities — both online and offline — by telling
          their stories in the most engaging, impactful ways.
        </motion.p>
        <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded-sm sm:w-96 dark:bg-gray-700">
          <svg
            class="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
        <a
          href="https://wa.me/918848075299?text=Hi%2C%20I%20have%20an%20enquiry%20about%20Celebralux"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
            className="px-6 py-3 cursor-pointer rounded-md text-[hsl(var(--foreground))] bg-white/10 hover:bg-white/20 transition"
          >
            Build Your Legacy
          </motion.button>
        </a>
      </div>
    </section>
  );
};

export default Home;
