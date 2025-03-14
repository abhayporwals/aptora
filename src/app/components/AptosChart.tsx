'use client'
import React from 'react'
import { useDashboardData } from '../dashboard/hooks/useDashboardData';
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const AptosChart = () => {
    const { aptosChartData, isLoading, error } = useDashboardData();
    if (isLoading) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 rounded-2xl backdrop-blur-sm bg-card/30 border border-white/5 shadow-xl h-full"
            >
                <h2 className="text-2xl font-light mb-6">
                    <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                        Aptos Price Chart
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
                <p className="text-red-500">Error loading Aptos Price Chart: {error}</p>
            </div>
        );
    }
    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={aptosChartData}>
                <XAxis dataKey="date" stroke="#ffffff" />
                <YAxis stroke="#ffffff" />
                <Tooltip />
                <Line type="monotone" dataKey="price" stroke="#ff007f" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
        </ResponsiveContainer>
    );

}

export default AptosChart