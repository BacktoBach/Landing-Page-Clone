import { useState } from 'react'

// =======================================================
// 1. UTILITY COMPONENTS (Các component nhỏ dùng chung)
// =======================================================
const CheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ff5a5f" strokeWidth="2.5" className="shrink-0">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
)

// =======================================================
// 2. MOCKUP GRAPHICS (Các khối giao diện mô phỏng)
// =======================================================
function DashboardMockup() {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#1d1b22] border border-gray-800/40 p-3 rounded-xl">
          <div className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">Active Users</div>
          <div className="text-xl font-bold text-white mt-1">3,842</div>
          <div className="text-xs font-semibold text-emerald-500 mt-0.5">+12.3%</div>
        </div>
        <div className="bg-[#1d1b22] border border-gray-800/40 p-3 rounded-xl">
          <div className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">Conversion</div>
          <div className="text-xl font-bold text-white mt-1">12.4%</div>
          <div className="text-xs font-semibold text-emerald-500 mt-0.5">+2.1%</div>
        </div>
        <div className="bg-[#1d1b22] border border-gray-800/40 p-3 rounded-xl">
          <div className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">Churn</div>
          <div className="text-xl font-bold text-white mt-1">1.8%</div>
          <div className="text-xs font-semibold text-rose-500 mt-0.5">-0.4%</div>
        </div>
      </div>
      <div className="bg-[#1d1b22] border border-gray-800/40 p-4 rounded-xl space-y-3">
        <div className="text-xs text-gray-400 font-medium">Revenue — Last 7 days</div>
        <div className="w-full h-24">
          <svg viewBox="0 0 400 80" preserveAspectRatio="none" className="w-full h-full overflow-visible">
            <defs>
              <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(255,90,95,0.2)"></stop>
                <stop offset="100%" stopColor="rgba(255,90,95,0)"></stop>
              </linearGradient>
            </defs>
            <path d="M0 60 C40 55 60 40 100 35 S160 30 200 20 S280 25 320 15 S380 10 400 5 V80 H0Z" fill="url(#areaGrad)"></path>
            <path d="M0 60 C40 55 60 40 100 35 S160 30 200 20 S280 25 320 15 S380 10 400 5" fill="none" stroke="#ff5a5f" strokeWidth="2"></path>
            <circle cx="320" cy="15" r="4" fill="#ff5a5f" stroke="#1d1b22" strokeWidth="2"></circle>
          </svg>
        </div>
      </div>
    </div>
  )
}

function FunnelsMockup() {
  const steps = [
    { label: 'Landing Page', val: '12,480', w: '100%', drop: '—', color: 'bg-[#ff5a5f]' },
    { label: 'Sign Up Started', val: '8,736', w: '70%', drop: '-30%', color: 'bg-[#ff5a5f]' },
    { label: 'Email Verified', val: '6,115', w: '49%', drop: '-30%', color: 'bg-amber-500' },
    { label: 'Onboarding Done', val: '3,670', w: '29%', drop: '-40%', color: 'bg-amber-500' },
    { label: 'First Action', val: '2,569', w: '20.5%', drop: '-30%', color: 'bg-emerald-500' }
  ];
  return (
    <div className="p-6 space-y-4">
      {steps.map((s, i) => (
        <div key={i} className="flex items-center justify-between text-xs font-medium">
          <div className="w-[85%] space-y-1.5">
            <div className="flex justify-between text-gray-400"><span>{s.label}</span><span className="text-white font-bold">{s.val}</span></div>
            <div className="w-full h-2 bg-[#1d1b22] rounded-full overflow-hidden">
              <div className={`h-full ${s.color} rounded-full`} style={{ width: s.w }}></div>
            </div>
          </div>
          <div className={`text-right font-bold w-[12%] ${s.drop.startsWith('-') ? 'text-rose-500' : 'text-gray-600'}`}>{s.drop}</div>
        </div>
      ))}
    </div>
  )
}

