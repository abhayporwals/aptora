'use client'
import React from 'react'
import { useDashboardData } from '../hooks/useDashboardData';
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
        <Card className="border border-card-border shadow-lg rounded-2xl p-4 w-full mx-auto">
            <CardHeader className="pb-2">
                <CardTitle className="text-lg text-white text-center">Aptos Price Chart</CardTitle>
            </CardHeader>
            <CardContent className="w-full">
                <ResponsiveContainer width="100%" height={window.innerWidth < 640 ? 250 : 300}>
                    <LineChart data={aptosChartData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                        <XAxis dataKey="date" stroke="#ffffff" tick={{ fill: "#bbb", fontSize: 14 }} />
                        <YAxis stroke="#ffffff" tick={{ fill: "#bbb", fontSize: 14 }} />
                        <Tooltip
                            contentStyle={{ backgroundColor: "#1a1a1a", borderColor: "#ff007f", color: "#fff" }}
                            cursor={{ stroke: "#ff007f", strokeWidth: 1 }}
                        />
                        <Line
                            type="monotone"
                            dataKey="price"
                            stroke="#ff007f"
                            strokeWidth={2}
                            dot={{ r: window.innerWidth < 640 ? 2 : 4 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );

}

export default AptosChart