import React from 'react'

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const headerHeight = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <footer className="bg-brand-dark text-white py-8 md:py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3 md:mb-4">
              Zam<span className="text-brand-red">Zam</span> Food Industry
            </h2>
            <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-6 leading-relaxed">
              Affordable Quality for Everyday Life. Established in 2003 in Hargeisa, Somaliland. Producing quality instant drinks and snacks through local manufacturing.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-red transition-colors"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-red transition-colors"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-red transition-colors"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4 pb-2 border-b border-gray-700">Company</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('about')
                  }}
                  className="text-gray-400 hover:text-brand-red transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#manufacturing"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('manufacturing')
                  }}
                  className="text-gray-400 hover:text-brand-red transition-colors"
                >
                  Manufacturing Process
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('features')
                  }}
                  className="text-gray-400 hover:text-brand-red transition-colors"
                >
                  Vision & Mission
                </a>
              </li>
              <li>
                <a
                  href="#distribution"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('distribution')
                  }}
                  className="text-gray-400 hover:text-brand-red transition-colors"
                >
                  Distribution
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('contact')
                  }}
                  className="text-gray-400 hover:text-brand-red transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4 pb-2 border-b border-gray-700">Products</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#products"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('products')
                  }}
                  className="text-gray-400 hover:text-brand-red transition-colors"
                >
                  Product Line
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('products')
                  }}
                  className="text-gray-400 hover:text-brand-red transition-colors"
                >
                  All Products
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4 pb-2 border-b border-gray-700">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#distribution"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('distribution')
                  }}
                  className="text-gray-400 hover:text-brand-red transition-colors"
                >
                  Wholesale Inquiry
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('contact')
                  }}
                  className="text-gray-400 hover:text-brand-red transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-6 md:pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-xs md:text-sm mb-2 px-4">&copy; 2025 ZamZam Food Industry. All rights reserved.</p>
          <p className="text-gray-500 text-xs px-4">Affordable Quality for Everyday Life</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
