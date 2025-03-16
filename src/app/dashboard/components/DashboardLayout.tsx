"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Twitter } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
  ]
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300",
          isScrolled ? "border-card-border/20 bg-background/80" : "border-transparent bg-background/50",
        )}
      >
        <div className="container mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 z-20">
              <motion.span
                className="text-2xl bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent font-semibold"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                APTURA
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative py-1 text-md font-medium transition-colors",
                    pathname === link.href ? "text-purple-400" : "text-foreground/70 hover:text-purple-500",
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.span
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Social Link & Mobile Menu */}
            <div className="flex items-center gap-2">
              <motion.a
                href="https://x.com/apturax"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 text-purple-400 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter className="w-4 h-4" />
                <span className="text-lg font-medium">Follow</span>
              </motion.a>

              {/* Mobile Menu */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[80%] sm:w-[350px] pr-0">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xl font-light bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                        APTURA
                      </span>
                      <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                        <X className="h-5 w-5" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </div>
                    <nav className="flex flex-col space-y-4">
                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "px-4 py-3 rounded-lg text-base font-medium transition-colors",
                            pathname === link.href
                              ? "bg-primary/10 text-primary"
                              : "text-foreground/70 hover:bg-muted hover:text-primary",
                          )}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </nav>
                    <div className="mt-auto pt-6">
                      <motion.a
                        href="https://x.com/apturax"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                        whileTap={{ scale: 0.95 }}
                      >
                        <Twitter className="w-4 h-4" />
                        <span>Follow on X</span>
                      </motion.a>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content Area */}
      <main className="pt-24 pb-8 container mx-auto">{children}</main>
    </div>
  );
}
