export default function CaseStudy() {
  return (
    <section id="experience" className="px-6 md:px-10 lg:px-20 py-24 bg-surface max-w-7xl mx-auto w-full scroll-mt-24">
      <div className="mb-12">
        <div className="text-primary font-bold text-xs tracking-widest flex items-center gap-2 mb-4 uppercase">
          <span className="text-lg"></span> ARCHITECTURE CASE STUDY
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-on-surface mb-4">Scaling a Portfolio of 10+ iOS Applications</h2>
        <p className="text-on-surface-variant text-lg max-w-3xl leading-relaxed">
          A deep dive into the modular transformation and end-to-end customization of core codebases to deploy dozens of unique, highly-monetized applications published under Edutainment Adventures Pvt Ltd and LYTBLB Technology.
        </p>
      </div>

      {/* Main Hero Image */}
      <div className="w-full h-80 md:h-[450px] bg-gradient-to-br from-blue-50 to-indigo-50 rounded-[32px] overflow-hidden mb-16 relative flex items-center justify-center border border-outline-variant/30">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200')] bg-cover opacity-10 mix-blend-multiply"></div>
         {/* A beautiful abstract representation of many apps */}
         <div className="relative z-10 w-full max-w-4xl h-full flex items-center justify-center overflow-hidden">
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 w-[120%] px-8 opacity-80 transform -rotate-6 scale-110">
               {[...Array(15)].map((_, i) => (
                  <div key={i} className={`aspect-square bg-white rounded-2xl shadow-xl border border-gray-100 flex items-center justify-center overflow-hidden animate-pulse`} style={{ animationDelay: `${i * 150}ms` }}>
                     <div className={`w-3/4 h-3/4 rounded-xl ${['bg-blue-100', 'bg-green-100', 'bg-red-100', 'bg-yellow-100', 'bg-purple-100'][i % 5]} flex items-center justify-center`}>
                        <div className={`w-8 h-8 rounded-full ${['bg-blue-300', 'bg-green-300', 'bg-red-300', 'bg-yellow-300', 'bg-purple-300'][i % 5]}`}></div>
                     </div>
                  </div>
               ))}
            </div>
            {/* Center glass overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="bg-white/70 backdrop-blur-xl border border-white p-8 md:p-12 rounded-3xl shadow-2xl text-center">
                  <div className="text-5xl md:text-6xl font-display font-bold text-primary mb-2">10+</div>
                  <div className="text-sm font-bold text-on-surface-variant tracking-widest uppercase">Live Applications</div>
               </div>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 flex flex-col gap-12">
          {/* Challenge */}
          <div>
            <h3 className="font-display text-2xl font-bold text-primary mb-6">The Challenge</h3>
            <div className="card-level-1 p-8 text-on-surface-variant leading-relaxed shadow-sm">
              Deploying and maintaining 10+ unique applications required a scalable approach to UI themes, database configurations, and monetization logic. Manual deployments were prone to errors, and app sizes were ballooning due to high-resolution assets embedded in the bundles.
            </div>
          </div>

          {/* Solution */}
          <div>
            <h3 className="font-display text-2xl font-bold text-primary mb-6">The Solution</h3>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              I solely managed the modular transformation of the core codebases. By engineering Environment-based Configs, I automated the management of test ads and live environments, effectively reducing deployment errors to zero.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#151c24] rounded-3xl aspect-square flex items-center justify-center p-6 overflow-hidden relative shadow-inner">
                 <div className="text-center z-10">
                    <div className="text-6xl font-bold text-blue-400 mb-2">100%</div>
                    <div className="text-sm font-mono text-white/70">Reduction in Deployment Errors</div>
                 </div>
                 <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
              </div>
              <div className="bg-[#151c24] rounded-3xl aspect-square flex items-center justify-center p-6 overflow-hidden relative shadow-inner">
                 <div className="text-center z-10">
                    <div className="text-6xl font-bold text-green-400 mb-2">10+</div>
                    <div className="text-sm font-mono text-white/70">Apps Deployed & Customized</div>
                 </div>
                 <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Technical Depth */}
          <div>
            <h3 className="font-display text-2xl font-bold text-primary mb-6">Technical Depth</h3>
            <div className="flex flex-col gap-4">
              <div className="bg-surface-container rounded-2xl p-6 flex gap-4 border border-surface-dim/30">
                <span className="text-primary mt-1 text-xl">🚀</span>
                <div>
                  <h4 className="font-bold text-on-surface mb-2">Adaptive Monetization Framework</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">Implemented custom logic for AdMob (Interstitial, Rewarded, Banner) where UI behavior and loading states adapt in real-time to network connectivity, ensuring a lag-free user experience.</p>
                </div>
              </div>
              <div className="bg-surface-container rounded-2xl p-6 flex gap-4 border border-surface-dim/30">
                <span className="text-primary mt-1 text-xl">🗄️</span>
                <div>
                  <h4 className="font-bold text-on-surface mb-2">Advanced Data Management & Caching</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">Utilized Firestore Batch Merge and complex query filtering for minimal latency. Integrated Kingfisher and a custom PDF-caching layer to reduce data consumption and enable instant loading.</p>
                </div>
              </div>
              <div className="bg-surface-container rounded-2xl p-6 flex gap-4 border border-surface-dim/30">
                <span className="text-primary mt-1 text-xl">✨</span>
                <div>
                  <h4 className="font-bold text-on-surface mb-2">High-Converting "Premium" UI</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">Designed high-converting paywalls and interfaces using Glassmorphism and adaptive layouts, maintaining a consistent 99.9% crash-free rate across the portfolio.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-1">
          <div className="card-level-1 p-8 sticky top-24 flex flex-col gap-10">
            <div>
              <h4 className="font-display font-bold text-xl text-on-surface mb-4">Core Frameworks</h4>
              <div className="flex flex-wrap gap-2">
                {['StoreKit 2', 'AdMob', 'Firestore', 'On-Demand Resources (ODR)', 'Kingfisher', 'SwiftUI', 'UIKit'].map(tech => (
                  <span key={tech} className="bg-primary-fixed text-primary text-xs px-3 py-1.5 rounded-full font-mono font-bold">{tech}</span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-display font-bold text-xl text-on-surface mb-2">Role</h4>
              <p className="text-on-surface-variant text-sm">Software Engineer L2 (iOS)</p>
            </div>
            
            <div>
              <h4 className="font-display font-bold text-xl text-on-surface mb-2">Company / Publisher</h4>
              <p className="text-on-surface-variant text-sm">LYTBLB Technology / Edutainment Adventures Pvt Ltd</p>
            </div>
            
            <a href="mailto:prabhatpatel301@gmail.com" className="w-full bg-primary hover:bg-primary-container text-white py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 mt-4 shadow-subtle">
              Contact for Details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
