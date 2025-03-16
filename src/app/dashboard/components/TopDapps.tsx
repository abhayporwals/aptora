"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useDashboardData } from "../hooks/useDashboardData"
import Link from "next/link"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronUp, ChevronDown, ExternalLink, Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Sort options
type SortOption = "balance" | "volume" | "users" | "transactions"
type SortDirection = "asc" | "desc"

export default function TopDapps() {
  const { topDapps, isLoading, error } = useDashboardData()
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState<SortOption>("balance")
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc")
  const [activeTab, setActiveTab] = useState("all")
  const containerRef = useRef<HTMLDivElement>(null)

  // Filter and sort dapps
  const filteredAndSortedDapps = topDapps
    ? topDapps
      .filter(dapp => {
        // Filter by search query
        if (searchQuery) {
          return dapp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            dapp.description.toLowerCase().includes(searchQuery.toLowerCase())
        }

        // Filter by category tab
        if (activeTab !== "all") {
          return dapp.categories[0] === activeTab
        }

        return true
      })
      .sort((a, b) => {
        // Sort by selected metric
        let valueA, valueB

        switch (sortBy) {
          case "balance":
            valueA = a.metrics.balance
            valueB = b.metrics.balance
            break
          case "volume":
            valueA = a.metrics.volume
            valueB = b.metrics.volume
            break
          case "users":
            valueA = a.metrics.uaw
            valueB = b.metrics.uaw
            break
          case "transactions":
            valueA = a.metrics.transactions
            valueB = b.metrics.transactions
            break
          default:
            valueA = a.metrics.balance
            valueB = b.metrics.balance
        }

        return sortDirection === "desc" ? valueB - valueA : valueA - valueB
      })
    : []

  // Get unique categories for tabs
  const categories = topDapps
    ? ["all", ...new Set(topDapps.map(dapp => dapp.categories[0]))]
    : ["all"]

  // Handle sort toggle
  const handleSortToggle = (option: SortOption) => {
    if (sortBy === option) {
      setSortDirection(sortDirection === "desc" ? "asc" : "desc")
    } else {
      setSortBy(option)
      setSortDirection("desc")
    }
  }

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card"
      >
        <h2 className="gradient-text text-2xl font-light mb-6">Top DApps</h2>
        <div className="animate-pulse space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-40 bg-card/20 rounded-xl" />
          ))}
        </div>
      </motion.div>
    )
  }

  if (error || !topDapps?.length) {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="h-full flex flex-col bg-purple-900/10 p-8"
      ref={containerRef}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl text-purple-400 font-semibold">Top DApps</h2>
      </div>
      {/* Category tabs */}
      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <TabsList className="bg-card/30 p-1 overflow-x-auto flex w-full justify-start sm:justify-center">
          {categories.map(category => (
            <TabsTrigger
              key={category}
              value={category}
              className="capitalize data-[state=active]:bg-primary/10 data-[state=active]:text-purple-400 text-sm"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Sort controls */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="text-sm text-muted-foreground mr-1 self-center">Sort by:</span>
        {[
          { id: "balance", label: "Balance" },
          { id: "volume", label: "Volume" },
          { id: "users", label: "Users" },
          { id: "transactions", label: "Transactions" }
        ].map((option) => (
          <Button
            key={option.id}
            variant="outline"
            size="sm"
            className={cn(
              "h-8 text-sm bg-card/30 border-none",
              sortBy === option.id && "bg-primary/10 text-purple-400"
            )}
            onClick={() => handleSortToggle(option.id as SortOption)}
          >
            {option.label}
            {sortBy === option.id && (
              <span className="ml-1">
                {sortDirection === "desc" ? <ChevronDown className="h-3 w-3" /> : <ChevronUp className="h-3 w-3" />}
              </span>
            )}
          </Button>
        ))}
      </div>

      {/* Scrollable content area */}
      <ScrollArea className="flex-grow pr-4 -mr-4" style={{ maxHeight: "calc(100vh - 300px)" }}>
        <AnimatePresence initial={false} mode="popLayout">
          <div className="space-y-6">
            {filteredAndSortedDapps.length > 0 ? (
              filteredAndSortedDapps.map((dapp, index) => (
                <motion.div
                  key={dapp.dappId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  className="glass-card p-4 sm:p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:bg-card/40"
                  layout
                >
                  {/* Header Section */}
                  <div className="flex flex-col sm:flex-row gap-4 items-start mb-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden relative bg-card/30 flex-shrink-0">
                      {dapp.logo && (
                        <img
                          src={dapp.logo || "/placeholder.svg"}
                          alt={`${dapp.name} logo`}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>

                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-xl font-medium text-foreground">
                              {dapp.name}
                            </h3>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-purple-400 capitalize">
                              {dapp.categories[0]}
                            </span>
                          </div>
                          <Link
                            href={dapp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-purple-500 hover:text-primary-light transition-colors flex items-center gap-1 mt-1"
                          >
                            {dapp.website}
                            <ExternalLink className="h-3 w-3" />
                          </Link>
                        </div>
                        <div className="flex gap-2">
                          {dapp.socialLinks?.map((social, idx) => (
                            <Link
                              key={idx}
                              href={social.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-full hover:bg-primary/10 text-foreground/60 hover:text-primary transition-colors"
                            >
                              {social.type === "twitter" ? (
                                <svg
                                  className="w-5 h-5"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                              ) : social.type === "discord" ? (
                                <svg
                                  className="w-5 h-5"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                                </svg>
                              ) : null}
                            </Link>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-foreground/60 mt-2 line-clamp-2">
                        {dapp.description}
                      </p>
                    </div>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3 mt-6">
                    {/* Balance */}
                    <div className={cn(
                      "glass-card p-3 sm:p-4 rounded-lg transition-all duration-300",
                      sortBy === "balance" && "ring-1 ring-primary/20 bg-primary/5"
                    )}>
                      <div className="text-xs text-muted-foreground">Balance</div>
                      <div className="text-base sm:text-lg font-semibold mt-1">
                        $
                        {dapp.metrics.balance.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}
                      </div>
                      <div
                        className={cn(
                          "text-xs mt-1 flex items-center",
                          dapp.metrics.balancePercentageChange >= 0
                            ? "text-green-500"
                            : "text-red-500"
                        )}
                      >
                        {dapp.metrics.balancePercentageChange >= 0 ? (
                          <ChevronUp className="h-3 w-3 mr-0.5" />
                        ) : (
                          <ChevronDown className="h-3 w-3 mr-0.5" />
                        )}
                        {Math.abs(dapp.metrics.balancePercentageChange).toFixed(2)}%
                      </div>
                    </div>

                    {/* Volume */}
                    <div className={cn(
                      "glass-card p-3 sm:p-4 rounded-lg transition-all duration-300",
                      sortBy === "volume" && "ring-1 ring-primary/20 bg-primary/5"
                    )}>
                      <div className="text-xs text-muted-foreground">Volume 24h</div>
                      <div className="text-base sm:text-lg font-semibold mt-1">
                        $
                        {dapp.metrics.volume.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}
                      </div>
                      <div
                        className={cn(
                          "text-xs mt-1 flex items-center",
                          dapp.metrics.volumePercentageChange >= 0
                            ? "text-green-500"
                            : "text-red-500"
                        )}
                      >
                        {dapp.metrics.volumePercentageChange >= 0 ? (
                          <ChevronUp className="h-3 w-3 mr-0.5" />
                        ) : (
                          <ChevronDown className="h-3 w-3 mr-0.5" />
                        )}
                        {Math.abs(dapp.metrics.volumePercentageChange).toFixed(2)}%
                      </div>
                    </div>

                    {/* Users */}
                    <div className={cn(
                      "glass-card p-3 sm:p-4 rounded-lg transition-all duration-300",
                      sortBy === "users" && "ring-1 ring-primary/20 bg-primary/5"
                    )}>
                      <div className="text-xs text-muted-foreground">Active Users 24h</div>
                      <div className="text-base sm:text-lg font-semibold mt-1">
                        {dapp.metrics.uaw.toLocaleString()}
                      </div>
                      <div
                        className={cn(
                          "text-xs mt-1 flex items-center",
                          dapp.metrics.uawPercentageChange >= 0
                            ? "text-green-500"
                            : "text-red-500"
                        )}
                      >
                        {dapp.metrics.uawPercentageChange >= 0 ? (
                          <ChevronUp className="h-3 w-3 mr-0.5" />
                        ) : (
                          <ChevronDown className="h-3 w-3 mr-0.5" />
                        )}
                        {Math.abs(dapp.metrics.uawPercentageChange).toFixed(2)}%
                      </div>
                    </div>

                    {/* Transactions */}
                    <div className={cn(
                      "glass-card p-3 sm:p-4 rounded-lg transition-all duration-300",
                      sortBy === "transactions" && "ring-1 ring-primary/20 bg-primary/5"
                    )}>
                      <div className="text-xs text-muted-foreground">Transactions 24h</div>
                      <div className="text-base sm:text-lg font-semibold mt-1">
                        {dapp.metrics.transactions.toLocaleString()}
                      </div>
                      <div
                        className={cn(
                          "text-xs mt-1 flex items-center",
                          dapp.metrics.transactionsPercentageChange >= 0
                            ? "text-green-500"
                            : "text-red-500"
                        )}
                      >
                        {dapp.metrics.transactionsPercentageChange >= 0 ? (
                          <ChevronUp className="h-3 w-3 mr-0.5" />
                        ) : (
                          <ChevronDown className="h-3 w-3 mr-0.5" />
                        )}
                        {Math.abs(dapp.metrics.transactionsPercentageChange).toFixed(2)}%
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 text-muted-foreground"
              >
                No DApps found matching your criteria
              </motion.div>
            )}
          </div>
        </AnimatePresence>
      </ScrollArea>
    </motion.div>
  )
}
