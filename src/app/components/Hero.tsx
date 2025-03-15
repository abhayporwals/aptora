"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        fontFamily: "Cinzel",
        fontWeight: 500,
        fontStyle: "normal",
        fontOpticalSizing: "auto",
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row justify-between items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl pt-20 lg:pt-0 text-center lg:text-left"
          >
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 text-black"
              style={{
                fontFamily: "Cinzel",
                fontWeight: 600,
                fontStyle: "normal",
                fontOpticalSizing: "auto",
              }}
            >
              APTURA
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl font-light mb-8 md:mb-12 leading-relaxed">
              The Autonomous AI
              <br />
              Revolutionizing Aptos
              <br />
              Engagement.
            </h2>

            <motion.button
              whileHover={{ scale: 1.02 }}
              className="px-8 sm:px-12 py-2 sm:py-3 backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20 rounded-full font-light transition-all text-base sm:text-lg mb-8 md:mb-12"
            >
              FOLLOW NOW
            </motion.button>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://twitter.com/ApturaX"
                target="_blank"
                rel="noopener noreferrer"
                className="backdrop-blur-sm bg-white/10 rounded-full p-2 sm:p-3 hover:bg-white/20 transition-all border border-white/20"
              >
                <Image
                  src="/twitter.svg"
                  alt="Twitter"
                  width={24}
                  height={24}
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://t.me/ApturaX"
                target="_blank"
                rel="noopener noreferrer"
                className="backdrop-blur-sm bg-white/10 rounded-full p-2 sm:p-3 hover:bg-white/20 transition-all border border-white/20"
              >
                <Image
                  src="/telegram.svg"
                  alt="Telegram"
                  width={24}
                  height={24}
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
              </motion.a>
            </div>
          </motion.div>

          {/* Hamburger Menu for Mobile */}
          <div className="lg:hidden fixed top-6 right-6 z-50">
            <button
              onClick={toggleMenu}
              className="p-2 backdrop-blur-sm bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-all"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Side Navigation (Hidden on Mobile, Visible on Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 10, y: -20 }}
            animate={{ opacity: 1, x: 95, y: -10 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:flex mt-32 flex-col items-center gap-16 px-8 py-16 rounded-[40px]"
          >
            <a
              href="/dashboard"
              className="text-xl text-black tracking-widest hover:text-primary transition-colors"
            >
              Dashboard 
            </a>
            <a
              href="#about-us"
              className="text-xl text-black tracking-widest hover:text-primary transition-colors"
            >
              ABOUT
            </a>
            <a
              href="#footer-section"
              className="text-xl text-black tracking-widest hover:text-primary transition-colors"
            >
              CONTACT
            </a>
          </motion.div>

          {/* Mobile Menu (Overlay) */}
          {isMenuOpen && (
            <div className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute top-0 right-0 h-full w-64 bg-white/10 backdrop-blur-sm border-l border-white/20"
              >
                <button
                  onClick={toggleMenu}
                  className="absolute top-6 right-6 p-2 backdrop-blur-sm bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-all"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <div className="flex flex-col gap-8 p-8 mt-16 mr-4">
                  <a
                    href="#features-section"
                    className="text-xl text-white tracking-widest hover:text-primary transition-colors"
                    onClick={toggleMenu}
                  >
                    FEATURES
                  </a>
                  <a
                    href="#about-us"
                    className="text-xl text-white tracking-widest hover:text-primary transition-colors"
                    onClick={toggleMenu}
                  >
                    ABOUT
                  </a>
                  <a
                    href="#footer-section"
                    className="text-xl text-white tracking-widest hover:text-primary transition-colors"
                    onClick={toggleMenu}
                  >
                    CONTACT
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}