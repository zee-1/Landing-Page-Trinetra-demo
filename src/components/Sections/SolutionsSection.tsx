import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heading, Text } from '../Typography/Typography'
import { FibonacciSpiral, FloatingEquation } from '../SacredGeometry/SacredPatterns'
import contentData from '../../data/content.json'

const SolutionsSection: React.FC = () => {
  const { solutions } = contentData
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedService, setSelectedService] = useState<number | null>(null)

  const hexagonPaths = [
    // Top
    "M50 5 L85 25 L85 65 L50 85 L15 65 L15 25 Z",
    // Top Right
    "M135 25 L170 45 L170 85 L135 105 L100 85 L100 45 Z",
    // Bottom Right  
    "M135 75 L170 95 L170 135 L135 155 L100 135 L100 95 Z",
    // Bottom
    "M50 95 L85 115 L85 155 L50 175 L15 155 L15 115 Z",
    // Bottom Left
    "M-35 75 L0 95 L0 135 L-35 155 L-70 135 L-70 95 Z",
    // Top Left
    "M-35 25 L0 45 L0 85 L-35 105 L-70 85 L-70 45 Z"
  ]

  const serviceIcons = {
    'process-icon': '⚙️',
    'generative-icon': '🎨',
    'custom-icon': '🔧',
    'consulting-icon': '💡'
  }

  return (
    <section id="solutions" className="relative py-20 overflow-hidden">
      {/* Background Sacred Geometry */}
      <div className="absolute inset-0 opacity-10">
        <FibonacciSpiral 
          size={800} 
          color="#FF6B35" 
          className="top-0 right-0" 
        />
        <FibonacciSpiral 
          size={600} 
          color="#00D9FF" 
          className="bottom-0 left-0" 
        />
      </div>

      {/* Floating Equations */}
      <FloatingEquation 
        equation="∑(innovation) = exponential growth" 
        className="top-10 left-20"
        color="#FF6B35"
      />
      <FloatingEquation 
        equation="AI × creativity = ∞ possibilities" 
        className="top-1/3 right-20"
        color="#00D9FF"
      />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Heading level={2} className="mb-6">
            Our <span className="text-sacred-saffron">Solutions</span>
          </Heading>
          <Text variant="large" className="max-w-3xl mx-auto">
            Transforming businesses through intelligent AI integration and sacred wisdom
          </Text>
        </motion.div>

        {/* Hexagonal Grid */}
        <div className="relative max-w-4xl mx-auto mb-20">
          <svg 
            viewBox="-100 -20 400 220" 
            className="w-full h-auto max-h-96"
          >
            {solutions.services.map((service, index) => (
              <g key={index}>
                {/* Hexagon */}
                <motion.path
                  d={hexagonPaths[index % hexagonPaths.length]}
                  fill="url(#hexagonGradient)"
                  stroke="#00D9FF"
                  strokeWidth="2"
                  opacity={hoveredIndex === index ? 0.9 : 0.6}
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setSelectedService(selectedService === index ? null : index)}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 0.6 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, opacity: 0.9 }}
                />

                {/* Service Icon */}
                <motion.text
                  x={index === 0 ? 50 : index === 1 ? 135 : index === 2 ? 135 : index === 3 ? 50 : -35}
                  y={index === 0 ? 40 : index === 1 ? 60 : index === 2 ? 110 : index === 3 ? 130 : index === 4 ? 110 : 60}
                  textAnchor="middle"
                  fontSize="24"
                  className="pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {serviceIcons[service.icon as keyof typeof serviceIcons]}
                </motion.text>

                {/* Service Title */}
                <motion.text
                  x={index === 0 ? 50 : index === 1 ? 135 : index === 2 ? 135 : index === 3 ? 50 : -35}
                  y={index === 0 ? 60 : index === 1 ? 80 : index === 2 ? 130 : index === 3 ? 150 : index === 4 ? 130 : 80}
                  textAnchor="middle"
                  fontSize="12"
                  fill="#FAFAF8"
                  className="pointer-events-none font-sans-clean"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.5 }}
                  viewport={{ once: true }}
                >
                  {service.title}
                </motion.text>

                {/* Connection Lines */}
                {index > 0 && (
                  <motion.line
                    x1={index === 1 ? 85 : index === 2 ? 135 : index === 3 ? 85 : index === 4 ? 15 : 15}
                    y1={index === 1 ? 45 : index === 2 ? 95 : index === 3 ? 95 : index === 4 ? 95 : 45}
                    x2={index === 1 ? 100 : index === 2 ? 135 : index === 3 ? 50 : index === 4 ? 0 : 0}
                    y2={index === 1 ? 45 : index === 2 ? 75 : index === 3 ? 85 : index === 4 ? 85 : 65}
                    stroke="#00D9FF"
                    strokeWidth="1"
                    opacity="0.4"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: index * 0.3 }}
                    viewport={{ once: true }}
                  />
                )}
              </g>
            ))}

            {/* Gradient Definitions */}
            <defs>
              <linearGradient id="hexagonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1a0033" stopOpacity="0.8"/>
                <stop offset="50%" stopColor="#FF6B35" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#00D9FF" stopOpacity="0.5"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Service Details Modal */}
        <AnimatePresence>
          {selectedService !== null && (
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                className="bg-gradient-to-br from-cosmic-purple to-cosmic-purple/80 p-8 rounded-2xl max-w-2xl w-full border border-ethereal-cyan/30 backdrop-blur-md"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">
                    {serviceIcons[solutions.services[selectedService].icon as keyof typeof serviceIcons]}
                  </div>
                  <Heading level={3} className="text-sacred-saffron mb-4">
                    {solutions.services[selectedService].title}
                  </Heading>
                  <Text variant="large" className="mb-6">
                    {solutions.services[selectedService].description}
                  </Text>
                </div>

                <div>
                  <Heading level={5} className="text-ethereal-cyan mb-4 text-center">
                    Key Benefits
                  </Heading>
                  <div className="grid gap-3">
                    {solutions.services[selectedService].benefits.map((benefit, benefitIndex) => (
                      <motion.div
                        key={benefitIndex}
                        className="flex items-center p-3 bg-ethereal-cyan/10 rounded-lg border border-ethereal-cyan/20"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: benefitIndex * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-sacred-saffron rounded-full mr-3 flex-shrink-0" />
                        <Text variant="body">{benefit}</Text>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.button
                  className="w-full mt-8 px-6 py-3 bg-gradient-to-r from-sacred-saffron to-ethereal-cyan text-cosmic-purple font-semibold rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedService(null)}
                >
                  Close
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Why Choose Trinetra */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Heading level={3} className="mb-12 text-ethereal-cyan">
            Why Choose Trinetra?
          </Heading>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.whyChoose.map((reason, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gradient-to-br from-ethereal-cyan/10 to-sacred-saffron/10 rounded-xl border border-ethereal-cyan/20 backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: 'rgba(0, 217, 255, 0.4)'
                }}
              >
                <Heading level={5} className="mb-3 text-sacred-saffron">
                  {reason.title}
                </Heading>
                <Text variant="body">
                  {reason.description}
                </Text>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SolutionsSection