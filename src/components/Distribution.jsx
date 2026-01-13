import React, { useState } from 'react'

const Distribution = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    businessName: '',
    email: '',
    volume: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    alert('Thank you for your partnership inquiry! Our team will contact you within 24 hours.')
    setFormData({
      firstName: '',
      lastName: '',
      businessName: '',
      email: '',
      volume: '',
    })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="distribution" className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
          {/* Content */}
          <div>
            <h2 className="text-brand-red font-bold tracking-widest uppercase text-xs md:text-sm mb-2 md:mb-3">
              Distribution Network
            </h2>
            <h3 className="text-2xl md:text-4xl font-bold text-brand-blue mb-4 md:mb-6">Partner with ZamZam Food Industry</h3>
            <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">
              ZamZam Food Industry has branches and agents in major cities of Somaliland. Our products are available throughout the country through a well-organized, efficient distribution system. We maintain networks with solid relationships and reputation with distributors and suppliers both locally and internationally.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
              <div className="bg-blue-50 p-4 md:p-6 rounded-xl border border-blue-100 hover:bg-blue-100 hover:border-brand-blue transition-colors">
                <h4 className="text-xl md:text-2xl font-bold text-brand-blue mb-1">Countrywide Coverage</h4>
                <p className="text-xs md:text-sm text-gray-600">Branches and agents across major cities in Somaliland.</p>
              </div>
              <div className="bg-blue-50 p-4 md:p-6 rounded-xl border border-blue-100 hover:bg-blue-100 hover:border-brand-blue transition-colors">
                <h4 className="text-xl md:text-2xl font-bold text-brand-blue mb-1">Reliable Partnerships</h4>
                <p className="text-xs md:text-sm text-gray-600">Strong relationships with distributors and suppliers locally and internationally.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-brand-blue bg-blue-50 flex items-center justify-center shrink-0">
                <i className="fas fa-comments text-brand-blue text-sm md:text-base"></i>
              </div>
              <div>
                <p className="text-xs md:text-sm text-gray-500">Connect with us</p>
                <a
                  href="https://www.facebook.com/zamzamgroupso"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-sm md:text-base text-brand-blue hover:text-brand-red transition-colors inline-flex items-center gap-2 break-words"
                >
                  Visit our Facebook page <i className="fas fa-external-link-alt text-xs"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-brand-light p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-xl mt-8 lg:mt-0">
            <h4 className="text-xl md:text-2xl font-bold text-brand-blue mb-4 md:mb-6">Wholesale Inquiry</h4>
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 rounded-lg px-3 md:px-4 py-2 md:py-3 text-sm md:text-base focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 rounded-lg px-3 md:px-4 py-2 md:py-3 text-sm md:text-base focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Business Name</label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-300 rounded-lg px-3 md:px-4 py-2 md:py-3 text-sm md:text-base focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
                  placeholder="Supermarket LLC"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-300 rounded-lg px-3 md:px-4 py-2 md:py-3 text-sm md:text-base focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
                  placeholder="john@business.com"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Volume Estimate</label>
                <select
                  name="volume"
                  value={formData.volume}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-300 rounded-lg px-3 md:px-4 py-2 md:py-3 text-sm md:text-base focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
                  required
                >
                  <option value="">Select volume</option>
                  <option value="10-50">10 - 50 Cases / Month</option>
                  <option value="50-200">50 - 200 Cases / Month</option>
                  <option value="200+">200+ Cases / Month</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-brand-blue text-white font-bold py-3 md:py-4 rounded-xl hover:bg-brand-red transition-all shadow-lg mt-2 text-sm md:text-base"
              >
                Request Price List
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Distribution
