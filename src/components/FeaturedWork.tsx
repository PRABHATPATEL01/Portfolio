"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Educational Suite",
    client: "Edutainment Adventures",
    category: "Learning & Kids",
    stats: "500k+ Downloads",
    color: "from-blue-400 to-indigo-500",
    icon: "🎨"
  },
  {
    title: "Utility Toolbox",
    client: "LYTBLB Technology",
    category: "Productivity",
    stats: "Top 100 Category",
    color: "from-purple-400 to-pink-500",
    icon: "🔧"
  },
  {
    title: "Financial Tracker",
    client: "Personal Portfolio",
    category: "Finance",
    stats: "StoreKit 2 Mastery",
    color: "from-emerald-400 to-teal-500",
    icon: "💰"
  },
  {
    title: "AR Furniture Pro",
    client: "Architecture Case Study",
    category: "AR / Design",
    stats: "ARKit / SceneKit",
    color: "from-orange-400 to-red-500",
    icon: "🕶️"
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
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="px-6 md:px-10 lg:px-20 py-24 bg-transparent max-w-7xl mx-auto w-full scroll-mt-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div className="max-w-2xl">
          <div className="text-primary font-bold text-xs tracking-widest flex items-center gap-2 mb-4 uppercase">
            <span className="text-lg"></span> FEATURED WORK
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-on-surface mb-4 tracking-tight">Apps that Drive Growth & <br className="hidden md:block" /> Revenue.</h2>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            A selection of live applications architected for scalability, high retention, and optimized monetization.
          </p>
        </div>
        <button className="bg-white/40 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/60 shadow-sm font-bold text-on-surface hover:bg-white/60 transition-all flex items-center gap-2 group">
          View All Projects <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {projects.map((project, idx) => (
          <motion.div 
            key={idx} 
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className="card-level-1 overflow-hidden group cursor-pointer h-full flex flex-col"
          >
            <div className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
               <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
               <span className="text-5xl transform group-hover:scale-110 transition-transform duration-500">{project.icon}</span>
               
               {/* Gloss shine effect on hover */}
               <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-bold text-primary tracking-widest uppercase mb-1">{project.category}</div>
                <h3 className="font-display font-bold text-xl text-on-surface mb-2">{project.title}</h3>
                <p className="text-on-surface-variant text-sm mb-4">{project.client}</p>
              </div>
              <div className="bg-surface-container-high/50 px-4 py-2 rounded-xl text-xs font-bold text-on-surface flex items-center gap-2 border border-white/40">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                {project.stats}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
