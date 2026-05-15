"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const appBlocks = [
  // Original squares
  { id: 1, name: "Xcode", icon: "🛠️", color: "bg-blue-500", size: "w-20 h-20", x: 20, y: 20, shape: "square" },
  { id: 2, name: "Firebase", icon: "🔥", color: "bg-orange-500", size: "w-16 h-16", x: 120, y: 50, shape: "square" },
  { id: 3, name: "SwiftUI", icon: "🎨", color: "bg-indigo-500", size: "w-24 h-24", x: 40, y: 150, shape: "square" },
  { id: 4, name: "Swift", icon: "🦅", color: "bg-orange-600", size: "w-16 h-16", x: 180, y: 180, shape: "square" },
  { id: 5, name: "CoreData", icon: "🗄️", color: "bg-gray-700", size: "w-20 h-20", x: 30, y: 300, shape: "square" },
  { id: 6, name: "SwiftData", icon: "💾", color: "bg-blue-600", size: "w-[72px] h-[72px]", x: 150, y: 320, shape: "square" },
  { id: 7, name: "Core ML", icon: "🧠", color: "bg-purple-600", size: "w-20 h-20", x: 100, y: 420, shape: "square" },
  { id: 8, name: "MapKit", icon: "🗺️", color: "bg-green-600", size: "w-16 h-16", x: 20, y: 440, shape: "square" },
  { id: 9, name: "ARKit", icon: "🕶️", color: "bg-teal-500", size: "w-16 h-16", x: 200, y: 400, shape: "square" },
  
  // Circles
  { id: 10, name: "SF Symbols", icon: "🔣", color: "bg-cyan-600", size: "w-20 h-20", x: 180, y: 80, shape: "circle" },
  { id: 11, name: "Apple Dev", icon: "🧑‍💻", color: "bg-slate-600", size: "w-24 h-24", x: 10, y: 220, shape: "circle" },
  { id: 12, name: "App Store", icon: "📈", color: "bg-sky-500", size: "w-20 h-20", x: 180, y: 520, shape: "circle" },
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
      
      // Shuffle positions randomly based on the new device bounds
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
            Performance-driven iOS Developer specializing in Rapid App Scalability and Revenue Optimization. I architect StoreKit 2 IAP systems and Network-Adaptive Ad frameworks, having independently managed and deployed a portfolio of 10+ live applications (including Edutainment Adventures Pvt Ltd).
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

          {/* Ambient Glowing Orbs behind the phone for Glassmorphism Effect */}
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
            <motion.div 
               animate={{ scale: [1, 1.3, 1] }} 
               transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-50" 
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
                width: device === "iphone" ? 320 : 540, 
                height: device === "iphone" ? 650 : 720,
                borderRadius: device === "iphone" ? 44 : 24
              }}
              transition={{ type: "spring", stiffness: 60, damping: 15 }}
              className="border-[2px] border-white/60 bg-white/20 backdrop-blur-2xl relative overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_0_20px_rgba(255,255,255,0.5)] flex flex-col"
            >
               {/* iPhone 15 Dynamic Island / iPad Camera */}
               <motion.div 
                 animate={{
                   width: device === "iphone" ? 100 : 8,
                   height: device === "iphone" ? 30 : 8,
                   borderRadius: device === "iphone" ? 20 : 8,
                   top: device === "iphone" ? 12 : 12,
                 }}
                 className="absolute inset-x-0 mx-auto bg-black/60 backdrop-blur-md z-50 pointer-events-none shadow-inner border border-white/10"
               />
               
               {/* Screen Content - Liquid Glass Physics Box */}
               <div 
                 className="flex-1 bg-transparent relative overflow-hidden p-4 pt-12"
                 ref={phoneRef}
               >
                  <div className="text-white/40 text-[10px] font-mono tracking-widest text-center mb-2 uppercase pointer-events-none">Interactive Sandbox</div>
                  

                  {appBlocks.map((block) => {
                     const targetX = blockPositions[block.id]?.x || block.x;
                     const targetY = blockPositions[block.id]?.y || block.y;

                     return (
                        <motion.div
                          key={block.id}
                          onClick={(e) => e.stopPropagation()}
                          drag
                          dragConstraints={phoneRef}
                          dragElastic={0.6}
                          dragMomentum={true}
                          whileHover={{ scale: 1.05 }}
                          whileDrag={{ scale: 1.1, zIndex: 100 }}
                          initial={{ x: block.x, y: block.y }}
                          animate={{ 
                            x: targetX,
                            y: [targetY, targetY - 10, targetY],
                          }}
                          transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            x: { type: "spring", stiffness: 50, damping: 15 }
                          }}
                          className={`absolute ${block.size} ${block.color} ${block.shape === 'circle' ? 'rounded-full' : 'rounded-2xl'} shadow-xl flex flex-col items-center justify-center cursor-grab active:cursor-grabbing border-2 border-white/20 overflow-hidden`}
                        >
                          <span className={`${block.shape === 'circle' ? 'text-xl' : 'text-2xl'} mb-1`}>{block.icon}</span>
                          <span className="text-[9px] font-bold text-white tracking-wide text-center leading-tight px-1">{block.name}</span>
                        </motion.div>
                     );
                  })}
               </div>
               
               {/* Home Indicator */}
               <motion.div 
                 animate={{
                   width: device === "iphone" ? 96 : 160,
                 }}
                 className="absolute bottom-2 inset-x-0 h-1 bg-white/40 rounded-full mx-auto z-50 pointer-events-none"
               />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
