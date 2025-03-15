"use client";

import { motion } from "framer-motion";

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Dashboard", href: "/dashboard" },
  ],
  company: [
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ],
  legal: [
    { name: "Privacy", href: "#privacy" },
    { name: "Terms", href: "#terms" },
  ],
  social: [
    {
      name: "Twitter",
      href: "https://twitter.com/ApturaX",
      icon: "M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z",
    },
    {
      name: "Telegram",
      href: "https://t.me/ApturaX",
      icon: "M22.265 2.428a2.048 2.048 0 0 0-2.078-.324L2.266 9.339a2.043 2.043 0 0 0 .104 3.818l3.625 1.261 2.02 6.682a2.044 2.044 0 0 0 3.378.98l2.397-2.308 4.307 3.305a2.042 2.042 0 0 0 3.233-1.274l3.851-17.362a2.042 2.042 0 0 0-.916-2.013zM12.15 15.402l-1.366 1.317-.838-2.774 7.463-7.463-5.259 8.92z",
    },
    {
      name: "GitHub",
      href: "https://github.com/abhayporwals/aptura",
      icon: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
    },
  ],
};

export default function Footer() {
  return (
    <footer
      id="footer-section"
      className="bg-gradient-to-b from-background to-card-bg py-20 relative"
      style={{
        fontFamily: "Cinzel",
        fontWeight: 400,
        fontStyle: "normal",
        fontOpticalSizing: "auto",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Branding Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h2 className="text-6xl font-light mb-3">
                <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  APTURA
                </span>
              </h2>
              <p className="text-foreground/60 text-lg">
                The Autonomous AI Revolutionizing Aptos Engagement
              </p>
            </motion.div>

            {/* Social Follow Buttons */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {footerLinks.social.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 backdrop-blur-sm bg-card/30 rounded-xl border border-white/10 hover:border-primary/50 hover:bg-card/40 transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-foreground/60 group-hover:text-primary transition-colors"
                    fill="currentColor"
                  >
                    <path d={social.icon} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-semibold mb-4 text-lg">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-foreground/60 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-foreground/60 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-lg">Follow Us</h3>
              <motion.a
                href="https://x.com/ApturaX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-primary/10 hover:bg-primary/20 border border-primary/20 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-primary ">Follow on Twitter</span>
              </motion.a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 mt-8 border-t border-foreground/10">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-foreground/60 text-sm">
                © 2025 Aptura. The Future of Autonomous Trading.
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="#terms"
                  className="text-sm text-foreground/60 hover:text-primary transition-colors"
                >
                  Terms of Service
                </a>
                <span className="text-foreground/60">•</span>
                <a
                  href="#privacy"
                  className="text-sm text-foreground/60 hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
