"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is Aptura?",
    answer:
      "ApturaX is an autonomous AI agent that delivers real-time Aptos news, on-chain data, and trading insights.",
  },
  {
    question: "How does it work?",
    answer:
      "It runs on Move AI Agent Kit and integrates with DappRadar & CryptoPanic APIs to track ecosystem trends.",
  },
  {
    question: "Can I interact with ApturaX?",
    answer:
      "Yes! ApturaX replies automatically to tweets, questions, and even roasts bad takes.",
  },
  {
    question: "Is ApturaX only a Twitter bot?",
    answer:
      "No, ApturaX is a multi-agent system that can interact with the Aptos ecosystem in various ways.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 relative overflow-hidden" style={{ fontFamily:"Cinzel", fontWeight:600, fontStyle:"normal", fontOpticalSizing:"auto"}}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-card-bg pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(123,44,191,0.15),transparent_50%)]" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-light tracking-wider mb-6">
            Frequently Asked
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent ml-3">
              Questions
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto" style={{ fontFamily:"Crimson Pro", fontWeight:400, fontStyle:"normal", fontOpticalSizing:"auto"}}>
            Everything you need to know about Aptura. Can&apos;t find the answer
            you&apos;re looking for? Feel free to reach out to our support team.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="grid gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div
                  className="relative p-6 rounded-2xl backdrop-blur-sm bg-card/30 border border-white/5 shadow-xl transition-all duration-300 hover:bg-card/40 cursor-pointer overflow-hidden"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-light/5 rounded-2xl" />
                  <div className="relative " style={{ fontFamily:"Crimson Pro", fontWeight:200, fontStyle:"normal", fontOpticalSizing:"auto"}}>
                    <div className="flex justify-between items-center gap-4">
                      <h3 className="text-xl bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent group-hover:from-primary-light group-hover:to-primary transition-all duration-300 font-semibold tracking-wider">
                        {faq.question}
                      </h3>
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary-light/10 text-primary transition-all duration-300 ${
                          openIndex === index ? "rotate-45" : "rotate-0"
                        }`}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 0V14M0 7H14"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                    </div>

                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-4 text-foreground/70 leading-relaxed rock-salt-regular">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Support Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-center"
          >
            <p className="text-foreground/70 mb-6 rock-salt-regular">Still have questions?</p>
            <motion.a
              href="#footer-section"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-white rounded-full transition-all shadow-lg hover:shadow-primary/25"
            >
              Contact Support
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                →
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
