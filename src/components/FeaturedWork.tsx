"use client";

import { motion } from "framer-motion";

const apps = [
  {
    name: "Weight Loss Recipes",
    desc: "Strategic UI/UX design focusing on nutritional clarity and premium meal tracking features.",
    link: "https://apps.apple.com/us/app/weight-loss-recipes-diet-plan/id6759555130",
    tech: "SwiftUI",
    color: "from-blue-100 to-blue-200",
    icon: "🥗"
  },
  {
    name: "Smoothie Recipes",
    desc: "Complex filtering logic and high-performance media caching for instant recipe discovery.",
    link: "https://apps.apple.com/us/app/smoothie-recipes-healthy-diet/id6759555138",
    tech: "Combine",
    color: "from-purple-100 to-purple-200",
    icon: "🥤"
  },
  {
    name: "Keto Diet: Meal Plan",
    desc: "Advanced monetization integration with AdMob and premium subscription walls.",
    link: "https://apps.apple.com/us/app/keto-diet-recipes-meal-plan/id6759555140",
    tech: "StoreKit 2",
    color: "from-indigo-100 to-indigo-200",
    icon: "🥩"
  }
];

export default function FeaturedWork() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3 } }
  };

  return (
    <section id="projects" className="px-6 md:px-10 lg:px-20 py-24 bg-transparent max-w-7xl mx-auto w-full scroll-mt-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 250, damping: 30 }}
        className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div className="max-w-2xl">
          <div className="text-primary font-bold text-xs tracking-widest flex items-center gap-2 mb-4 uppercase">
            <span className="text-lg"></span> LIVE PRODUCTION PROJECTS
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-on-surface mb-4 tracking-tight">Portfolio of 10+ iOS Applications</h2>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            Featured recipe and health applications published by **Edutainment Adventures Pvt Ltd**, managing full architecture from concept to App Store deployment.
          </p>
        </div>
        <button 
          onClick={() => window.open('https://apps.apple.com/us/developer/edutainment-adventures-pvt-ltd/id123456789', '_blank')}
          className="apple-glass px-8 py-4 font-bold text-on-surface hover:bg-white/60 transition-all flex items-center gap-2 group"
        >
          App Store Profile <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </motion.div>

      {/* Hero Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Salad Recipes */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="card-level-1 p-8 flex flex-col gap-6 group hover:shadow-2xl transition-all"
        >
          <div className="bg-[#e9f2eb] rounded-[32px] h-80 w-full overflow-hidden flex items-center justify-center relative">
             <div className="w-48 h-[90%] bg-[#1a2e21] rounded-t-[40px] border-8 border-[#0f1f14] shadow-2xl relative translate-y-8 flex flex-col overflow-hidden">
                <div className="absolute inset-x-0 top-6 bottom-0 bg-[#f9faf9] rounded-t-xl flex flex-col gap-3 p-4">
                   <div className="h-32 w-full rounded-lg bg-[url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=300')] bg-cover"></div>
                   <div className="h-3 w-full rounded-full bg-gray-100" />
                   <div className="h-3 w-3/4 rounded-full bg-gray-100" />
                </div>
             </div>
          </div>
          <div className="flex justify-between items-start">
             <div className="flex-1">
                <h3 className="font-display font-bold text-3xl text-on-surface mb-2">Salad Recipes</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                  Premium architecture with network-adaptive AdMob integration and enterprise-grade Kingfisher caching.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['SwiftUI', 'AdMob', 'Kingfisher'].map(t => (
                    <span key={t} className="bg-primary/5 text-primary text-[10px] font-bold px-3 py-1.5 rounded-full border border-primary/10">{t}</span>
                  ))}
                </div>
             </div>
             <a href="https://apps.apple.com/us/app/salad-recipes-healthy-diet/id6755809955" target="_blank" className="w-12 h-12 apple-glass flex items-center justify-center text-xl hover:scale-110 transition-transform">↗</a>
          </div>
        </motion.div>

        {/* Diabetic Diet */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="card-level-1 p-8 flex flex-col gap-6 group hover:shadow-2xl transition-all"
        >
          <div className="bg-[#f0e8e6] rounded-[32px] h-80 w-full overflow-hidden flex items-center justify-center relative">
             <div className="w-44 h-[90%] bg-white rounded-t-[40px] border-8 border-[#2b1814] shadow-2xl relative translate-y-8 flex flex-col overflow-hidden">
                <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=300')] bg-cover opacity-90" />
             </div>
          </div>
          <div className="flex justify-between items-start">
             <div className="flex-1">
                <h3 className="font-display font-bold text-3xl text-on-surface mb-2">Diabetic Diet</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                  Built with Firestore Batch Merge for complex data syncing and optimized On-Demand Resources (ODR).
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Firestore', 'ODR', 'Combine'].map(t => (
                    <span key={t} className="bg-primary/5 text-primary text-[10px] font-bold px-3 py-1.5 rounded-full border border-primary/10">{t}</span>
                  ))}
                </div>
             </div>
             <a href="https://apps.apple.com/us/app/diabetic-diet-recipe/id6760650743" target="_blank" className="w-12 h-12 apple-glass flex items-center justify-center text-xl hover:scale-110 transition-transform">↗</a>
          </div>
        </motion.div>
      </div>

      {/* Grid of Other Apps */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {apps.map((app, idx) => (
          <motion.div 
            key={idx} 
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="card-level-1 p-6 flex flex-col group cursor-pointer"
            onClick={() => window.open(app.link, '_blank')}
          >
            <div className={`h-32 bg-gradient-to-br ${app.color} rounded-2xl flex items-center justify-center text-4xl mb-6 relative overflow-hidden`}>
               <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
               {app.icon}
            </div>
            <div className="flex-1">
               <h4 className="font-display font-bold text-xl text-on-surface mb-2">{app.name}</h4>
               <p className="text-on-surface-variant text-xs leading-relaxed mb-4">{app.desc}</p>
            </div>
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/20">
               <span className="text-[10px] font-bold text-primary">{app.tech}</span>
               <span className="text-[10px] font-bold text-on-surface-variant group-hover:text-primary transition-colors">App Store ↗</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
