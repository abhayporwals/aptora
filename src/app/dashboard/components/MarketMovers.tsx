"use client";

import { motion } from "framer-motion";
import { useDashboardData } from "../hooks/useDashboardData";

export default function MarketMovers() {
  const { topDapps, isLoading, error } = useDashboardData();

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 rounded-2xl backdrop-blur-sm bg-card/30 border border-white/5 shadow-xl"
      >
        <h2 className="text-2xl font-light mb-6">
          <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            Market Movers
          </span>
        </h2>
        <div className="animate-pulse space-y-4">
          {[1, 2].map((i) => (
            <div key={i} className="h-32 bg-card/20 rounded-xl" />
          ))}
        </div>
      </motion.div>
    );
  }

  if (error) {
    return (
      <div className="p-6 rounded-2xl backdrop-blur-sm bg-card/30 border border-white/5 shadow-xl">
        <p className="text-red-500">Error loading market data: {error}</p>
      </div>
    );
  }

  const sortedDapps = [...topDapps].sort((a, b) => b.change_24h - a.change_24h);
  const gainers = sortedDapps.filter((dapp) => dapp.change_24h > 0);
  const losers = sortedDapps.filter((dapp) => dapp.change_24h <= 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 rounded-2xl backdrop-blur-sm bg-card/30 border border-white/5 shadow-xl"
    >
      <h2 className="text-2xl font-light mb-6">
        <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
          Market Movers
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-light mb-4 text-foreground/70">
            Top Gainers
          </h3>
          {gainers.slice(0, 3).map((dapp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 rounded-xl bg-card/20 border border-white/5 mb-2"
            >
              <div className="flex justify-between items-center">
                <span className="text-foreground/90">{dapp.name}</span>
                <div className="text-right">
                  <div className="text-primary">
                    $
                    {dapp.balanceUSD.toLocaleString(undefined, {
                      maximumFractionDigits: 2,
                    })}
                  </div>
                  <div className="text-green-500 text-sm">
                    +{dapp.change_24h.toFixed(2)}%
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div>
          <h3 className="text-lg font-light mb-4 text-foreground/70">
            Top Losers
          </h3>
          {losers.slice(0, 3).map((dapp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 rounded-xl bg-card/20 border border-white/5 mb-2"
            >
              <div className="flex justify-between items-center">
                <span className="text-foreground/90">{dapp.name}</span>
                <div className="text-right">
                  <div className="text-primary">
                    $
                    {dapp.balanceUSD.toLocaleString(undefined, {
                      maximumFractionDigits: 2,
                    })}
                  </div>
                  <div className="text-red-500 text-sm">
                    {dapp.change_24h.toFixed(2)}%
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
