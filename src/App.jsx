import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Manufacturing from './components/Manufacturing'
import Features from './components/Features'
import Distribution from './components/Distribution'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="text-gray-800 bg-white">
      <Header />
      <Hero />
      <About />
      <Products />
      <Manufacturing />
      <Features />
      <Distribution />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
