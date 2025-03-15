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
        className="card h-full"
      >
        <h2 className="gradient-text text-2xl font-light mb-6">Latest News</h2>
        <div className="animate-pulse space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-24 bg-card/20 rounded-xl" />
          ))}
        </div>
      </motion.div>
    );
  }

  if (!news?.length) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card h-full"
    >
      <h2 className="gradient-text text-2xl font-light mb-6">Latest News</h2>

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
            className="block glass-card p-4 rounded-xl hover:scale-[1.02] transition-all duration-200"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-sm font-medium text-foreground/90 line-clamp-2 flex-grow">
                  {item.title}
                </h3>
                <span className="flex-shrink-0 text-xs text-primary px-2 py-1 rounded-full bg-primary/10 whitespace-nowrap">
                  {item.currencies[0]?.code || "CRYPTO"}
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs text-foreground/60">
                <span className="font-medium">{item.source.title}</span>
                <span className="text-foreground/40">•</span>
                <span>
                  {formatDistanceToNow(new Date(item.published_at))} ago
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
