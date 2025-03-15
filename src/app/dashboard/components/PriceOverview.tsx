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
        className="glass-card p-6 rounded-2xl h-full"
      >
        <div className="animate-pulse space-y-4">
          <div className="h-8 w-48 bg-card/20 rounded-lg" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-24 bg-card/20 rounded-xl" />
            ))}
          </div>
          <div className="h-[300px] bg-card/20 rounded-xl" />
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

  if (!aptPrice?.aptos) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-6 rounded-2xl"
    >
      <h2 className="text-2xl font-light mb-6 gradient-text">
        Aptos Price Overview
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-4 rounded-xl"
        >
          <div className="stat-label">Current Price</div>
          <div className="stat-value">${aptPrice.aptos.usd?.toFixed(2) ?? "N/A"}</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-4 rounded-xl"
        >
          <div className="stat-label">24h Volume</div>
          <div className="stat-value">
            ${aptPrice.aptos.usd_24h_vol?.toLocaleString(undefined, { maximumFractionDigits: 0 }) ?? "N/A"}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-4 rounded-xl"
        >
          <div className="stat-label">Market Cap</div>
          <div className="stat-value">
            ${aptPrice.aptos.usd_market_cap?.toLocaleString(undefined, { maximumFractionDigits: 0 }) ?? "N/A"}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-6 h-[300px] glass-card rounded-xl p-4"
      >
        {/* Chart placeholder */}
        <div className="h-full flex items-center justify-center text-foreground/60">
          Price Chart Coming Soon
        </div>
      </motion.div>
    </motion.div>
  );
}
