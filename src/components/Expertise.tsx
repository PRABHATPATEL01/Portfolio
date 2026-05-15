export default function Expertise() {
  return (
    <section id="skills" className="px-6 md:px-10 lg:px-20 py-24 bg-surface max-w-7xl mx-auto w-full border-t border-outline-variant/30 scroll-mt-24">
      <div className="mb-16 max-w-2xl">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-on-surface mb-4">Technical Expertise & Core Skills</h2>
        <p className="text-on-surface-variant text-lg">
          Expert in high-performance iOS UI/UX, advanced monetization engineering, and scalable backend integrations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {/* Core iOS */}
        <div className="md:col-span-2 card-level-1 p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6 text-primary font-display font-bold text-xl">
              <span className="text-2xl"> 📱</span> iOS Development Core
            </div>
            <div className="flex flex-wrap gap-2 mb-8">
              {['Swift', 'SwiftUI', 'UIKit', 'Core Data', 'Combine', 'Multi-threading (GCD/Operations)'].map(skill => (
                <span key={skill} className="bg-primary-fixed text-primary px-4 py-2 rounded-full font-mono text-sm font-bold">{skill}</span>
              ))}
            </div>
          </div>
          <div className="h-48 rounded-xl bg-[#2a303c] overflow-hidden relative shadow-inner">
             {/* Fake code block image */}
             <div className="absolute inset-0 bg-[#1e232d] p-6 font-mono text-xs md:text-sm text-blue-300/80 leading-relaxed opacity-80">
                <span className="text-[#c678dd]">import</span> <span className="text-[#e5c07b]">StoreKit</span><br/><br/>
                <span className="text-[#c678dd]">final class</span> <span className="text-[#e5c07b]">StoreKitManager</span> {'{'}<br/>
                &nbsp;&nbsp;<span className="text-[#c678dd]">func</span> <span className="text-[#61afef]">purchase</span>(_ product: <span className="text-[#e5c07b]">Product</span>) <span className="text-[#c678dd]">async throws</span> -&gt; <span className="text-[#e5c07b]">Transaction</span>? {'{'}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#c678dd]">let</span> result = <span className="text-[#c678dd]">try async</span> product.<span className="text-[#61afef]">purchase</span>()<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#c678dd]">switch</span> result {'{'}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#c678dd]">case</span> .<span className="text-[#d19a66]">success</span>(<span className="text-[#c678dd]">let</span> verification):<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#c678dd]">return try</span> <span className="text-[#61afef]">checkVerified</span>(verification)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#c678dd]">case</span> .<span className="text-[#d19a66]">userCancelled</span>, .<span className="text-[#d19a66]">pending</span>:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#c678dd]">return nil</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;@unknown <span className="text-[#c678dd]">default</span>:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#c678dd]">return nil</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br/>
                &nbsp;&nbsp;{'}'}<br/>
                {'}'}
             </div>
             <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#1e232d] to-transparent"></div>
          </div>
        </div>

        {/* Monetization & Ads */}
        <div className="card-level-1 p-8">
          <div className="flex items-center gap-3 mb-8 text-on-surface-variant font-display font-bold text-lg">
            <span>💰</span> Monetization & Ads
          </div>
          <div className="flex flex-col gap-6">
            {[
              { name: 'StoreKit 2', level: 'IAP/Subs' },
              { name: 'Google AdMob', level: 'Expert' },
              { name: 'Stripe', level: 'Integration' },
              { name: 'Adaptive UI', level: 'Ads Design' }
            ].map(arch => (
              <div key={arch.name} className="flex justify-between items-center pb-4 border-b border-outline-variant/20 last:border-0 last:pb-0">
                <span className="font-bold text-on-surface">{arch.name}</span>
                <span className="bg-surface-container-high text-on-surface-variant text-[10px] uppercase tracking-wider px-2 py-1.5 rounded-md font-bold">{arch.level}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Back-end / Cloud */}
        <div className="card-level-1 p-8 flex flex-col gap-4">
          <div className="flex items-center gap-3 mb-4 text-on-surface-variant font-display font-bold text-lg">
            <span>🔥</span> Advanced Backend
          </div>
          {[
            { icon: '🗄️', name: 'Firestore (Batch/Merge)' },
            { icon: '📊', name: 'Analytics/Crashlytics' },
            { icon: '⚙️', name: 'Remote Config & Auth' }
          ].map(item => (
            <div key={item.name} className="flex items-center gap-4 bg-surface-container rounded-xl p-4 font-bold text-on-surface border border-white">
              <span className="text-xl">{item.icon}</span> {item.name}
            </div>
          ))}
        </div>

        {/* Infrastructure & UI */}
        <div className="md:col-span-2 card-level-1 p-8">
          <div className="flex items-center gap-3 mb-8 text-on-surface-variant font-display font-bold text-lg">
            <span>✨</span> Infrastructure & High-Performance UI
          </div>
          <div className="flex flex-wrap gap-4">
            {[
              { name: 'Glassmorphism Design' },
              { name: 'Kingfisher / PDF Caching' },
              { name: 'On-Demand Resources (ODR)' },
              { name: 'App Store Connect' },
              { name: 'CI/CD Basics' },
              { name: 'CocoaPods / Git' }
            ].map(tool => (
               <div key={tool.name} className="flex items-center gap-2 bg-surface-container px-4 py-3 rounded-lg border border-white shadow-sm font-medium text-on-surface-variant whitespace-nowrap">
                  <div className="w-2 h-2 rounded-full bg-primary"></div> {tool.name}
               </div>
            ))}
          </div>
        </div>
      </div>

      {/* Education */}
      <div>
        <div className="flex items-center gap-3 mb-8 text-on-surface-variant font-display font-bold text-xl">
          <span className="text-primary">🎓</span> Education
        </div>
        <div className="flex flex-col gap-6">
          <div className="card-level-1 p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 rounded-full bg-primary-fixed text-primary flex items-center justify-center text-2xl shrink-0">
                📚
              </div>
              <div>
                <h4 className="font-display font-bold text-xl text-on-surface mb-1">Bachelor of Technology in Information Technology</h4>
                <p className="text-on-surface-variant mb-4">Dr. A.P.J. Abdul Kalam Technical University, Lucknow, India</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-surface-container-high text-on-surface-variant text-xs px-3 py-1.5 rounded-md font-bold">CGPA: 8.2/10.0</span>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-high text-on-surface-variant px-5 py-2.5 rounded-lg font-bold text-sm shrink-0 whitespace-nowrap self-start md:self-auto border border-white">
              2020 — 2024
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
