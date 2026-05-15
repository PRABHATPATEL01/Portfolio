"use client";

import { motion } from "framer-motion";

export default function CaseStudy() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="experience" className="px-6 md:px-10 lg:px-20 py-24 max-w-7xl mx-auto w-full scroll-mt-24">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="text-primary font-bold text-xs tracking-widest flex items-center gap-2 mb-4 uppercase">
          <span className="text-lg"></span> ARCHITECTURE CASE STUDY
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-on-surface mb-4 tracking-tight">Scaling a Portfolio of 10+ iOS Applications</h2>
        <p className="text-on-surface-variant text-lg max-w-3xl leading-relaxed">
          A deep dive into the modular transformation and end-to-end customization of core codebases to deploy dozens of unique, highly-monetized applications.
        </p>
      </motion.div>

      {/* Main Glass Illustration Area */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="card-level-1 p-8 md:p-12 mb-16 relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2">
            <h3 className="font-display text-3xl font-bold text-on-surface mb-6">The Challenge</h3>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              Deploying and maintaining 10+ unique applications required a scalable approach that bypassed redundant development cycles while allowing for deep individual branding and features.
            </p>
            <div className="flex flex-col gap-4">
              {[
                "Centralized Core Framework",
                "Dynamic Asset Injection",
                "Automated Build Pipelines",
                "Adaptive UI Theming"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 font-bold text-on-surface">
                   <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs">✓</div>
                   {item}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
             <div className="bg-white/40 backdrop-blur-xl rounded-3xl border border-white/60 p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-8 border-b border-white/20 pb-4">
                   <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                   </div>
                   <div className="text-[10px] font-bold text-primary/60 tracking-widest uppercase">System Architecture</div>
                </div>
                
                <div className="space-y-6">
                   <div className="flex items-center justify-between p-4 bg-primary/10 rounded-2xl border border-primary/20">
                      <div className="flex items-center gap-4">
                         <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white text-xl">🏛️</div>
                         <div>
                            <div className="text-xs font-bold text-primary">Core Library</div>
                            <div className="text-[10px] text-primary/60">Logic & Networking</div>
                         </div>
                      </div>
                      <div className="text-[10px] font-bold text-primary">STABLE</div>
                   </div>

                   <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-purple-500/10 rounded-2xl border border-purple-500/20 flex flex-col items-center text-center gap-2">
                         <div className="text-2xl">📦</div>
                         <div className="text-[10px] font-bold text-purple-600 uppercase">Modular UI</div>
                      </div>
                      <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 flex flex-col items-center text-center gap-2">
                         <div className="text-2xl">⚡</div>
                         <div className="text-[10px] font-bold text-emerald-600 uppercase">SwiftData</div>
                      </div>
                   </div>

                   <div className="p-4 bg-white/60 rounded-2xl border border-white/80 flex items-center justify-center gap-3">
                      <div className="animate-spin h-4 w-4 border-2 border-primary/30 border-t-primary rounded-full" />
                      <div className="text-[10px] font-bold text-on-surface-variant">Synchronizing Cloud Assets...</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </motion.div>

      {/* Results grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {[
          { label: "Efficiency", value: "85%", desc: "Reduction in code duplication across apps." },
          { label: "Revenue Growth", value: "2.4x", desc: "Increase in average IAP conversion rates." },
          { label: "Stability", value: "99.9%", desc: "Crash-free sessions across all deployments." }
        ].map((stat, idx) => (
          <motion.div 
            key={idx} 
            variants={itemVariants}
            className="card-level-1 p-8 text-center flex flex-col items-center"
          >
            <div className="text-xs font-bold text-primary tracking-widest uppercase mb-2">{stat.label}</div>
            <div className="text-4xl font-display font-black text-on-surface mb-2">{stat.value}</div>
            <p className="text-on-surface-variant text-sm leading-relaxed">{stat.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
