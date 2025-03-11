"use client";

import { motion } from "framer-motion";

export default function PriceOverview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 rounded-2xl backdrop-blur-sm bg-card/30 border border-white/5 shadow-xl"
    >
      <h2 className="text-2xl font-light mb-6">
        <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
          Aptos Price
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 rounded-xl bg-card/20 border border-white/5">
          <div className="text-sm text-foreground/60 mb-2">Current Price</div>
          <div className="text-2xl font-semibold text-primary">$8.92</div>
          <div className="text-sm text-green-500">+2.5%</div>
        </div>

        <div className="p-4 rounded-xl bg-card/20 border border-white/5">
          <div className="text-sm text-foreground/60 mb-2">24h Volume</div>
          <div className="text-2xl font-semibold text-primary">$142.5M</div>
          <div className="text-sm text-foreground/60">+12.3%</div>
        </div>

        <div className="p-4 rounded-xl bg-card/20 border border-white/5">
          <div className="text-sm text-foreground/60 mb-2">Market Cap</div>
          <div className="text-2xl font-semibold text-primary">$2.1B</div>
          <div className="text-sm text-foreground/60">Rank #32</div>
        </div>
      </div>

      {/* Price Chart will go here */}
      <div className="mt-6 h-[300px] bg-card/20 rounded-xl border border-white/5"></div>
    </motion.div>
  );
} 