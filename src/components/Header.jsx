import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useDarkMode } from '../contexts/DarkModeContext'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'py-2 bg-white/80 backdrop-blur-xl shadow-xl' : 'py-4 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div
            className={`${
              isScrolled
                ? 'bg-white/80 backdrop-blur-xl border-gray-200 shadow-xl'
                : 'bg-white/10 backdrop-blur-md border-white/20'
            } border rounded-full px-3 md:px-6 py-2 md:py-3 flex justify-between items-center transition-all duration-300`}
          >
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('home')
              }}
              className="flex items-center gap-2 md:gap-3 group"
            >
              <img
                src="/images/zamzam-logo.png"
                alt="ZamZam Group Logo"
                className="h-8 md:h-12 w-auto group-hover:scale-110 transition-transform duration-300"
              />
              <div className="flex flex-col">
                <span className="font-serif text-lg md:text-2xl font-bold text-brand-red tracking-tight leading-none">
                  Zam Zam<span className="text-brand-blue dark:text-brand-green"> Group</span>
                </span>
                <span className="text-[0.5rem] md:text-[0.65rem] font-bold tracking-widest text-black-500 duration-300 -mt-1 hidden sm:block">
                  𝗙𝗢𝗢𝗗 𝗜𝗡𝗗𝗨𝗦𝗧𝗥𝗬
                </span>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-8">
              <ul className="flex gap-8">
                <li>
                  <a
                    href="#home"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection('home')
                    }}
                    className="text-gray-700 dark:text-gray-300 font-medium hover:text-brand-blue dark:hover:text-brand-green transition-colors relative group"
                  >
                    Home
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection('about')
                    }}
                    className="text-gray-700 dark:text-gray-300 font-medium hover:text-brand-blue dark:hover:text-brand-green transition-colors relative group"
                  >
                    About
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection('products')
                    }}
                    className="text-gray-700 dark:text-gray-300 font-medium hover:text-brand-blue dark:hover:text-brand-green transition-colors relative group"
                  >
                    Products
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="#manufacturing"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection('manufacturing')
                    }}
                    className="text-gray-700 dark:text-gray-300 font-medium hover:text-brand-blue dark:hover:text-brand-green transition-colors relative group"
                  >
                    Process
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleDarkMode}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <i className="fas fa-sun text-lg"></i>
                ) : (
                  <i className="fas fa-moon text-lg"></i>
                )}
              </button>
              
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('contact')
                }}
                className="hidden md:inline-flex items-center gap-2 bg-brand-blue dark:bg-brand-green text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-brand-green dark:hover:bg-brand-green/90 hover:shadow-glow transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Partner With Us</span>
                <i className="fas fa-arrow-right text-xs"></i>
              </a>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-brand-blue dark:text-brand-green text-2xl focus:outline-none"
              >
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-brand-blue dark:bg-brand-green backdrop-blur-xl z-[60] transform transition-transform duration-500 flex flex-col justify-center items-center ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-8 right-8 text-white text-3xl hover:text-brand-red transition-colors"
        >
          <FaTimes />
        </button>

        <nav className="text-center">
          <ul className="flex flex-col gap-8">
            <li>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('home')
                }}
                className="text-3xl font-serif font-bold text-white hover:text-brand-red"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('about')
                }}
                className="text-3xl font-serif font-bold text-white hover:text-brand-red"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#products"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('products')
                }}
                className="text-3xl font-serif font-bold text-white hover:text-brand-red"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('contact')
                }}
                className="text-3xl font-serif font-bold text-white hover:text-brand-red"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="mt-12 flex flex-col items-center gap-4">
          <button
            onClick={() => {
              toggleDarkMode()
            }}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors focus:outline-none"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <i className="fas fa-sun text-xl"></i>
            ) : (
              <i className="fas fa-moon text-xl"></i>
            )}
          </button>
          <a
            href="#distribution"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('distribution')
            }}
            className="bg-white dark:bg-gray-800 text-brand-blue dark:text-brand-green px-8 py-3 rounded-full font-bold text-lg hover:bg-brand-green dark:hover:bg-brand-green/90 hover:text-white transition-colors shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </>
  )
}

export default Header
