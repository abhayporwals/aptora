"use client";

import { motion } from "framer-motion";
import { useDashboardData } from "../hooks/useDashboardData";
import { formatDistanceToNow } from "date-fns";

export default function NewsSection() {
  const { news, isLoading, error } = useDashboardData();

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
        <p className="text-red-500">Error loading news: {error}</p>
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
          Latest News
        </span>
      </h2>

      <div className="space-y-4">
        {news.map((item, index) => (
          <motion.a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="block p-4 rounded-xl bg-card/20 border border-white/5 hover:bg-card/30 transition-all"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-foreground/90 font-medium">{item.title}</h3>
              <span className="text-xs text-primary px-2 py-1 rounded-full bg-primary/10">
                {item.currencies[0]?.code || "CRYPTO"}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground/60">
              <span>{item.source.title}</span>
              <span>•</span>
              <span>
                {formatDistanceToNow(new Date(item.published_at))} ago
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
