import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#121115]/80 backdrop-blur-md z-50 border-b border-gray-800/40 transition-all duration-300">
      <div className="container mx-auto px-6 lg:px-24 flex items-center justify-between h-24">
        
        {/* <a class="nav-brand"> */}
        <a href="#" className="flex items-center space-x-3 text-white text-xl font-bold tracking-tight group">
          <span className="w-9 h-9 bg-[#ff5a5f] rounded-xl flex items-center justify-center font-bold text-white text-xl shadow-lg shadow-red-500/20 transition-transform group-hover:scale-105">
            Q
          </span>
          <span>Quantix</span>
        </a>

        {/* <ul class="nav-links"> */}
        <ul className={`
          fixed top-24 left-0 w-full bg-[#121115] border-b border-gray-800 p-6 space-y-4 text-center transition-all duration-300 md:static md:w-auto md:bg-transparent md:border-none md:p-0 md:space-y-0 md:flex md:items-center md:space-x-10 text-[15px] font-medium text-gray-400
          ${isOpen ? 'block opacity-100 visible' : 'hidden md:flex'}
        `}>
          <li><a href="#features" onClick={() => setIsOpen(false)} className="block hover:text-white transition-colors py-2 md:py-0">Features</a></li>
          <li><a href="#pricing" onClick={() => setIsOpen(false)} className="block hover:text-white transition-colors py-2 md:py-0">Pricing</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); setIsOpen(false); }} className="block hover:text-white transition-colors py-2 md:py-0">Docs</a></li>
          <li><a href="#" onClick={() => setIsOpen(false)} className="block hover:text-white transition-colors py-2 md:py-0">Templates</a></li>
          
          {/* <li class="nav-mobile-actions"> */}
          <li className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-800 md:hidden">
            <a href="#" onClick={(e) => e.preventDefault()} className="text-gray-400 hover:text-white font-medium py-2.5 transition-colors">Log in</a>
            <button className="bg-[#ff5a5f] hover:bg-[#ff444a] text-white px-6 py-2.5 rounded-xl font-semibold shadow-md">
              Start Free Trial
            </button>
          </li>
        </ul>

        {/* <div class="nav-actions"> (Chỉ hiện trên desktop) */}
        <div className="hidden md:flex items-center space-x-6 text-[15px] font-medium">
          <a href="#" onClick={(e) => e.preventDefault()} className="text-gray-400 hover:text-white transition-colors">Log in</a>
          <button className="bg-[#ff5a5f] hover:bg-[#ff444a] text-white px-6 py-3 rounded-full font-semibold shadow-lg shadow-red-500/30 transition-all duration-300 transform hover:-translate-y-0.5">
            Start Free Trial
          </button>
        </div>

        {/* <button class="nav-toggle"> */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col justify-between w-6 h-4.5 md:hidden cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className={`w-full h-[2px] bg-gray-400 transition-all duration-300 origin-left ${isOpen ? 'rotate-45 translate-x-[2px]' : ''}`}></span>
          <span className={`w-full h-[2px] bg-gray-400 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-full h-[2px] bg-gray-400 transition-all duration-300 origin-left ${isOpen ? '-rotate-45 translate-x-[2px] translate-y-[1px]' : ''}`}></span>
        </button>

      </div>
    </nav>
  )
}