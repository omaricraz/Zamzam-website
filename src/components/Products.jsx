import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'ZamZam Foster Orange',
      description: 'Refreshing orange-flavored instant drink powder. Dhadhan aad dareemi doonto!',
      image: '/images/orange-ver1.jpg',
      price: '$2.99',
      badge: 'Bestseller',
      badgeColor: 'from-brand-red to-red-600',
      borderColor: 'from-brand-red via-brand-red',
      tags: ['Orange', '2.5Kg'],
    },
    {
      id: 2,
      name: 'ZamZam Foster Golden Pineapple',
      description: 'Tropical pineapple-flavored instant drink. Try it once, you will know why everyone loves it!',
      image: '/images/pineable-ver 1.jpg',
      price: '$3.49',
      badge: 'New',
      badgeColor: 'from-brand-gold to-yellow-500',
      borderColor: 'from-brand-gold via-yellow-400',
      tags: ['Pineapple', '2.7Kg'],
    },
    {
      id: 3,
      name: 'ZamZam Foster Golden Mango',
      description: 'Rich and tropical mango-flavored instant drink powder with authentic fruit taste.',
      image: '/images/mango.png',
      price: '$4.99',
      badge: 'Premium',
      badgeColor: 'from-brand-blue dark:from-brand-green to-blue-700 dark:to-brand-green/80',
      borderColor: 'from-brand-blue dark:from-brand-green via-blue-600 dark:via-brand-green/80',
      tags: ['Mango', '2.5Kg'],
    },
    {
      id: 4,
      name: 'ZamZam Toster Vimto',
      description: 'An easy-to-mix drink with an unforgettable taste! Enjoy Vimto flavor.',
      image: '/images/vimto-v1.jpg',
      price: '$1.99',
      badge: 'Expanding',
      badgeColor: 'from-green-500 to-emerald-600',
      borderColor: 'from-green-500 via-emerald-400',
      tags: ['Vimto', '2.7Kg'],
    },
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
    <section id="products" className="py-12 md:py-20 bg-gradient-to-b from-white dark:from-gray-900 to-brand-light dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-block bg-brand-red/10 text-brand-red font-bold tracking-widest uppercase text-xs px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4">
            Our Product Line
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-brand-blue dark:text-brand-green mt-2 md:mt-3 mb-3 md:mb-4 px-4">
            Our Product Line
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
            Flavored instant drink powders and corn chips snacks manufactured locally in Somaliland, offering affordable, quality products that cater to everyday consumer needs.
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              480: {
                slidesPerView: 1.5,
              },
              640: {
                slidesPerView: 2,
              },
            }}
            className="products-swiper"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} scrollToSection={scrollToSection} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} scrollToSection={scrollToSection} />
          ))}
        </div>
      </div>
    </section>
  )
}

const ProductCard = ({ product, scrollToSection }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group border border-gray-100 dark:border-gray-700 relative">
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${product.borderColor} to-transparent`}></div>
      <div className="absolute top-3 right-3 z-20">
        <span className={`bg-gradient-to-r ${product.badgeColor} text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg uppercase tracking-wider`}>
          {product.badge}
        </span>
      </div>
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-brand-blue dark:text-brand-green mb-2 group-hover:text-brand-red transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-xs mb-3 leading-relaxed line-clamp-2">{product.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-50 dark:bg-brand-green/10 text-brand-blue dark:text-brand-green text-[10px] font-semibold px-2.5 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center pt-3 border-t border-gray-100">
          <div>
            <span className="text-lg font-extrabold text-brand-blue dark:text-brand-green">{product.price}</span>
            <span className="text-xs text-gray-400 ml-1">from</span>
          </div>
          <button
            onClick={() => scrollToSection('distribution')}
            className="bg-brand-blue dark:bg-brand-green text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-brand-green dark:hover:bg-brand-green/90 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Order
          </button>
        </div>
      </div>
    </div>
  )
}

export default Products
