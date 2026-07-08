import { useEffect } from 'react'
import AOS from 'aos'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Stats from './components/Stats'
import Footer from './components/Footer'
import Pricing from './components/Pricing'
import Newsletter from './components/Newsletter'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 90,
    })

    //  Bọc vào setTimeout để tránh làm crash trình duyệt khi dev reload
    const timer = setTimeout(() => {
      AOS.refreshHard()
    }, 100)

    return () => clearTimeout(timer) // Dọn dẹp bộ nhớ khi unmount
  }, [])

  return (
    
    <div className="min-h-screen bg-[#121115] text-white antialiased">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <Pricing />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App