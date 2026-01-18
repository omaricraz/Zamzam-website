import React from 'react'

const Contact = () => {
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
    <section id="contact" className="py-12 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-16">
          <span className="text-brand-red font-bold tracking-widest uppercase text-xs md:text-sm">Get In Touch</span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-brand-blue dark:text-brand-green mt-2 md:mt-3 mb-4 md:mb-6 px-4">
            Contact ZamZam Food Industry
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">
            For partnership inquiries, distribution opportunities, or general information about our products and services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-brand-blue dark:text-brand-green mb-6 md:mb-8">Contact Information</h3>
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 dark:bg-brand-green/10 text-brand-blue dark:text-brand-green rounded-full flex items-center justify-center text-lg md:text-xl shrink-0 mr-4 md:mr-5">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-brand-blue dark:text-brand-green mb-2">Headquarters</h4>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    ZamZam Food Industry<br />Hargeisa, Somaliland
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 dark:bg-brand-green/10 text-brand-blue dark:text-brand-green rounded-full flex items-center justify-center text-lg md:text-xl shrink-0 mr-4 md:mr-5">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-brand-blue dark:text-brand-green mb-2">Business Inquiries</h4>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    Contact us for distribution and partnership opportunities
                  </p>
                  <p className="text-xs md:text-sm text-gray-500">Available during business hours</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 dark:bg-brand-green/10 text-brand-blue dark:text-brand-green rounded-full flex items-center justify-center text-lg md:text-xl shrink-0 mr-4 md:mr-5">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-brand-blue dark:text-brand-green mb-2">General Inquiries</h4>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed break-all">
                    Contact us through our Facebook page or distribution form
                  </p>
                  <p className="text-xs md:text-sm text-gray-500">We respond to all inquiries promptly</p>
                </div>
              </div>
            </div>

            <h4 className="text-lg md:text-xl font-bold text-brand-blue dark:text-brand-green mt-8 md:mt-10 mb-3 md:mb-4">Connect on Social</h4>
            <div className="flex gap-3 md:gap-4">
              <a
                href="#"
                className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 dark:bg-gray-800 text-brand-blue dark:text-brand-green rounded-full flex items-center justify-center text-base md:text-lg hover:bg-brand-blue dark:hover:bg-brand-green hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 dark:bg-gray-800 text-brand-blue dark:text-brand-green rounded-full flex items-center justify-center text-base md:text-lg hover:bg-brand-blue dark:hover:bg-brand-green hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 dark:bg-gray-800 text-brand-blue dark:text-brand-green rounded-full flex items-center justify-center text-base md:text-lg hover:bg-brand-blue dark:hover:bg-brand-green hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 dark:bg-gray-800 text-brand-blue dark:text-brand-green rounded-full flex items-center justify-center text-base md:text-lg hover:bg-brand-blue dark:hover:bg-brand-green hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-2xl mt-8 md:mt-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.123456789!2d44.0127616!3d9.5773578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1628b9ec3ba4f07d%3A0xf98969997ff52ca6!2sZAMZAM%20FOOD%20INDUSTRY!5e0!3m2!1sen!2sus!4v1735586689000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ minHeight: '300px' }}
              allowFullScreen=""
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
