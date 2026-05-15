export default function FeaturedWork() {
  const apps = [
    {
      name: "All Meat Recipes",
      desc: "Scalable architecture handling complex query filtering for thousands of data points.",
      link: "https://apps.apple.com/us/app/all-meat-recipes/id6760544693",
      tech: "Firestore",
      color: "bg-[#f2e6e6]",
      border: "border-red-100",
      innerBg: "bg-red-800/20",
      image: "https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80&w=300"
    },
    {
      name: "Mediterranean Diet",
      desc: "Comprehensive meal planning with robust data synchronization and offline support.",
      link: "https://apps.apple.com/us/app/all-mediterranean-diet-recipes/id6759240093",
      tech: "Core Data",
      color: "bg-[#e6f2e8]",
      border: "border-green-100",
      innerBg: "bg-green-800/20",
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=300"
    },
    {
      name: "Anti Inflammatory",
      desc: "Performance optimized recipe delivery using On-Demand Resources (ODR).",
      link: "https://apps.apple.com/us/app/anti-inflammatory-diet-recipe/id6760448837",
      tech: "ODR",
      color: "bg-[#f2efe6]",
      border: "border-yellow-100",
      innerBg: "bg-yellow-800/20",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=300"
    },
    {
      name: "African Recipes",
      desc: "A fully offline-capable experience built with custom caching solutions.",
      link: "https://apps.apple.com/us/app/african-recipes-offline-food/id6761056277",
      tech: "Kingfisher",
      color: "bg-[#f2ebe6]",
      border: "border-orange-100",
      innerBg: "bg-orange-800/20",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=300"
    },
    {
      name: "PCOS Diet Recipes",
      desc: "Health-focused app featuring a tailored UI and interactive meal trackers.",
      link: "https://apps.apple.com/us/app/pcos-diet-recipes/id6760650879",
      tech: "SwiftUI",
      color: "bg-[#f2e6ee]",
      border: "border-pink-100",
      innerBg: "bg-pink-800/20",
      image: "https://images.unsplash.com/photo-1498837167922-41c53bbfcd2d?auto=format&fit=crop&q=80&w=300"
    },
    {
      name: "Keto Diet: Meal Plan",
      desc: "Advanced monetization integration with AdMob and premium subscription walls.",
      link: "https://apps.apple.com/us/app/keto-diet-recipes-meal-plan/id6759555140",
      tech: "StoreKit 2",
      color: "bg-[#e6ebf2]",
      border: "border-blue-100",
      innerBg: "bg-blue-800/20",
      image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&q=80&w=300"
    }
  ];

  return (
    <section id="projects" className="px-6 md:px-10 lg:px-20 py-24 bg-surface max-w-7xl mx-auto w-full scroll-mt-24">
      <div className="flex flex-col gap-4 max-w-2xl mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-on-surface">Live Production Projects</h2>
        <p className="text-on-surface-variant text-lg">
          Deployed 10+ unique applications, managing full architecture and implementation. Here is the featured portfolio of recipe apps published by Edutainment Adventures Pvt Ltd.
        </p>
      </div>

      <div className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-primary text-xl">💼 </span>
          <h3 className="font-display text-2xl font-bold text-on-surface">Edutainment Adventures Pvt Ltd</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Salad Recipes */}
          <div className="card-level-1 p-6 flex flex-col gap-6">
            <div className="bg-[#e9f2eb] rounded-2xl h-80 w-full overflow-hidden flex items-center justify-center relative">
               <div className="w-48 h-[90%] bg-[#1a2e21] rounded-t-3xl border-8 border-[#0f1f14] shadow-2xl relative translate-y-8 flex flex-col">
                  <div className="absolute inset-x-0 top-6 bottom-0 bg-[#f9faf9] rounded-t-xl flex flex-col gap-3 p-4">
                     <div className="h-32 w-full rounded-lg bg-[url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=300')] bg-cover"></div>
                     <div className="h-4 bg-gray-200 rounded w-full mt-2"></div>
                     <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
               </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2 relative">
                <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-on-surface-variant">
                   APP STORE
                </div>
                <h4 className="font-display text-2xl font-bold text-on-surface absolute left-1/2 -translate-x-1/2 w-full text-center">Salad Recipes</h4>
                <a href="https://apps.apple.com/us/app/salad-recipes-healthy-diet/id6755809955" target="_blank" className="text-primary hover:opacity-80 font-bold z-10 relative">↗</a>
              </div>
              <p className="text-on-surface-variant text-sm mt-4 text-center md:text-left">
                Sole Developer - Architecture & Implementation. Premium glassmorphism UI with network-adaptive AdMob integration and enterprise-grade Kingfisher caching.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                {['SwiftUI', 'AdMob', 'Kingfisher', 'Glassmorphism'].map(tech => (
                  <span key={tech} className="bg-primary-fixed text-primary text-xs px-3 py-1.5 rounded-full font-mono font-bold">{tech}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Diabetic Diet Recipe */}
          <div className="card-level-1 p-6 flex flex-col gap-6">
            <div className="bg-[#f0e8e6] rounded-2xl h-80 w-full overflow-hidden flex items-center justify-center relative">
              <div className="w-44 h-[90%] bg-[#ffffff] rounded-[32px] border-[10px] border-[#2b1814] shadow-2xl overflow-hidden relative flex flex-col">
                 <div className="absolute top-0 inset-x-0 h-5 bg-[#2b1814] rounded-b-lg w-20 mx-auto z-10"></div>
                 <div className="h-1/2 bg-[url('https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=300')] bg-cover"></div>
                 <div className="p-4 space-y-2">
                    <div className="h-3 w-1/2 bg-red-200 rounded"></div>
                    <div className="h-8 w-full bg-gray-100 rounded-lg"></div>
                    <div className="h-8 w-full bg-gray-100 rounded-lg"></div>
                 </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2 relative">
                <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-on-surface-variant">
                   APP STORE
                </div>
                <h4 className="font-display text-2xl font-bold text-on-surface absolute left-1/2 -translate-x-1/2 w-full text-center whitespace-nowrap">Diabetic Diet</h4>
                <a href="https://apps.apple.com/us/app/diabetic-diet-recipe/id6760650743" target="_blank" className="text-primary hover:opacity-80 font-bold z-10 relative">↗</a>
              </div>
              <p className="text-on-surface-variant text-sm mt-4 text-center md:text-left">
                Built with advanced data management using Firestore Batch Merge. Highly optimized On-Demand Resources (ODR) drastically reduced initial app size.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                {['Firestore', 'ODR', 'UIKit', 'Combine'].map(tech => (
                  <span key={tech} className="bg-primary-fixed text-primary text-xs px-3 py-1.5 rounded-full font-mono font-bold">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* More Apps */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <span className="text-primary text-xl">🚀 </span>
          <h3 className="font-display text-2xl font-bold text-on-surface">More From Edutainment Adventures</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, index) => (
            <div key={index} className="card-level-1 p-4 pb-6 flex flex-col gap-4">
              <div className={`${app.color} rounded-xl h-40 w-full overflow-hidden flex items-end justify-center relative`}>
                 <div className={`w-[85%] h-[85%] bg-white rounded-t-xl shadow-xl flex flex-col overflow-hidden border ${app.border}`}>
                    <div className="h-20 w-full bg-gray-100" style={{backgroundImage: `url(${app.image})`, backgroundSize: 'cover'}}></div>
                    <div className="p-3 flex flex-col gap-1.5">
                       <div className={`h-2 w-3/4 ${app.innerBg} rounded-sm`}></div>
                       <div className="h-2 w-1/2 bg-gray-200 rounded-sm"></div>
                    </div>
                 </div>
              </div>
              <div className="flex-1 flex flex-col">
                <div className="text-[10px] font-bold tracking-widest text-on-surface-variant mb-1"> LIVE PRODUCTION</div>
                <h4 className="font-display text-lg font-bold text-on-surface mb-1">{app.name}</h4>
                <p className="text-on-surface-variant text-xs mb-4 flex-1">{app.desc}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="bg-primary-fixed text-primary text-[10px] px-2 py-1.5 rounded-md font-mono font-bold uppercase inline-block">{app.tech}</span>
                  <a href={app.link} target="_blank" className="text-primary hover:underline text-xs font-bold">App Store ↗</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
