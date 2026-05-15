"use client";

import { motion } from "framer-motion";

export default function Expertise() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="expertise" className="px-6 md:px-10 lg:px-20 py-24 max-w-7xl mx-auto w-full scroll-mt-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="text-primary font-bold text-xs tracking-widest flex items-center gap-2 mb-4 uppercase">
          <span className="text-lg"></span> MY EXPERTISE
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-on-surface mb-4 tracking-tight">Crafting High-Performance <br className="hidden md:block" /> iOS Experiences.</h2>
        <p className="text-on-surface-variant text-lg max-w-3xl leading-relaxed">
          Expert in high-performance iOS UI/UX, advanced monetization engineering, and scalable backend integrations. I architect StoreKit 2 IAP systems and Network-Adaptive Ad frameworks.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Technical Mastery */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8 text-on-surface-variant font-display font-bold text-xl">
            <span className="text-primary">🛠️</span> Core Proficiencies
          </div>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {[
              { title: 'Swift & SwiftUI', desc: 'Modern reactive UI development with state management mastery.', icon: '⚡' },
              { title: 'Modular Architecture', desc: 'Designing decoupled, testable, and reusable code modules.', icon: '🧩' },
              { title: 'StoreKit 2 / IAP', desc: 'Complex monetization systems with multi-offer logic.', icon: '💰' },
              { title: 'Networking & API', desc: 'Robust REST/GraphQL integration with custom caching.', icon: '🌐' }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="card-level-1 p-6 flex flex-col gap-3 group cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-bold text-on-surface">{item.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Specialized Tools */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8 text-on-surface-variant font-display font-bold text-xl">
            <span className="text-primary">🚀</span> Ecosystem & Tools
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'Core Data / SwiftData' },
              { name: 'Firebase / Firestore' },
              { name: 'Core ML / ARKit' },
              { name: 'Unit & UI Testing' },
              { name: 'MapKit / AVFoundation' },
              { name: 'Combine / Async-Await' },
              { name: 'StoreKit Testing' },
              { name: 'CI/CD Basics' },
              { name: 'CocoaPods / Git' }
            ].map((tool, idx) => (
              <motion.div 
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.6)" }}
                className="flex items-center gap-2 bg-white/40 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/60 shadow-sm font-medium text-on-surface-variant whitespace-nowrap cursor-default"
              >
                <div className="w-2 h-2 rounded-full bg-primary/40"></div> {tool.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Education */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-20"
      >
        <div className="flex items-center gap-3 mb-8 text-on-surface-variant font-display font-bold text-xl">
          <span className="text-primary">🎓</span> Education
        </div>
        <div className="card-level-1 p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-xl transition-all hover:scale-[1.01]">
          <div className="flex gap-6 items-start">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl shrink-0">
              📚
            </div>
            <div>
              <h4 className="font-display font-bold text-2xl text-on-surface mb-1">Bachelor of Technology in IT</h4>
              <p className="text-on-surface-variant mb-4 font-medium">Dr. A.P.J. Abdul Kalam Technical University, Lucknow</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/5 text-primary text-xs px-4 py-2 rounded-full font-bold border border-primary/10">CGPA: 8.2 / 10.0</span>
              </div>
            </div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm text-on-surface-variant px-6 py-3 rounded-2xl font-bold text-sm shrink-0 whitespace-nowrap self-start md:self-auto border border-white shadow-sm">
            2020 — 2024
          </div>
        </div>
      </motion.div>
    </section>
  );
}
