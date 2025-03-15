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
        className="glass-card p-6 rounded-2xl"
      >
        <div className="animate-pulse space-y-4">
          <div className="h-8 w-40 bg-card/20 rounded-lg" />
          {[1, 2].map((i) => (
            <div key={i} className="h-32 bg-card/20 rounded-xl" />
          ))}
        </div>
      </motion.div>
    );
  }

  if (!topDapps?.length) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-6 rounded-2xl"
    >
      <h2 className="text-2xl font-light mb-6 gradient-text">Market Movers</h2>

      <div className="space-y-4">
        {topDapps.map((dapp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-4 rounded-xl hover:scale-[1.02] transition-transform"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-card/30">
                <img
                  src={dapp.logo}
                  alt={dapp.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-foreground/90 font-medium">{dapp.name}</h3>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <div className="stat-label">Transactions</div>
                <div className="text-sm font-medium text-primary">
                  {dapp.metrics?.transactions?.toLocaleString() ?? "N/A"}
                </div>
              </div>
              <div>
                <div className="stat-label">Users</div>
                <div className="text-sm font-medium text-primary">
                  {dapp.metrics?.uaw?.toLocaleString() ?? "N/A"}
                </div>
              </div>
              <div>
                <div className="stat-label">Volume</div>
                <div className="text-sm font-medium text-primary">
                  ${dapp.metrics?.volume?.toLocaleString() ?? "N/A"}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
