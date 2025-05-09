import React, { useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { Link, Links } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import celebraluxLogo from "../assets/celebralux-logo.png";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "Home", href: "" },
    { title: "About Us", href: "about" },
    { title: "Vision", href: "vision" },
    { title: "Services", href: "services" },
    { title: "Contact", href: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[hsl(var(--background)/0.95)] backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center ">
          <Link to={"/"}>
            <div className="text-xl  font-bold text-[hsl(var(--foreground))] font-playfair h-16 flex justify-between items-center gap-2">
              <img src={celebraluxLogo} alt="" className="h-16 " />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {menuItems.map((item) => (
              <motion.div
                key={item.title}
                whileHover="hover"
                className="relative group"
              >
                <Link
                  to={item.href}
                  className="text-[hsl(var(--foreground)/0.9)] hover:text-[hsl(var(--foreground))] px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.title}
                </Link>
                <motion.div
                  variants={{
                    hover: {
                      width: "100%",
                      opacity: 1,
                      transition: { duration: 0.3 },
                    },
                    initial: {
                      width: 0,
                      opacity: 0,
                    },
                  }}
                  initial="initial"
                  className="absolute left-3 right-3 bottom-1 h-[2px] bg-[hsl(var(--foreground))]"
                />
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[hsl(var(--foreground))] rounded-md focus:outline-none focus:ring-1 focus:ring-white"
            >
              {isOpen ? (
                <RxCross2 className="h-6 w-6" />
              ) : (
                <RxHamburgerMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-2 pt-2 pb-3 space-y-1"
          >
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-[hsl(var(--foreground)/0.9)] hover:text-[hsl(var(--foreground))]"
              >
                {item.title}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
