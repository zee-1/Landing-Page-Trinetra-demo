import React from 'react'
import { motion } from 'framer-motion'
import BrainNeural3D from '../ThreeD/BrainNeural'
import { Heading, Text } from '../Typography/Typography'
import { SriYantra, FloatingEquation } from '../SacredGeometry/SacredPatterns'

const TechnologySection: React.FC = () => {
  const techMetrics = [
    { value: '99.9%', label: 'Uptime', color: 'text-ethereal-cyan' },
    { value: '< 100ms', label: 'Response Time', color: 'text-sacred-saffron' },
    { value: '10PB+', label: 'Data Processed', color: 'text-ethereal-cyan' },
    { value: '50+ Models', label: 'AI Algorithms', color: 'text-sacred-saffron' }
  ]

  const capabilities = [
    {
      title: 'Natural Language Processing',
      description: 'Advanced understanding of human language and context',
      icon: '🧠',
      neurons: [1, 2, 3, 4, 5]
    },
    {
      title: 'Computer Vision',
      description: 'Intelligent image and video analysis capabilities',
      icon: '👁️',
      neurons: [2, 3, 4, 5, 6]
    },
    {
      title: 'Predictive Analytics',
      description: 'Forecasting trends and behaviors with high accuracy',
      icon: '📈',
      neurons: [3, 4, 5, 6, 1]
    },
    {
      title: 'Real-time Processing',
      description: 'Instantaneous data analysis and decision making',
      icon: '⚡',
      neurons: [4, 5, 6, 1, 2]
    }
  ]

  return (
    <section id="technology" className="relative py-20 overflow-hidden bg-gradient-to-br from-cosmic-purple via-cosmic-purple/95 to-cosmic-purple">
      {/* Background Sacred Geometry */}
      <div className="absolute inset-0 opacity-10">
        <SriYantra 
          size={700} 
          color="#FF6B35" 
          className="top-0 left-1/2 transform -translate-x-1/2" 
        />
        <SriYantra 
          size={400} 
          color="#00D9FF" 
          className="bottom-0 right-10" 
        />
      </div>

      {/* Complex Mathematical Equations */}
      <FloatingEquation 
        equation="∇ · E = ρ/ε₀" 
        className="top-10 right-20"
        color="#00D9FF"
      />
      <FloatingEquation 
        equation="∇ × B = μ₀J + μ₀ε₀ ∂E/∂t" 
        className="top-1/4 left-10"
        color="#FF6B35"
      />
      <FloatingEquation 
        equation="H(X) = -Σp(x)log₂p(x)" 
        className="bottom-1/3 right-10"
        color="#00D9FF"
      />
      <FloatingEquation 
        equation="∂u/∂t = α∇²u" 
        className="bottom-20 left-20"
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
            Neural <span className="text-ethereal-cyan">Architecture</span> & 
            <span className="text-sacred-saffron"> Quantum</span> Intelligence
          </Heading>
          <Text variant="large" className="max-w-4xl mx-auto">
            Our AI systems combine ancient computational wisdom with cutting-edge neural networks, 
            creating intelligence that transcends traditional boundaries
          </Text>
        </motion.div>

        {/* Main Technology Visualization */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left Side - 3D Brain Visualization */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <BrainNeural3D 
                width={600} 
                height={500} 
                className="w-full h-auto max-w-full"
              />
              
              {/* Glow effects */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-radial from-ethereal-cyan/30 via-sacred-saffron/20 to-transparent blur-3xl"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 6, 
                  ease: 'easeInOut', 
                  repeat: Infinity 
                }}
              />
              
              {/* Data Flow Indicators */}
              <motion.div
                className="absolute top-10 left-10 w-3 h-3 bg-ethereal-cyan rounded-full"
                animate={{ 
                  scale: [1, 2, 1],
                  opacity: [1, 0, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              />
              <motion.div
                className="absolute bottom-10 right-10 w-3 h-3 bg-sacred-saffron rounded-full"
                animate={{ 
                  scale: [1, 2, 1],
                  opacity: [1, 0, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  repeatDelay: 1.5
                }}
              />
            </div>
          </motion.div>

          {/* Right Side - Capabilities */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Heading level={3} className="mb-8 text-sacred-saffron">
              AI Capabilities
            </Heading>

            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                className="group relative p-6 bg-gradient-to-br from-ethereal-cyan/10 to-sacred-saffron/10 backdrop-blur-sm rounded-xl border border-ethereal-cyan/20 hover:border-sacred-saffron/40 transition-all duration-300"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: 'rgba(0, 217, 255, 0.05)'
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{capability.icon}</div>
                  <div className="flex-1">
                    <Heading level={5} className="mb-2 text-ethereal-cyan group-hover:text-sacred-saffron transition-colors">
                      {capability.title}
                    </Heading>
                    <Text variant="body" className="mb-4">
                      {capability.description}
                    </Text>
                    
                    {/* Neural Activity Indicator */}
                    <div className="flex space-x-1">
                      {capability.neurons.map((_, neuronIndex) => (
                        <motion.div
                          key={neuronIndex}
                          className="w-2 h-2 bg-ethereal-cyan rounded-full"
                          animate={{ 
                            opacity: [0.3, 1, 0.3],
                            scale: [1, 1.3, 1]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            delay: neuronIndex * 0.2
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover effect - neural connection lines */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(45deg, 
                      transparent 30%, 
                      #00D9FF 35%, 
                      transparent 40%,
                      transparent 60%,
                      #FF6B35 65%,
                      transparent 70%)`
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Performance Metrics */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Heading level={3} className="mb-12 text-ethereal-cyan">
            Performance Metrics
          </Heading>
          
          <div className="grid md:grid-cols-4 gap-8">
            {techMetrics.map((metric, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Metric Card */}
                <div className="p-8 bg-gradient-to-br from-cosmic-purple/50 to-cosmic-purple/20 backdrop-blur-md rounded-2xl border border-ethereal-cyan/20 group-hover:border-sacred-saffron/40 transition-all duration-300">
                  
                  {/* Animated Background Pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-10"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  >
                    <SriYantra size={100} color={index % 2 === 0 ? "#00D9FF" : "#FF6B35"} />
                  </motion.div>
                  
                  <div className="relative z-10">
                    <motion.div
                      className={`text-4xl font-bold mb-3 ${metric.color}`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      {metric.value}
                    </motion.div>
                    <Text variant="body" className="text-off-white/80">
                      {metric.label}
                    </Text>
                  </div>
                  
                  {/* Pulse Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-ethereal-cyan/50"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      opacity: [0, 0.5, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Stack Constellation */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Text variant="large" className="text-off-white/70 max-w-3xl mx-auto">
            Our technology constellation includes React, Python, TensorFlow, PyTorch, AWS, and Docker, 
            all orchestrated through the sacred geometry of optimal performance.
          </Text>
        </motion.div>
      </div>
    </section>
  )
}

export default TechnologySection