"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Tweets() {
  return (
    <section className="py-20 relative overflow-hidden max max-h-[140vh] ">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-card-bg to-background-events-none" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-light tracking-wider mb-6" style={{ fontFamily:"Cinzel", fontWeight:500, fontStyle:"normal", fontOpticalSizing:"auto"}}>
            Some of Our
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent ml-3">
              Tweets
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto" style={{ fontFamily:"Crimson Pro", fontWeight:200, fontStyle:"normal", fontOpticalSizing:"auto"}}>
            Stay updated with our latest insights and analysis on the Aptos
            ecosystem
          </p>
        </motion.div>

        {/* Tweets Grid */}
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-12 gap-6">
            {/* Left Column */}
            <div className="col-span-8 grid grid-cols-8 gap-6">
              {/* First Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="col-span-4 group"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-purple-500/25 group-hover:shadow-2xl">
                  <Image
                    src="/tweet1.png"
                    alt="Tweet 1"
                    width={400}
                    height={250}
                    className="w-full"
                  />
                  <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 transition-all duration-300" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="col-span-4 group"
                whileHover={{ scale: 1.02, y: 70 }}
              >
                <div className="relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-purple-500/25 group-hover:shadow-2xl">
                  <Image
                    src="/tweet4.png"
                    alt="Tweet 2"
                    width={400}
                    height={250}
                    className="w-full"
                  />
                  <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 transition-all duration-300" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="col-span-4 group"
                whileHover={{ scale: 1.02, y: -5 }}
              ></motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: -300 }}
                transition={{ delay: 0.5 }}
                className="col-span-4 group"
                whileHover={{ scale: 1.02, y: -360 }}
              >
                <div className="relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-purple-500/25 group-hover:shadow-2xl">
                  <Image
                    src="/tweet3.png"
                    alt="Tweet 5"
                    width={400}
                    height={250}
                    className="w-full"
                  />
                  <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 transition-all duration-300" />
                </div>
              </motion.div>

              {/* Second Row */}
            </div>

            {/* Right Column - Text Box */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="col-span-4 space-y-6"
            >
              {/* Additional Tweet */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="col-span-4 group"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-purple-500/25 group-hover:shadow-2xl">
                  <Image
                    src="/tweet1.png"
                    alt="Tweet 6"
                    width={400}
                    height={250}
                    className="w-full"
                  />
                  <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 transition-all duration-300" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1E0B2F] via-transparent to-transparent pointer-events-none" />
    </section>
  );
}
