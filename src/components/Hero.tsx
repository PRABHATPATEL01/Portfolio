"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const appBlocks = [
  // Widgets (Medium size)
  { 
    id: 1, 
    type: "widget-music", 
    name: "Music", 
    size: "w-40 h-40", 
    x: 20, 
    y: 60 
  },
  { 
    id: 2, 
    type: "widget-reminders", 
    name: "Reminders", 
    size: "w-40 h-40", 
    x: 180, 
    y: 60 
  },
  
  // Icons (Small size)
  { id: 3, type: "icon", name: "Photos", icon: "🌸", bg: "bg-white/80", x: 20, y: 240 },
  { id: 4, type: "icon", name: "Games", icon: "🚀", bg: "bg-gray-800/80", x: 105, y: 240 },
  { id: 5, type: "icon", name: "Podcasts", icon: "🎙️", bg: "bg-purple-100/80", x: 190, y: 240 },
  { id: 6, type: "icon", name: "FaceTime", icon: "📹", bg: "bg-green-100/80", x: 275, y: 240 },
  
  { id: 7, type: "icon", name: "App Store", icon: "🅰️", bg: "bg-blue-500/80", x: 20, y: 330 },
  { id: 8, type: "icon", name: "Settings", icon: "⚙️", bg: "bg-gray-400/80", x: 105, y: 330 },
  { id: 9, type: "icon", name: "SwiftUI", icon: "🎨", bg: "bg-indigo-500/80", x: 190, y: 330 },
  { id: 10, type: "icon", name: "Firebase", icon: "🔥", bg: "bg-orange-500/80", x: 275, y: 330 },
];

const orbitingSkills = [
  { text: "Swift", x: -240, y: -250, delay: 0 },
  { text: "Modular Architecture", x: -260, y: -120, delay: 0.2 },
  { text: "StoreKit 2 Mastery", x: -240, y: 0, delay: 0.4 },
  { text: "On-Demand Resources", x: -260, y: 120, delay: 0.6 },
  { text: "Adaptive Monetization", x: -240, y: 250, delay: 0.8 },
  { text: "Crash-Free", x: -100, y: -340, delay: 1.0 },
  { text: "Edge AI Integration", x: 100, y: -350, delay: 1.2 },
  { text: "Environment Automation", x: 240, y: -250, delay: 1.4 },
  { text: "Enterprise Caching", x: 260, y: -120, delay: 1.6 },
  { text: "Scalable Core Data", x: 240, y: 0, delay: 1.8 },
  { text: "MVVM / SwiftUI Hybrid", x: 260, y: 120, delay: 2.0 },
  { text: "Firestore Optimization", x: 240, y: 250, delay: 2.2 },
  { text: "Xcode", x: 120, y: 350, delay: 2.4 },
  { text: "TestFlight", x: -120, y: 360, delay: 2.6 },
  { text: "App Store", x: 0, y: 350, delay: 2.8 },
  { text: "Localisation (40+ Languages)", x: -200, y: -400, delay: 3.0 },
  { text: "JSON Parsing", x: 200, y: -400, delay: 3.2 },
  { text: "Testing", x: 0, y: 450, delay: 3.4 },
];