function SdkMockup() {
  return (
    <div className="p-6 space-y-4 font-mono text-[13px] leading-relaxed text-gray-300">
      <div className="text-gray-500">// Install: npm i @quantix/sdk</div>
      <div><span className="text-purple-400">import</span> {'{'} Quantix {'}'} <span className="text-purple-400">from</span> <span className="text-emerald-400">'@quantix/sdk'</span></div>
      <div>
        <span className="text-purple-400">const</span> qx = <span className="text-purple-400">new</span> <span className="text-blue-400">Quantix</span>({'{'}<br />
        &nbsp;&nbsp;apiKey: <span className="text-emerald-400">'qx_live_k8x2...'</span>,<br />
        &nbsp;&nbsp;autocapture: <span className="text-purple-400">true</span>,<br />
        &nbsp;&nbsp;sessionReplay: <span className="text-purple-400">true</span>,<br />
        {'}'})
      </div>
      <div className="text-gray-500 pt-2">// Track custom events</div>
      <div>qx.<span className="text-blue-400">track</span>(<span className="text-emerald-400">'checkout'</span>, {'{'} value: <span className="text-amber-500">49.99</span>, plan: <span className="text-emerald-400">'pro'</span> {'}'})</div>
      <div className="border-t border-gray-800/80 pt-4 mt-2">
        <div className="text-[11px] text-gray-500 font-semibold mb-1.5 uppercase">Output</div>
        <div className="flex items-center space-x-2 text-emerald-400 text-xs bg-[#1d1b22] px-3 py-2 rounded-lg border border-gray-800/40 w-fit">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
          <span>Event tracked in 8ms — 200 OK</span>
        </div>
      </div>
    </div>
  )
}

function ReplayMockup() {
  return (
    <div className="p-4 space-y-4">
      <div className="bg-[#1d1b22] px-4 py-2.5 rounded-xl flex justify-between items-center text-xs">
        <span className="flex items-center gap-2 text-rose-500 font-semibold"><span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span> Recording</span>
        <span className="text-gray-500 font-medium">02:34 / 05:12</span>
      </div>
      <div className="relative border border-gray-800 bg-[#121115] rounded-xl p-4 min-h-[140px] flex flex-col justify-between">
        <div className="h-3 w-24 bg-gray-800 rounded-full"></div>
        <div className="space-y-2 py-3">
          <div className="h-2.5 w-full bg-gray-800/40 rounded-full"></div>
          <div className="h-2.5 w-5/6 bg-gray-800/40 rounded-full"></div>
        </div>
        <div className="flex gap-2">
          <div className="h-6 w-16 bg-gray-800 rounded-lg"></div>
          <div className="h-6 w-16 bg-[#ff5a5f]/20 rounded-lg border border-[#ff5a5f]/20"></div>
        </div>
        <div className="absolute top-1/2 left-2/3 w-3 h-3 bg-white/40 border border-white rounded-full shadow-lg pointer-events-none transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <div className="flex flex-wrap gap-2 text-[11px] font-semibold text-gray-400">
        <span className="bg-[#1d1b22] border border-gray-800/40 px-2 py-1 rounded-md flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-[#ff5a5f] rounded-full"></span> click</span>
        <span className="bg-[#1d1b22] border border-gray-800/40 px-2 py-1 rounded-md flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> scroll</span>
        <span className="bg-[#1d1b22] border border-gray-800/40 px-2 py-1 rounded-md flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-rose-500 rounded-full"></span> rage_click</span>
      </div>
    </div>
  )
}

function PrivacyMockup() {
  const items = [
    { t: 'GDPR Compliant', d: 'Full compliance with European regulations', icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path> },
    { t: 'No Cookies', d: 'Cookieless tracking — no annoying banners', icon: <> <circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line> </> },
    { t: 'SOC 2 Type II', d: 'Enterprise-grade security certification', icon: <> <rect x="3" y="11" width="18" height="11" rx="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path> </> },
    { t: 'EU Hosting', d: 'Data residency in Frankfurt, Germany', icon: <> <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle> </> }
  ];
  return (
    <div className="p-6 grid grid-cols-2 gap-4">
      {items.map((p, i) => (
        <div key={i} className="bg-[#1d1b22] border border-gray-800/40 p-4 rounded-xl space-y-2">
          <div className="w-7 h-7 bg-[#121115] rounded-lg border border-gray-800 flex items-center justify-center text-[#ff5a5f]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{p.icon}</svg>
          </div>
          <h4 className="text-sm font-bold text-white tracking-tight">{p.t}</h4>
          <p className="text-[11px] text-gray-500 font-light leading-relaxed">{p.d}</p>
        </div>
      ))}
    </div>
  )
}

// =======================================================
// 3. STATIC CONFIGURATIONS (Cấu hình dữ liệu tĩnh bên ngoài)
// =======================================================
const TABS_CONFIG = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'funnels', label: 'Funnels' },
  { id: 'sdk', label: 'SDK' },
  { id: 'replay', label: 'Session Replay' },
  { id: 'privacy', label: 'Privacy' },
]

