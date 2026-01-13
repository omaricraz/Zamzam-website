import React from 'react'

const Manufacturing = () => {
  const steps = [
    {
      number: 1,
      title: 'Hygiene Standards',
      description:
        'Our facility maintains strict hygiene protocols throughout all production stages, ensuring food safety and quality in every product we manufacture.',
    },
    {
      number: 2,
      title: 'Quality Control',
      description:
        'Rigorous quality control measures are implemented at every stage of production, from raw material inspection to final product testing.',
    },
    {
      number: 3,
      title: 'Operational Efficiency',
      description:
        'Streamlined production processes and efficient operations enable us to deliver quality products at affordable prices for everyday consumers.',
    },
    {
      number: 4,
      title: 'Light Industry Production',
      description:
        'We utilize light industry technologies to produce instant drink powders, corn chips, candies, and other food products, supporting local manufacturing and community development in Somaliland.',
    },
    {
      number: 5,
      title: 'Product Development',
      description:
        'Continuous product development and expansion, from instant drinks to corn chips, candies, roasted peanuts, and spring water, meeting evolving consumer needs.',
    },
    {
      number: 6,
      title: 'Distribution Network',
      description:
        'Well-organized distribution system with branches and agents in major cities of Somaliland, ensuring products are available throughout the country with reliable supply chains.',
    },
  ]

  return (
    <section id="manufacturing" className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-16">
          <span className="text-brand-red font-bold tracking-widest uppercase text-xs md:text-sm">Our Process</span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-brand-blue mt-2 md:mt-3 mb-4 md:mb-6 px-4">
            Quality Manufacturing Process
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">
            Our manufacturing operations utilize light industries to produce instant drink powders, corn chips, hard-boiled candies, roasted peanuts, and purified spring water, maintaining strict hygiene and quality control standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white border-2 border-gray-100 rounded-2xl p-6 md:p-8 hover:border-brand-red hover:shadow-xl transition-all duration-300 relative"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-4 mt-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Manufacturing