export default function Hero() {
  const phoneRef = useRef(null);
  const containerRef = useRef(null);
  const [device, setDevice] = useState("iphone");
  
  const [blockPositions, setBlockPositions] = useState<{ [key: number]: { x: number, y: number } }>(() => {
    const initial: { [key: number]: { x: number, y: number } } = {};
    appBlocks.forEach(b => { initial[b.id] = { x: b.x, y: b.y }; });
    return initial;
  });

  const handleDeviceToggle = () => {
    setDevice((prev) => {
      const nextDevice = prev === "iphone" ? "ipad" : "iphone";
      
      setBlockPositions((currentPos) => {
        const newPos = { ...currentPos };
        const isIpad = nextDevice === "ipad";
        const maxX = isIpad ? 380 : 160;
        const maxY = isIpad ? 540 : 480;
        
        appBlocks.forEach(b => {
           newPos[b.id] = {
             x: 10 + Math.random() * maxX,
             y: 50 + Math.random() * maxY,
           };
        });
        return newPos;
      });

      return nextDevice;
    });
  };

  return (
    <section className="px-6 md:px-10 lg:px-20 py-20 flex flex-col items-center overflow-hidden text-on-surface" ref={containerRef}>
      <div className="flex flex-col lg:flex-row gap-16 items-center w-full max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="flex-1 flex flex-col gap-6 items-start z-10">
          <div className="bg-primary-fixed text-primary px-4 py-2 rounded-full text-xs font-mono tracking-widest uppercase flex items-center gap-2">
            <span>✪</span> iOS DEVELOPER PORTFOLIO
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight leading-[1.1]">
            Architecting <br className="hidden md:block" /> <span className="text-primary">Scalable Apps</span> &<br className="hidden md:block" />Revenue Engines.
          </h1>
          <p className="font-body text-lg text-on-surface-variant max-w-xl leading-relaxed mt-2">
            Performance-driven iOS Developer specializing in Rapid App Scalability and Revenue Optimization. I architect StoreKit 2 IAP systems and Network-Adaptive Ad frameworks, having independently managed and deployed a portfolio of 10+ live applications.
          </p>
          
          <div className="flex flex-row gap-4 mt-4 w-full md:w-auto">
            <a href="#projects" className="bg-primary hover:bg-primary-container text-white px-8 py-4 rounded-xl font-bold transition-all shadow-subtle flex items-center justify-center flex-1 md:flex-none">
              View Projects <span className="ml-2">→</span>
            </a>
            <a href="#contact" className="bg-surface border border-outline-variant text-on-surface hover:bg-surface-container px-8 py-4 rounded-xl font-bold transition-all flex-1 md:flex-none flex items-center justify-center">
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-4 mt-8">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center font-bold text-white shadow-sm border-2 border-transparent">10+</div>
            </div>
            <p className="text-sm font-medium text-on-surface-variant">
              Successfully launched <span className="font-bold text-on-surface">10+ live applications</span>
            </p>
          </div>
        </div>

        {/* Right Content - Phone Mockup & Orbiting Skills */}
        <div className="flex-1 relative flex justify-center items-center w-full min-h-[750px] mt-10 lg:mt-0">
          
          {/* Orbiting Draggable Skills */}
          {orbitingSkills.map((skill, index) => {
             const targetX = device === "iphone" ? skill.x : skill.x * 1.5;
             const targetY = device === "iphone" ? skill.y : skill.y * 1.1;
             
             return (
              <motion.div
                key={index}
                drag
                dragConstraints={containerRef}
                dragElastic={0.2}
                whileDrag={{ scale: 1.1, cursor: "grabbing", zIndex: 50 }}
                initial={{ x: skill.x, y: skill.y }}
                animate={{
                  x: targetX,
                  y: [targetY, targetY - 15, targetY],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  x: { type: "spring", stiffness: 40, damping: 20 },
                }}
                style={{ top: "50%", left: "50%", margin: "-20px 0 0 -60px" }}
                className="absolute hidden lg:flex backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border text-sm font-bold cursor-grab z-0 whitespace-nowrap bg-white/90 border-outline-variant/30 text-primary"
              >
                {skill.text}
              </motion.div>
            );
          })}

          {/* Ambient Glowing Orbs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-10 pointer-events-none">
            <motion.div 
               animate={{ rotate: 360, scale: [1, 1.2, 1] }} 
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="absolute top-[20%] left-[20%] w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-[80px] opacity-60" 
            />
            <motion.div 
               animate={{ rotate: -360, scale: [1, 1.5, 1] }} 
               transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
               className="absolute bottom-[20%] right-[20%] w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-[80px] opacity-60" 
            />
          </div>

          {/* Liquid Glass Device Frame */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-20 flex items-center justify-center cursor-pointer group"
            onClick={handleDeviceToggle}
          >
            <motion.div
              animate={{ 
                width: device === "iphone" ? 360 : 560, 
                height: device === "iphone" ? 740 : 780,
                borderRadius: device === "iphone" ? 54 : 32
              }}
              transition={{ type: "spring", stiffness: 60, damping: 15 }}
              className="border-[2px] border-white/60 bg-black relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(255,255,255,0.1)] flex flex-col"
            >
               {/* Phone Wallpaper */}
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-80 mix-blend-screen scale-105 blur-[2px]" />
               
               {/* iPhone 15 Dynamic Island */}
               <motion.div 
                 animate={{
                   width: device === "iphone" ? 120 : 10,
                   height: device === "iphone" ? 34 : 10,
                   borderRadius: 20,
                   top: 14,
                 }}
                 className="absolute inset-x-0 mx-auto bg-black z-50 pointer-events-none shadow-xl border border-white/5"
               />
               
               {/* Screen Content */}
               <div 
                 className="flex-1 bg-transparent relative overflow-hidden p-6 pt-16"
                 ref={phoneRef}
               >
                  {appBlocks.map((block) => {
                     const targetX = blockPositions[block.id]?.x || block.x;
                     const targetY = blockPositions[block.id]?.y || block.y;

                     if (block.type === "widget-music") {
                       return (
                         <motion.div
                           key={block.id}
                           drag
                           dragConstraints={phoneRef}
                           initial={{ x: block.x, y: block.y }}
                           animate={{ x: targetX, y: targetY }}
                           className={`${block.size} absolute bg-white/20 backdrop-blur-xl rounded-[28px] border border-white/30 shadow-2xl p-4 flex flex-col justify-between group/widget cursor-grab active:cursor-grabbing`}
                         >
                            <div className="flex justify-between items-start">
                               <div className="w-12 h-12 bg-white rounded-lg overflow-hidden shadow-sm">
                                  <img src="https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80&w=100" alt="Album" className="w-full h-full object-cover" />
                               </div>
                               <span className="text-white text-xl">🎵</span>
                            </div>
                            <div>
                               <h4 className="text-white font-bold text-sm leading-tight">Today's Hits</h4>
                               <p className="text-white/60 text-[10px]">Apple Music Hits</p>
                            </div>
                            <button className="bg-white/90 py-1.5 rounded-full text-black text-[10px] font-bold flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-transform">
                               <span>▶</span> Play
                            </button>
                         </motion.div>
                       );
                     }

                     if (block.type === "widget-reminders") {
                        return (
                          <motion.div
                            key={block.id}
                            drag
                            dragConstraints={phoneRef}
                            initial={{ x: block.x, y: block.y }}
                            animate={{ x: targetX, y: targetY }}
                            className={`${block.size} absolute bg-white/20 backdrop-blur-xl rounded-[28px] border border-white/30 shadow-2xl p-4 flex flex-col cursor-grab active:cursor-grabbing`}
                          >
                             <div className="flex justify-between items-center mb-3">
                                <h4 className="text-white font-bold text-sm">Reminders</h4>
                                <span className="text-white font-bold text-lg">3</span>
                             </div>
                             <div className="flex flex-col gap-2.5">
                                {['Pick up contact...', 'Order plant food', 'Water Monstera'].map((task, i) => (
                                   <div key={i} className="flex items-center gap-2">
                                      <div className="w-3.5 h-3.5 rounded-full border border-white/40" />
                                      <span className="text-white/80 text-[10px] truncate">{task}</span>
                                   </div>
                                ))}
                             </div>
                          </motion.div>
                        );
                     }

                     return (
                        <motion.div
                          key={block.id}
                          drag
                          dragConstraints={phoneRef}
                          whileHover={{ y: -5 }}
                          initial={{ x: block.x, y: block.y }}
                          animate={{ x: targetX, y: targetY }}
                          className="absolute flex flex-col items-center gap-1.5 cursor-grab active:cursor-grabbing"
                        >
                           <div className={`${block.bg} w-14 h-14 rounded-[14px] flex items-center justify-center text-2xl shadow-lg border border-white/10 backdrop-blur-md`}>
                              {block.icon}
                           </div>
                           <span className="text-white text-[10px] font-medium tracking-wide">{block.name}</span>
                        </motion.div>
                     );
                  })}
               </div>
               
               {/* Home Indicator */}
               <div className="absolute bottom-2 inset-x-0 h-1.5 w-32 bg-white/40 rounded-full mx-auto z-50 pointer-events-none" />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