const FEATURES_DATA = {
  dashboard: {
    icon: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 12 A9 9 0 1 1 12 3M21 3v9h-9"></path></svg>,
    title: 'Real-Time Dashboard',
    desc: 'Watch your metrics update live with sub-second latency. Custom widgets, drag-and-drop layout, and instant sharing with your team.',
    points: ['Sub-second data refresh', 'Drag-and-drop widgets', 'Scheduled email reports'],
    Mockup: DashboardMockup
  },
  funnels: {
    icon: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 20V10M18 20V4M6 20v-4"></path></svg>,
    title: 'Funnel Analytics',
    desc: 'Identify exactly where users drop off and why. Build funnels in seconds and correlate drop-off with user segments.',
    points: ['Visual drop-off analysis', 'Segment correlation', 'Historical comparison'],
    Mockup: FunnelsMockup
  },
  sdk: {
    icon: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="16 18 22 12 16 6 8 6 2 12 8 18"></polyline></svg>,
    title: 'One-Line SDK',
    desc: 'Drop in a single script tag or npm package. Auto-capture pageviews, clicks, and custom events out of the box.',
    points: ['Under 4KB gzipped', 'Zero config autocapture', 'TypeScript-first API'],
    Mockup: SdkMockup
  },
  replay: {
    icon: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4l3 3"></path></svg>,
    title: 'Session Replay',
    desc: 'See exactly what your users see. Replay sessions with pixel-perfect accuracy and zero performance impact on your app.',
    points: ['Pixel-perfect playback', 'Console log capture', 'Rage click detection'],
    Mockup: ReplayMockup
  },
  privacy: {
    icon: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>,
    title: 'Privacy First',
    desc: 'GDPR and CCPA compliant out of the box. Cookieless tracking, automatic PII masking, and EU hosting available.',
    points: ['No cookie banners needed', 'EU data residency', 'SOC 2 Type II certified'],
    Mockup: PrivacyMockup
  }
}

// =======================================================
// 4. MAIN COMPONENT (Thành phần chính hiển thị)
// =======================================================
export default function Features() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const currentFeature = FEATURES_DATA[activeTab]
  if (!currentFeature) return null

  const { icon: IconComponent, Mockup } = currentFeature

  return (
    <section className="py-20 md:py-28 bg-[#121115]" id="features" data-aos="fade-up">
      <div className="container mx-auto px-6 lg:px-24">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-[#ff5a5f] text-xs uppercase tracking-widest font-bold mb-3">Features</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Everything you need.<br />Nothing you don't.
          </h2>
          <p className="text-gray-400 text-base md:text-lg font-light max-w-xl mx-auto">
            A complete analytics toolkit that replaces five tools in your stack.
          </p>
        </div>

        {/* Tab List */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-3xl mx-auto mb-16 p-1.5 bg-[#16141a] border border-gray-800/80 rounded-2xl" role="tablist">
          {TABS_CONFIG.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 cursor-pointer
                ${activeTab === tab.id 
                  ? 'bg-[#ff5a5f] text-white shadow-lg shadow-red-500/10' 
                  : 'text-gray-400 hover:text-white'
                }
              `}
              role="tab"
              aria-selected={activeTab === tab.id}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Layout Panel */}
        <div className="relative min-h-[400px]">
          {/* ĐÃ SỬA: Thay thế animate-fadeIn bằng transition-all nhẹ nhàng của Tailwind để hợp tác tốt với AOS */}
          <div key={activeTab} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center transition-all duration-500 opacity-100">
            
            {/* Left Column: Text Content */}
            <div className="lg:col-span-5 space-y-6">
              <div className="w-11 h-11 bg-[#1d1b22] border border-gray-800 rounded-xl flex items-center justify-center text-[#ff5a5f]">
                <IconComponent className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-extrabold text-white tracking-tight">{currentFeature.title}</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">{currentFeature.desc}</p>
              
              <ul className="space-y-3.5 text-sm text-gray-400 font-light">
                {currentFeature.points.map((point, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckIcon />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Right Column: Graphic Mockup */}
            <div className="lg:col-span-7 bg-[#16141a] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex items-center space-x-1.5 px-4 py-3 bg-[#111014] border-b border-gray-800/60">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/60"></span>
              </div>
              <Mockup />
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}