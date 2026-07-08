export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-[#121115]">
      {/* Background Grid Pattern ảo diệu của SaaS */}
      <div className="absolute inset-0 bg-[radial-gradient(#2c2936_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none"></div>

      {/* <div class="hero-inner container"> */}
      <div className="container mx-auto px-6 lg:px-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* <div class="hero-content"> */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
          
          {/* <div class="hero-badge"> */}
          <div className="inline-flex items-center space-x-2 bg-[#1d1b22] border border-gray-800/80 rounded-full px-4 py-1.5 text-xs text-gray-400 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-medium">Version 2.0 is Live</span>
          </div>

          {/* <h1> */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
            Analytics that<br />
            <span className="bg-gradient-to-r from-[#ff5a5f] to-[#ff8a7a] bg-clip-text text-transparent">
              move the needle
            </span>
          </h1>

          {/* <p class="hero-desc"> */}
          <p className="text-gray-400 text-base md:text-lg max-w-xl font-light leading-relaxed">
            Ship faster with real-time product analytics, session replay, and feature flags — all in one platform built for engineering teams.
          </p>

          {/* <div class="hero-cta"> */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <a 
              href="#" 
              onClick={(e) => e.preventDefault()} 
              className="group flex items-center justify-center bg-[#ff5a5f] hover:bg-[#ff444a] text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-red-500/20 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Get Started Free 
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            
            <a 
              href="#" 
              onClick={(e) => e.preventDefault()} 
              className="flex items-center justify-center space-x-3 bg-[#1d1b22] hover:bg-[#25222b] border border-gray-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              <span>Watch Demo</span>
            </a>
          </div>

          {/* <div class="trusted-row"> */}
          <div className="pt-8 border-t border-gray-800/60">
            <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-4">
              Trusted by 2,400+ teams
            </p>
            {/* <div class="trusted-logos"> */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-gray-500">
              <span className="hover:text-gray-400 transition-colors cursor-pointer flex items-center gap-1">▪ Vercel</span>
              <span className="hover:text-gray-400 transition-colors cursor-pointer flex items-center gap-1">▪ Linear</span>
              <span className="hover:text-gray-400 transition-colors cursor-pointer flex items-center gap-1">▪ Raycast</span>
              <span className="hover:text-gray-400 transition-colors cursor-pointer flex items-center gap-1">▪ Resend</span>
              <span className="hover:text-gray-400 transition-colors cursor-pointer flex items-center gap-1">▪ Supabase</span>
            </div>
          </div>
        </div>

        {/* <div class="hero-mockup"> */}
        <div className="lg:col-span-5 relative w-full pt-6 lg:pt-0">
          <div className="absolute inset-0 bg-[#ff5a5f]/10 blur-[100px] rounded-full pointer-events-none"></div>

          {/* <div class="mockup-window"> */}
          <div className="relative bg-[#16141a] border border-gray-800 rounded-2xl shadow-2xl overflow-hidden w-full transition-all duration-500 hover:border-gray-700/80">
            
            {/* <div class="mockup-toolbar"> */}
            <div className="flex items-center space-x-2 px-4 py-3 bg.bg-[#111014] border-b border-gray-800/60">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
            </div>

            {/* <div class="mockup-body"> */}
            <div className="p-5 md:p-6 space-y-6">
              
              {/* <div class="mockup-metric-row"> */}
              <div className="grid grid-cols-3 gap-3">
                {/* <div class="mockup-metric"> 1 */}
                <div className="bg-[#1d1b22] border border-gray-800/40 p-3 rounded-xl flex flex-col space-y-1">
                  <div className="text-[10px] text-gray-500 font-semibold tracking-wider uppercase">Page Views</div>
                  <div className="text-xl font-bold text-white">24.8K</div>
                  <div className="text-[11px] font-semibold text-emerald-500">+12.3%</div>
                </div>
                {/* <div class="mockup-metric"> 2 */}
                <div className="bg-[#1d1b22] border border-gray-800/40 p-3 rounded-xl flex flex-col space-y-1">
                  <div className="text-[10px] text-gray-500 font-semibold tracking-wider uppercase">Conversions</div>
                  <div className="text-xl font-bold text-white">1,847</div>
                  <div className="text-[11px] font-semibold text-emerald-500">+8.1%</div>
                </div>
                {/* <div class="mockup-metric"> 3 */}
                <div className="bg-[#1d1b22] border border-gray-800/40 p-3 rounded-xl flex flex-col space-y-1">
                  <div className="text-[10px] text-gray-500 font-semibold tracking-wider uppercase">Bounce Rate</div>
                  <div className="text-xl font-bold text-white">32%</div>
                  <div className="text-[11px] font-semibold text-rose-500">-4.2%</div>
                </div>
              </div>

              {/* <div class="mockup-chart"> */}
              <div className="bg-[#1d1b22] border border-gray-800/40 p-4 rounded-xl space-y-3">
                <div className="text-xs text-gray-400 font-medium">Traffic — Last 30 days</div>
                <div className="relative w-full h-24 pt-2">
                  <svg viewBox="0 0 300 60" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                    <defs>
                      <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(255,90,95,0.2)"></stop>
                        <stop offset="100%" stopColor="rgba(255,90,95,0)"></stop>
                      </linearGradient>
                    </defs>
                    <path d="M0 50 Q20 45 40 40 T80 30 T120 35 T160 20 T200 25 T240 15 T280 10 T300 5 V60 H0Z" fill="url(#lineGrad)"></path>
                    <path d="M0 50 Q20 45 40 40 T80 30 T120 35 T160 20 T200 25 T240 15 T280 10 T300 5" fill="none" stroke="#ff5a5f" strokeWidth="2.5" strokeLinecap="round"></path>
                  </svg>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}