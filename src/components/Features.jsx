import React from 'react'

const Features = () => {
  return (
    <section id="features" className="py-12 md:py-24 bg-brand-light dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-16">
          <span className="text-brand-red font-bold tracking-widest uppercase text-xs md:text-sm">Our Values</span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-brand-blue dark:text-brand-green mt-2 md:mt-3 mb-4 md:mb-6 px-4">
            Vision, Mission & Core Values
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">
            ZamZam Food Industry is guided by a strong management team that ensures operational efficiency and strategic direction across all areas of the business.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-10 shadow-lg mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-brand-blue dark:text-brand-green mb-4">Vision</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base md:text-lg">
              To be a leading regional manufacturer of affordable, high-quality food and beverage products that enhance everyday life and empower communities through sustainable growth.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-10 shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold text-brand-blue dark:text-brand-green mb-4">Mission</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base md:text-lg">
              To deliver accessible, trusted, and innovative food and drink solutions by operating with excellence, driving efficiency, and continuously expanding our product portfolio to meet evolving consumer needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
