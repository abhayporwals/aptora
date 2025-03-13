"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    title: "Be the First to Know",
    description: "Get alpha before the market reacts.",
    icon: "https://cdn-icons-png.flaticon.com/128/2583/2583381.png",
  },
  {
    title: "On Chain Analysis",
    description: "Get access to on chain analysis and insights",
    icon: "https://cdn-icons-png.flaticon.com/128/15723/15723988.png",
  },
  {
    title: "Community Support",
    description: "Join a thriving community of Aptos enthusiasts",
    icon: "https://cdn-icons-png.flaticon.com/128/11913/11913323.png",
  },
  {
    title: "Real-time Updates",
    description: "Never miss an opportunity with instant market alerts",
    icon: "https://cdn-icons-png.flaticon.com/128/6283/6283154.png",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function WhyFollow() {
  return (
    <section className="py-32 relative overflow-hidden" style={{ fontFamily:"Cinzel", fontWeight:600, fontStyle:"normal", fontOpticalSizing:"auto"}}>
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-card-bg pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(123,44,191,0.15),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-light tracking-wider mb-6">
            Why You Should Follow
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent ml-3">
              Aptura
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto rock-salt-regular" >
            Get access to on chain analysis and insights, join a thriving
            community of Aptos enthusiasts, and never miss an opportunity with
            instant market alerts.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {reasons.map((reason) => (
            <motion.div key={reason.title} variants={item} className="group">
              <div className="relative p-8 rounded-2xl backdrop-blur-sm bg-card/30 border border-white/5 shadow-xl transition-all duration-300 hover:bg-card/40 hover:scale-[1.02] hover:shadow-2xl rock-salt-regular">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-light/5 rounded-2xl" />
                <div className="relative flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary-light/10 group-hover:scale-110 transition-transform duration-300">
                    {/* Display the icon image */}
                    <img src={reason.icon} alt="icon" className="w-12 h-12 object-contain" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                      {reason.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="relative max-w-3xl mx-auto p-8 rounded-2xl backdrop-blur-sm bg-card/30 border border-white/5 shadow-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-light/5" />
            <div className="relative">
              <h3 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent" style={{ fontFamily:"Cinzel", fontWeight:400, fontStyle:"normal", fontOpticalSizing:"auto"}}>
                Ready to Start Your Journey?
              </h3>
              <p className="text-lg text-foreground/70 mb-8 " style={{ fontFamily:"Rock Salt, cursive", fontWeight:400, fontStyle:"normal"}}>
                Follow ApturaX now & stay ahead of the curve.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-white rounded-full font-medium transition-all shadow-lg hover:shadow-primary/25 rock-salt-regular"
              >
                Get Started Now
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
