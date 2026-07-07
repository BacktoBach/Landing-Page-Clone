import { useState } from 'react'

const TinyCheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ff5a5f" strokeWidth="3" className="shrink-0">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
)

export default function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email) return
    alert(`Subscribed with: ${email}`)
    setEmail('')
  }

  return (
    <section className="py-24 bg-[#121115] border-t border-gray-900/20 relative overflow-hidden" id="newsletter">
      {/* Background Grid Pattern (Tùy chọn tạo lưới mờ mờ như ảnh) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1d24_1px,transparent_1px),linear-gradient(to_bottom,#1f1d24_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-xl text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          Stay in the loop
        </h2>
        <p className="text-gray-400 text-sm md:text-base font-light mb-8 max-w-md mx-auto leading-relaxed">
          Product updates, engineering insights, and zero spam. Unsubscribe anytime.
        </p>

        {/* Subscription Form */}
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-3 p-1.5 bg-[#16141a]/90 border border-gray-800/80 rounded-2xl shadow-xl max-w-md mx-auto mb-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="w-full bg-transparent px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none font-light"
            required
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-[#ff5a5f] to-[#ff6b6b] hover:from-[#ff444a] hover:to-[#ff5a5f] text-white text-sm font-semibold rounded-xl shadow-lg shadow-red-500/20 transition-all duration-200 whitespace-nowrap cursor-pointer active:scale-98"
          >
            Subscribe
          </button>
        </form>

        {/* Social Proof Marks */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-500 font-light">
          <div className="flex items-center space-x-1.5">
            <TinyCheckIcon />
            <span>6,200+ subscribers</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <TinyCheckIcon />
            <span>Monthly digest</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <TinyCheckIcon />
            <span>Unsubscribe anytime</span>
          </div>
        </div>
      </div>
    </section>
  )
}