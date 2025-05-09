import { FaRegEnvelope } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { LuGlobe } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "About", href: "about" },
  { label: "Services", href: "services" },
  { label: "Contact", href: "contact" },

];

const Footer = () => {
  return (
    <motion.footer className="py-16 px-4 bg-black text-[hsl(var(--foreground))]">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-playfair">Celebralux</h3>
            <div className="flex items-start gap-3 mb-4">
              <FaRegEnvelope className="h-5 w-5 mt-0.5 text-[hsl(var(--foreground)/0.7)]" />
              <p>info.celebralux@gmail.com</p>
            </div>
            <div className="flex items-start gap-3 mb-4">
              <LuGlobe className="h-5 w-5 mt-0.5 text-[hsl(var(--foreground)/0.7)]" />
              <p>Kozhikode, Kerala</p>
            </div>
            <div className="flex items-start gap-3">
              <IoCallOutline className="h-5 w-5 mt-0.5 text-[hsl(var(--foreground)/0.7)]" />
              <p>+91 7994392148</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-playfair">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="hover:text-[hsl(var(--foreground)/0.8)] transition-colors flex items-center gap-2"
                  >
                    <span className="h-1.5 w-1.5 bg-[hsl(var(--foreground)/0.5)] rounded-full"></span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About & Social */}
          <div className="lg:col-span-2">
            <p className="mb-6 text-[hsl(var(--foreground)/0.8)]">
              Celebralux LLP is Kerala's leading personal branding powerhouse,
              helping individuals and businesses establish strong digital
              identities.
            </p>
            <div className="flex gap-6 mt-6">
              <a
                href="https://www.instagram.com/celebra.lux?igsh=MzMzN2N2b2ZranBz"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/celebralux/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <FiLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[hsl(var(--foreground)/0.2)] mt-12 pt-8 text-sm text-[hsl(var(--foreground)/0.7)]">
          <p>
          Celebralux Public Relations © 2025 | All Rights Reserved | Terms &
            Conditions | Privacy Policy
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
