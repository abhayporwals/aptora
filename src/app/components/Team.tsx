"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const team = [
  {
    name: "Abhay Porwal",
    handle: "@abhayporwals",
    role: "Full-Stack development",
    image: "/abhay.png",
  },
  {
    name: "S Adithiya",
    handle: "@Adithiya1S",
    role: "Front-end development",
    image: "/adi.png",
  },
  {
    name: "Rohan Singla",
    handle: "@rohanBuilds",
    role: "Blockchain development",
    image: "/rohan.png",
  },
  {
    name: "Ruchika Narang",
    handle: "@RuchikaNarang06",
    role: "ML dev and Design",
    image: "/ruchi.png",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Team() {
  return (
    <section className="py-32 relative overflow-hidden">
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
            Meet Our
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent ml-3">
              Team
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            The brilliant minds behind Aptura, working together to revolutionize
            the Aptos ecosystem
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {team.map((member) => (
            <motion.div key={member.name} variants={item} className="group">
              <div className="relative p-6 rounded-2xl backdrop-blur-sm bg-card/30 border border-white/5 shadow-xl transition-all duration-300 hover:bg-card/40 hover:scale-[1.02] hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-light/5 rounded-2xl" />
                <div className="relative flex items-start gap-4">
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl font-semibold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                        {member.name}
                      </h3>
                      <span className="text-foreground/70">
                        {member.handle}
                      </span>
                    </div>
                    <p className="text-lg text-foreground/90 mt-2">
                      {member.role}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-foreground/50 mt-3">
                      <span>12:30 PM · Feb 21, 2025</span>
                      <span>•</span>
                      <span>Twitter Web App</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
