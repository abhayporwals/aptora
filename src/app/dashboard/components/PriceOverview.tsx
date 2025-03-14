"use client";

import { motion } from "framer-motion";
import { useDashboardData } from "../hooks/useDashboardData";

export default function PriceOverview() {
  const { aptPrice, isLoading, error } = useDashboardData();

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 rounded-2xl backdrop-blur-sm bg-card/30 border border-white/5 shadow-xl h-full"
      >
        <h2 className="text-2xl font-light mb-6">
          <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            Latest News
          </span>
        </h2>
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-24 bg-card/20 rounded-xl" />
          ))}
        </div>
      </motion.div>
    );
  }

  if (error) {
    return (
      <div className="p-6 rounded-2xl backdrop-blur-sm bg-card/30 border border-white/5 shadow-xl">
        <p className="text-red-500">Error loading Aptos price: {error}</p>
      </div>
    );
  }

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
          <div className="text-2xl font-semibold text-primary">
            ${aptPrice?.aptos?.usd?.toFixed(2) ?? "N/A"}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-card/20 border border-white/5">
          <div className="text-sm text-foreground/60 mb-2">USD 24h Volume</div>
          <div className="text-2xl font-semibold text-primary">
            ${aptPrice?.aptos?.usd_24h_vol ? aptPrice.aptos.usd_24h_vol.toFixed(2) : "N/A"}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-card/20 border border-white/5">
          <div className="text-sm text-foreground/60 mb-2">Market Cap</div>
          <div className="text-2xl font-semibold text-primary">
            ${aptPrice?.aptos?.usd_market_cap ? aptPrice.aptos.usd_market_cap.toFixed(2) : "N/A"}
          </div>
        </div>
      </div>

      {/* Price Chart will go here */}
      <div className="mt-6 h-[300px] bg-card/20 rounded-xl border border-white/5"></div>
    </motion.div>
  );
}
