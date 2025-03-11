"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    text: "Mint Tokens & NFT Collections → Directly from Aptura's dashboard.",
    delay: 0.1,
  },
  {
    text: "Swap & Trade Tokens → Execute swaps and track market movements.",
    delay: 0.2,
  },
  {
    text: "Trade with AI Agents → Set automated trading strategies and let AI execute for you.",
    delay: 0.3,
  },
  {
    text: "Copy Trade Top Wallets → Mirror profitable trades from Aptos ecosystem leaders.",
    delay: 0.4,
  },
  {
    text: "Yield Aggregation → Optimize staking and farming for maximum returns.",
    delay: 0.5,
  },
];

export default function UpcomingPlans() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-background to-card-bg">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/upcoming-gradient.png"
          alt="Background Gradient"
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay */}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-light text-center mb-16"
        >
          Upcoming
          <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent ml-3">
            Plans
          </span>
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative backdrop-blur-sm"
          >
            {/* Terminal Window */}
            <div className="bg-[#1A1B1E]/90 rounded-2xl overflow-hidden shadow-2xl border border-gray-800/50">
              {/* Terminal Header */}
              <div className="px-4 py-3 bg-[#1A1B1E]/95 border-b border-gray-800/50 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                <span className="ml-2 text-gray-400 text-sm">tyeetale</span>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: feature.delay, duration: 0.5 }}
                    className="flex items-start gap-2 mb-14 text-gray-200"
                  >
                    <span className="text-[#4D9DE0] whitespace-pre">{">"}</span>
                    <span className="text-[#98C379]">{feature.text}</span>
                  </motion.div>
                ))}

                {/* System Metrics */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mt-8 flex items-center gap-6 text-sm text-gray-400"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[#E5C07B]">󰍛</span>
                    <span>33GB</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#61AFEF]">󰘚</span>
                    <span>17%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#98C379]">󰇚</span>
                    <span>1.0 kB↓ 1.0 kB↑</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Launch Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-center mt-12"
          >
            <div className="mt-12 text-center backdrop-blur-sm bg-card/30 border border-white/10 rounded-xl p-8 shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
              <p className="text-2xl font-light mb-4 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Launching Soon
              </p>
              <p className="text-foreground/70 text-lg">
                Follow us on social media for the latest updates and
                announcements
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
