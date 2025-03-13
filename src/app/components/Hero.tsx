"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden"
    style={{ fontFamily:"Cinzel", fontWeight:500, fontStyle:"normal", fontOpticalSizing:"auto"}}
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
        <div className="container mx-auto px-8 md:px-16 flex justify-between items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl pt-20"
          >
            <h1 className="text-6xl font-light mb-6 text-black"style={{ fontFamily:"Cinzel", fontWeight:600, fontStyle:"normal", fontOpticalSizing:"auto"}}
            >APTURA</h1>
            <h2 className="text-xl font-light mb-12 leading-relaxed"     
            >
              The Autonomous AI
              <br />
              Revolutionizing Aptos
              <br />
              Engagement.
            </h2>

            <motion.button
              whileHover={{ scale: 1.02 }}
              className="px-12 py-3 backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20 rounded-full font-light transition-all text-lg mb-12"
            >
              FOLLOW NOW
            </motion.button>

            {/* Social Links */}
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://twitter.com/ApturaX"
                target="_blank"
                rel="noopener noreferrer"
                className="backdrop-blur-sm bg-white/10 rounded-full p-3 hover:bg-white/20 transition-all border border-white/20"
              >
                <Image
                  src="/twitter.svg"
                  alt="Twitter"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://t.me/ApturaX"
                target="_blank"
                rel="noopener noreferrer"
                className="backdrop-blur-sm bg-white/10 rounded-full p-3 hover:bg-white/20 transition-all border border-white/20"
              >
                <Image
                  src="/telegram.svg"
                  alt="Telegram"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </motion.a>
            </div>
          </motion.div>

          {/* Side Navigation */}
          <motion.div
            initial={{ opacity: 0, x: 10, y: -20 }} 
            animate={{ opacity: 1, x: 95, y: -10 }} 
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative mt-32 flex flex-col items-center gap-16 px-8 py-16 rounded-[40px]"
          >
            <a
              href="#features-section"
              
              className="text-xl text-black tracking-widest hover:text-primary transition-colors"
            >
              FEATURES
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
        </div>
      </div>
    </section>
  );
}
