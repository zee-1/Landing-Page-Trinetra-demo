import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heading, Text } from '../Typography/Typography'
import { SriYantra, FloatingEquation } from '../SacredGeometry/SacredPatterns'
import contentData from '../../data/content.json'

const ProductSection: React.FC = () => {
  const { product } = contentData
  const { hospitality } = product
  const [activeView, setActiveView] = useState<'customer' | 'provider'>('customer')

  const demoData = {
    customer: {
      steps: [
        { icon: '🛎️', title: 'Check-in', description: 'Seamless arrival experience' },
        { icon: '🤖', title: 'AI Concierge', description: 'Personalized recommendations' },
        { icon: '🍽️', title: 'Dining', description: 'Smart menu suggestions' },
        { icon: '🧳', title: 'Check-out', description: 'Frictionless departure' }
      ],
      metrics: [
        { value: '98%', label: 'Satisfaction Rate' },
        { value: '45s', label: 'Avg Response Time' },
        { value: '24/7', label: 'Availability' }
      ]
    },
    provider: {
      features: [
        { icon: '📊', title: 'Analytics Dashboard', description: 'Real-time insights' },
        { icon: '⚡', title: 'Automation Engine', description: 'Workflow optimization' },
        { icon: '🎯', title: 'Predictive Alerts', description: 'Proactive management' },
        { icon: '📈', title: 'Performance Metrics', description: 'Data-driven decisions' }
      ],
      metrics: [
        { value: '67%', label: 'Efficiency Increase' },
        { value: '89%', label: 'Cost Reduction' },
        { value: '24/7', label: 'Monitoring' }
      ]
    }
  }

  return (
    <section id="product" className="relative py-20 overflow-hidden">
      {/* Background Sacred Geometry */}
      <div className="absolute inset-0 opacity-15">
        <SriYantra 
          size={500} 
          color="#00D9FF" 
          className="top-10 right-10" 
        />
        <SriYantra 
          size={300} 
          color="#FF6B35" 
          className="bottom-10 left-10" 
        />
      </div>

      {/* Floating Equations */}
      <FloatingEquation 
        equation="UX = f(AI, intuition)" 
        className="top-20 left-10"
        color="#FF6B35"
      />
      <FloatingEquation 
        equation="efficiency = automation × intelligence" 
        className="top-1/3 right-10"
        color="#00D9FF"
      />
      <FloatingEquation 
        equation="hospitality ∝ personalization²" 
        className="bottom-20 right-1/3"
        color="#FF6B35"
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
            <span className="text-sacred-saffron">AI Agent</span> for Hospitality Management
          </Heading>
          <Text variant="large" className="max-w-4xl mx-auto mb-8">
            {hospitality.description}
          </Text>

          {/* View Toggle */}
          <motion.div
            className="inline-flex bg-cosmic-purple/50 rounded-full p-2 border border-ethereal-cyan/30"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <button
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeView === 'customer'
                  ? 'bg-gradient-to-r from-sacred-saffron to-ethereal-cyan text-cosmic-purple'
                  : 'text-off-white hover:text-ethereal-cyan'
              }`}
              onClick={() => setActiveView('customer')}
            >
              Customer Experience
            </button>
            <button
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeView === 'provider'
                  ? 'bg-gradient-to-r from-sacred-saffron to-ethereal-cyan text-cosmic-purple'
                  : 'text-off-white hover:text-ethereal-cyan'
              }`}
              onClick={() => setActiveView('provider')}
            >
              Provider Dashboard
            </button>
          </motion.div>
        </motion.div>

        {/* Split-Screen Interactive Demo */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Left Side - Features */}
          <motion.div
            className="space-y-6"
            key={activeView}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              {activeView === 'customer' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Heading level={3} className="mb-6 text-ethereal-cyan">
                    Customer Journey
                  </Heading>
                  {hospitality.customer.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="p-6 bg-gradient-to-br from-ethereal-cyan/10 to-transparent rounded-xl border border-ethereal-cyan/20 backdrop-blur-sm"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ 
                        scale: 1.02,
                        borderColor: 'rgba(0, 217, 255, 0.4)'
                      }}
                    >
                      <Heading level={5} className="mb-3 text-sacred-saffron">
                        {feature.feature}
                      </Heading>
                      <Text variant="body">
                        {feature.description}
                      </Text>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeView === 'provider' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Heading level={3} className="mb-6 text-sacred-saffron">
                    Provider Solutions
                  </Heading>
                  {hospitality.provider.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="p-6 bg-gradient-to-br from-sacred-saffron/10 to-transparent rounded-xl border border-sacred-saffron/20 backdrop-blur-sm"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ 
                        scale: 1.02,
                        borderColor: 'rgba(255, 107, 53, 0.4)'
                      }}
                    >
                      <Heading level={5} className="mb-3 text-ethereal-cyan">
                        {feature.feature}
                      </Heading>
                      <Text variant="body">
                        {feature.description}
                      </Text>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right Side - Interactive Demo Visualization */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-cosmic-purple/30 to-cosmic-purple/10 backdrop-blur-md rounded-2xl p-8 border border-ethereal-cyan/20">
              
              <AnimatePresence mode="wait">
                {activeView === 'customer' && (
                  <motion.div
                    key="customer-demo"
                    initial={{ opacity: 0, rotateY: 90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    exit={{ opacity: 0, rotateY: -90 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Heading level={4} className="mb-6 text-center text-ethereal-cyan">
                      Guest Experience Flow
                    </Heading>
                    
                    {/* Customer Journey Steps */}
                    <div className="space-y-4 mb-8">
                      {demoData.customer.steps.map((step, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center p-4 bg-ethereal-cyan/10 rounded-lg"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.15 }}
                        >
                          <div className="text-2xl mr-4">{step.icon}</div>
                          <div>
                            <Text variant="body" className="font-semibold text-ethereal-cyan">
                              {step.title}
                            </Text>
                            <Text variant="small">
                              {step.description}
                            </Text>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Customer Metrics */}
                    <div className="grid grid-cols-3 gap-4">
                      {demoData.customer.metrics.map((metric, index) => (
                        <motion.div
                          key={index}
                          className="text-center p-3 bg-sacred-saffron/10 rounded-lg"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                        >
                          <Text variant="mono" className="text-sacred-saffron text-lg font-bold">
                            {metric.value}
                          </Text>
                          <Text variant="small">
                            {metric.label}
                          </Text>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeView === 'provider' && (
                  <motion.div
                    key="provider-demo"
                    initial={{ opacity: 0, rotateY: 90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    exit={{ opacity: 0, rotateY: -90 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Heading level={4} className="mb-6 text-center text-sacred-saffron">
                      Management Dashboard
                    </Heading>
                    
                    {/* Provider Features */}
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {demoData.provider.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          className="flex flex-col items-center p-4 bg-sacred-saffron/10 rounded-lg text-center"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="text-xl mb-2">{feature.icon}</div>
                          <Text variant="small" className="font-semibold text-sacred-saffron">
                            {feature.title}
                          </Text>
                          <Text variant="small" className="text-xs">
                            {feature.description}
                          </Text>
                        </motion.div>
                      ))}
                    </div>

                    {/* Provider Metrics */}
                    <div className="grid grid-cols-3 gap-4">
                      {demoData.provider.metrics.map((metric, index) => (
                        <motion.div
                          key={index}
                          className="text-center p-3 bg-ethereal-cyan/10 rounded-lg"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                        >
                          <Text variant="mono" className="text-ethereal-cyan text-lg font-bold">
                            {metric.value}
                          </Text>
                          <Text variant="small">
                            {metric.label}
                          </Text>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Floating Benefits */}
            <motion.div
              className="absolute -top-4 -right-4 bg-gradient-to-r from-sacred-saffron to-ethereal-cyan text-cosmic-purple px-4 py-2 rounded-full text-sm font-semibold"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: 'easeInOut' 
              }}
            >
              Live AI Assistance
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 bg-gradient-to-r from-ethereal-cyan to-sacred-saffron text-cosmic-purple px-4 py-2 rounded-full text-sm font-semibold"
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: 'easeInOut',
                delay: 1.5
              }}
            >
              Real-time Analytics
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-ethereal-cyan to-sacred-saffron text-cosmic-purple font-semibold rounded-lg text-lg transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 40px rgba(0, 217, 255, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Request Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductSection