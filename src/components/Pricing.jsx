import { useState } from 'react'

// =======================================================
// 1. UTILITY COMPONENTS (Các component nhỏ dùng chung)
// =======================================================
const PremiumCheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff5a5f" strokeWidth="3" className="shrink-0">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
)

// =======================================================
// 2. SUB-COMPONENT: PRICING CARD (Quản lý giao diện từng cột giá)
// =======================================================
function PricingCard({ plan, isAnnual }) {
  const isFree = plan.monthlyPrice === "FREE"
  // Tính toán giá dựa trên state đóng theo năm hay tháng
  const currentPrice = isAnnual ? plan.annualPrice : plan.monthlyPrice

  return (
    <div className={`bg-[#16141a] border rounded-2xl p-8 flex flex-col justify-between relative transition-all duration-300
      ${plan.isFeatured 
        ? 'border-[#ff5a5f] ring-4 ring-[#ff5a5f]/5 lg:scale-105 z-10' 
        : 'border-gray-800/80 hover:border-gray-700'
      }
    `}>
      {/* Badge nổi bật dành cho gói Pro */}
      {plan.isFeatured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#ff5a5f] to-[#ff8a7a] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
          Most Popular
        </span>
      )}

      <div>
        {/* Tên gói & Giá tiền */}
        <div className="text-base font-bold text-white mb-6">{plan.name}</div>
        <div className="flex items-baseline text-white mb-1">
          {!isFree && <span className="text-2xl font-bold mr-1 text-gray-500">$</span>}
          <span className={`font-extrabold tracking-tight ${isFree ? 'text-4xl' : 'text-5xl'}`}>
            {currentPrice}
          </span>
        </div>

        {/* Text phụ dưới giá tiền */}
        <div className="text-xs text-gray-500 font-medium mb-8 min-h-[16px]">
          {isFree ? (
            "Free forever"
          ) : (
            <>
              per month 
              {isAnnual && (
                <span className="text-[#ff5a5f]/90 font-semibold ml-1">
                  (billed ${parseFloat(plan.annualPrice) * 12}/yr)
                </span>
              )}
            </>
          )}
        </div>

        {/* Nút Kêu Gọi Hành Động (CTA Button) */}
        <a 
          href="#" 
          onClick={(e) => e.preventDefault()} 
          className={`block w-full text-center py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${plan.btnClass}`}
        >
          {plan.btnText}
        </a>

        {/* Đường gạch ngang phân cách */}
        <div className="h-[1px] bg-gray-800/60 my-6"></div>

        {/* Danh sách tính năng đi kèm */}
        <ul className="space-y-4 text-sm text-gray-400 font-light">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start space-x-3">
              <PremiumCheckIcon />
              <span className="leading-tight">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

// =======================================================
// 3. STATIC CONFIGURATIONS (Mảng cấu hình dữ liệu của các gói)
// =======================================================
const PLANS_CONFIG = [
  {
    name: "Starter",
    isFeatured: false,
    monthlyPrice: "FREE",
    annualPrice: "FREE",
    btnText: "Get Started",
    btnClass: "bg-[#1d1b22] hover:bg-[#25222b] border border-gray-800 text-white",
    features: [
      "Up to 10K events/mo",
      "1 team project",
      "Core web analytics",
      "Community support"
    ]
  },
  {
    name: "Pro",
    isFeatured: true, // Gói tiêu điểm nổi bật
    monthlyPrice: "25",
    annualPrice: "17.50", // Giá ưu đãi khi bật toggle Annual
    btnText: "Start Free Trial",
    btnClass: "bg-[#ff5a5f] hover:bg-[#ff444a] text-white shadow-lg shadow-red-500/20 transform hover:-translate-y-0.5",
    features: [
      "Up to 1M events/mo",
      "Unlimited projects",
      "Pixel-perfect session replay",
      "Advanced funnel drop-offs",
      "Priority 24/7 support"
    ]
  },
  {
    name: "Scale",
    isFeatured: false,
    monthlyPrice: "120",
    annualPrice: "84",
    btnText: "Contact Sales",
    btnClass: "bg-[#1d1b22] hover:bg-[#25222b] border border-gray-800 text-white",
    features: [
      "Unlimited custom events",
      "Dedicated data residency",
      "Custom retention history",
      "SSO / SAML authentication",
      "Dedicated CSM & SLA guarantee"
    ]
  }
]

// =======================================================
// 4. MAIN COMPONENT
// =======================================================
export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true)

  return (
    <section className="py-20 md:py-28 bg-[#121115] border-t border-gray-900/40" id="pricing">
      <div className="container mx-auto px-6 lg:px-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-[#ff5a5f] text-xs uppercase tracking-widest font-bold mb-3">Pricing</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Start free. Scale as you grow.
          </h2>
          <p className="text-gray-400 text-base md:text-lg font-light max-w-xl mx-auto">
            No credit card required. Upgrade, downgrade, or cancel anytime.
          </p>
        </div>

        {/* Toggle Switch (Tháng / Năm) */}
        <div className="flex items-center justify-center space-x-4 mb-16">
          <span className={`text-sm font-medium transition-colors ${!isAnnual ? 'text-white' : 'text-gray-500'}`}>
            Monthly
          </span>
          <button 
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-12 h-6 bg-[#1d1b22] border border-gray-800 rounded-full relative transition-colors cursor-pointer"
            aria-label="Toggle annual billing"
          >
            <span className={`absolute top-0.5 left-0.5 w-4.5 h-4.5 bg-[#ff5a5f] rounded-full transition-transform duration-300 
              ${isAnnual ? 'translate-x-6' : ''}`} 
            />
          </button>
          <span className={`text-sm font-medium transition-colors ${isAnnual ? 'text-white' : 'text-gray-500'}`}>
            Annually
          </span>
          <span className="bg-[#ff5a5f]/10 border border-[#ff5a5f]/20 text-[#ff5a5f] text-[11px] font-bold px-2.5 py-0.5 rounded-md animate-pulse">
            Save 30%
          </span>
        </div>

        {/* Plans Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {PLANS_CONFIG.map((plan, index) => (
            <PricingCard 
              key={index} 
              plan={plan} 
              isAnnual={isAnnual} 
            />
          ))}
        </div>

      </div>
    </section>
  )
}