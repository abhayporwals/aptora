"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useDashboardData } from "../hooks/useDashboardData"
import { formatDistanceToNow } from "date-fns"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ExternalLink, Clock, Newspaper } from "lucide-react"

export default function NewsSection() {
  const { news, isLoading } = useDashboardData()

  if (isLoading) {
    return (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="card h-full">
        <h2 className="gradient-text text-2xl font-light mb-6">Latest News</h2>
        <div className="animate-pulse space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-24 bg-card/20 rounded-xl" />
          ))}
        </div>
      </motion.div>
    )
  }

  if (!news?.length) return null

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-purple-900/10 p-6 h-full flex flex-col">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h2 className="text-purple-400 font-semibold text-2xl">Latest News</h2>
      </div>
      {/* Scrollable news content */}
      <ScrollArea className="flex-grow pr-4 -mr-4" style={{ maxHeight: "calc(100vh - 250px)" }}>
        <AnimatePresence initial={false} mode="popLayout">
          <div className="space-y-4">
            {news.map((item, index) => (
              <motion.a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                className="block glass-card p-4 rounded-xl hover:bg-card/40 hover:shadow-md transition-all duration-200 group"
                layout
              >
                <div className="flex flex-col gap-3 border-b border-gray-500 pb-4">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-sm font-medium text-foreground/90 line-clamp-2 flex-grow group-hover:text-purple-400 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-foreground/60">
                    <div className="flex items-center gap-1">
                      <Newspaper className="h-3 w-3 text-primary/60" />
                      <span className="font-medium">{item.source.title}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-primary/60" />
                      <span>{formatDistanceToNow(new Date(item.published_at))} ago</span>
                    </div>

                    <span className="ml-auto flex items-center gap-1 text-primary/70 group-hover:text-primary transition-colors">
                      Read more <ExternalLink className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </motion.a>
            ))
            }
          </div>
        </AnimatePresence>
      </ScrollArea>
    </motion.div>
  )
}

