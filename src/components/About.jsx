import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <h2 className="text-brand-red font-bold tracking-widest text-center lg:text-left uppercase text-xs md:text-sm mb-2 md:mb-3">
              About Us
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-blue mb-4 md:mb-6 leading-tight">
              ZamZam Food Industry
            </h3>
            <p className="text-base sm:text-lg md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">
              ZamZam Food Industry is established in 2003 in Hargeisa, Somaliland, produces locally manufactured snacks and soft drinks using light industries.
            </p>
            <p className="text-base sm:text-lg md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">
              In 2004, ZFI launched its first instant drink powder, ZamZam Foster, which gained market acceptance for its great taste, enriched formula, and competitive price.
            </p>
            <p className="text-base sm:text-lg md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">
              Since then, the company has expanded with new products and production lines, including hard‑boiled candy, corn chips, peanut roasting, and ZamZam Spring Water. With branches and agents across major cities, ZFI ensures nationwide availability through an efficient distribution network.
            </p>
            <p className="text-base sm:text-lg md:text-base text-gray-600 mb-6 md:mb-8 leading-relaxed">
              Guided by a strong management team, ZFI combines operational efficiency, lean manufacturing, and a well-organized supply chain to deliver high-quality, affordable alternatives to imported products.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
              <div className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 bg-blue-50 rounded-lg">
                <i className="fas fa-industry w-4 md:w-5 h-4 md:h-5 text-brand-blue"></i>
                <span className="text-sm md:text-base font-semibold text-brand-blue">Established 2003</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 bg-green-50 rounded-lg">
                <i className="fas fa-map-marker-alt w-4 md:w-5 h-4 md:h-5 text-green-600"></i>
                <span className="text-sm md:text-base font-semibold text-brand-blue">Hargeisa, Somaliland</span>
              </div>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-br from-brand-blue/20 to-brand-red/20 rounded-2xl md:rounded-3xl transform rotate-3"></div>
            <img
              src="/images/chips-with plate.png"
              alt="ZamZam Group Chip Production Line"
              className="relative rounded-xl md:rounded-2xl shadow-2xl w-full border-2 md:border-4 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
