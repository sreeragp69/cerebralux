
import { motion } from "framer-motion";

const Home = () => {
  
  return (
    <section className="flex justify-center items-center sm:pb-24 bg-[hsl(var(--background))] h-screen">
      <div className="max-w-7xl mx-auto text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 2 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-6xl leading-11 md:leading-16 font-bold mb-6 text-[hsl(var(--foreground))] font-playfair"
        >
          Kerala's Leading Personal
          <br className="hidden sm:block" /> Branding Powerhouse
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-lg sm:text-xl text-[hsl(var(--foreground)/0.9)] max-w-3xl mx-auto mb-8"
        >
          We help individuals, entrepreneurs, influencers, and thought leaders
          build strong digital identities — both online and offline — by telling
          their stories in the most engaging, impactful ways.
        </motion.p>
        <a
          href="https://wa.me/918848075299?text=Hi%2C%20I%20have%20an%20enquiry%20about%20Celebralux"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
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
