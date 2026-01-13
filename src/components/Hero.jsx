import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

const Hero = () => {
  const heroImages = [
    { src: '/images/chips.png', alt: 'Chips' },
    { src: '/images/milk.png', alt: 'Milk' },
    { src: '/images/mango.png', alt: 'Mango' },
  ]

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
    <section
      id="home"
      className="relative pt-24 md:pt-32 pb-20 md:pb-32 min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #EDE8F5 0%, #FFFFFF 50%, #FDF4E3 100%)',
      }}
    >
      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      ></div>

      {/* Floating Blobs */}
      <div className="absolute top-20 left-10 w-20 h-20 md:w-24 md:h-24 bg-purple-200 rounded-full blur-3xl opacity-60 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 md:w-20 md:h-20 bg-yellow-200 rounded-full blur-3xl opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 mt-8 md:mt-10">
        <div className="inline-block bg-brand-gold text-brand-dark px-4 md:px-6 py-2 rounded-full font-bold text-xs md:text-sm mb-6 shadow-lg">
          ESTABLISHED 2003
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-medium text-brand-dark mb-4 md:mb-6 leading-tight px-2">
          Affordable Quality <br className="hidden sm:block" /> for Everyday Life
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6 md:mb-10 leading-relaxed px-4">
          Established in 2003 in Hargeisa, Somaliland, ZamZam Food Industry produces quality instant drink powders and snacks through local manufacturing, delivering affordable products across Somaliland.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16 px-4">
          <button
            onClick={() => scrollToSection('products')}
            className="bg-brand-dark text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base hover:bg-brand-red hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <i className="fas fa-chart-line mr-2"></i> View Product Portfolio
          </button>
          <button
            onClick={() => scrollToSection('distribution')}
            className="bg-gray-100 text-brand-dark px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-200"
          >
            <i className="fas fa-handshake mr-2"></i> Partnership Inquiry
          </button>
        </div>
      </div>

      {/* Product Images Carousel */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 mt-8 md:mt-12">
        <Swiper
          modules={[Autoplay, Pagination, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="hero-carousel"
        >
          {heroImages.map((image, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <div className="w-64 md:w-80 h-96 md:h-[450px] rounded-2xl overflow-hidden shadow-2xl mx-2">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Hero
