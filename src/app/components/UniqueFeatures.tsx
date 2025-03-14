"use client";

import { motion } from "framer-motion";

const uniqueFeatures = [
  {
    title: "Autonomous Newsfeed",
    description:
      "Tweets & threads on Aptos projects, DeFi, and ecosystem updates.",
    icon: "📰",
  },
  {
    title: "AI-Driven Replies",
    description:
      "Replies to tweets with real-time insights & even roasts bad takes.",
    icon: "🤖",
  },
  {
    title: "On-Chain Tracking",
    description:
      "Live wallet insights, NFT collections, real-time token prices & staking data.",
    icon: "📊",
  },
  {
    title: "DEX Intelligence",
    description:
      "Monitors liquidity pools, swap rates, and top trader positions.",
    icon: "💹",
  },
  {
    title: "AI-Generated Visuals",
    description: "Image-based insights, trending memes, and real-time charts.",
    icon: "🎨",
  },
  {
    title: "Instant Execution",
    description: "Tracks & reacts to events faster than humans can.",
    icon: "⚡",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function UniqueFeatures() {
  return (
    <section id="features-section" className="py-16 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-card-bg pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(123,44,191,0.15),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-wider mb-4 md:mb-6">
            What Makes
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent ml-2 md:ml-3">
              Aptura
            </span>
            Unique?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-light text-foreground/90 mb-4">
          Revolutionizing Aptos engagement with cutting-edge AI and unmatched precision.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {uniqueFeatures.map((feature) => (
            <motion.div key={feature.title} variants={item} className="group">
              <div className="h-full relative p-4 sm:p-6 rounded-2xl backdrop-blur-sm bg-card/30 border border-white/5 shadow-xl transition-all duration-300 hover:bg-card/40 hover:scale-[1.02] hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-light/5 rounded-2xl" />
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary-light/10 text-2xl group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="relative max-w-2xl mx-auto p-4 sm:p-6 rounded-2xl backdrop-blur-sm bg-card/30 border border-white/5 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-light/5 rounded-2xl" />
            <p className="relative text-lg sm:text-xl text-foreground/90 font-light">
              All running autonomously. No manual input. No delays.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}