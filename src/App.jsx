import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'

import Footer from './components/Footer'
import Pricing from './components/Pricing'
import Newsletter from './components/Newsletter'
import './App.css'

function App() {
  return (
  <div className="min-h-screen text-gray-800 antialiased">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Newsletter/>
    
      <Footer />
    </div>
  )
}
export default App