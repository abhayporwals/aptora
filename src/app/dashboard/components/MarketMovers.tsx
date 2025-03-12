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


  return (
    <div className="space-y-4">
      {topDapps ? topDapps.map((dapp, index) => (
        <motion.div
          key={index}
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="block p-4 rounded-xl bg-card/20 border border-white/5 hover:bg-card/30 transition-all"
        >
          {/* DApp Name & Logo */}
          <div className="flex items-center gap-3 mb-2">
            <img src={dapp?.logo} alt={dapp?.name} className="w-10 h-10 rounded-lg" />
            <h3 className="text-foreground/90 font-medium">{dapp?.name}</h3>
          </div>

          {/* Description */}
          <p className="text-sm text-foreground/70">{dapp?.description}</p>

          {/* Metrics */}
          <div className="mt-3 grid grid-cols-3 gap-2 text-xs text-foreground/60">
            <div>
              <span className="font-medium text-foreground">{dapp?.metrics?.transactions.toLocaleString()}</span>
              <p>Transactions</p>
            </div>
            <div>
              <span className="font-medium text-foreground">{dapp?.metrics?.uaw}</span>
              <p>Users</p>
            </div>
            <div>
              <span className="font-medium text-foreground">${dapp?.metrics?.volume.toLocaleString()}</span>
              <p>Volume</p>
            </div>
          </div>
        </motion.div>
      )) : null}
    </div>
  );
}
