'use client'

import React from 'react'
import { useDashboardData } from '../dashboard/hooks/useDashboardData';
import { motion } from "framer-motion";

const TopLosers = () => {
    const { topLosers, isLoading, error } = useDashboardData();
    if (isLoading) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 rounded-2xl backdrop-blur-sm bg-card/30 border border-white/5 shadow-xl h-full"
            >
                <h2 className="text-2xl font-light mb-6">
                    <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                        Top Losers
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
                <p className="text-red-500">Error loading Top Losers: {error}</p>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-2xl backdrop-blur-sm bg-card/30 border border-white/5 shadow-xl h-full"
        >
            <h2 className="text-2xl font-light mb-6">
                <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                    Top Losers
                </span>
            </h2>

            <div className="space-y-4">
                {topLosers.map((item, index) => (
                    <motion.a
                        key={item.id}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="block p-4 rounded-xl bg-card/20 border border-white/5 hover:bg-card/30 transition-all"
                    >
                        {/* Coin Name & Symbol */}
                        <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center gap-3">
                                <img src={item.image} alt={item.name} className="w-6 h-6 rounded-full" />
                                <h3 className="text-foreground/90 font-medium">{item.name}</h3>
                            </div>
                            <span className="text-xs text-red-500 px-2 py-1 rounded-full bg-red-500/10">
                                {item.symbol.toUpperCase()}
                            </span>
                        </div>

                        {/* Price & 24H Change */}
                        <div className="flex justify-between items-center text-sm text-foreground/60">
                            <span>${item.current_price.toFixed(2)}</span>
                            <span className="text-red-500">{item.price_change_percentage_24h}%</span>
                        </div>
                    </motion.a>
                ))}
            </div>
        </motion.div>
    );
}

export default TopLosers