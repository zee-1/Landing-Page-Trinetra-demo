import React from 'react'
import { motion } from 'framer-motion'
import MandalaNeural3D from '../ThreeD/MandalaNeural'
import { Heading, Text } from '../Typography/Typography'
import { SriYantra, FibonacciSpiral, FloatingEquation } from '../SacredGeometry/SacredPatterns'
import contentData from '../../data/content.json'

const HeroSection: React.FC = () => {
  const { hero } = contentData

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Sacred Geometry */}
      <div className="absolute inset-0 opacity-20">
        <SriYantra 
          size={400} 
          color="#00D9FF" 
          className="top-20 left-10 opacity-30" 
        />
        <FibonacciSpiral 
          size={300} 
          color="#FF6B35" 
          className="bottom-20 right-10 opacity-40" 
        />
        <SriYantra 
          size={200} 
          color="#FF6B35" 
          className="top-1/3 right-1/4 opacity-25" 
        />
      </div>

      {/* Floating Mathematical Equations */}
      <FloatingEquation 
        equation="P(H|E) = P(E|H)P(H)/P(E)" 
        className="top-32 left-1/4"
        color="#00D9FF"
      />
      <FloatingEquation 
        equation="∇f(x) = ∂f/∂x₁ + ∂f/∂x₂ + ... + ∂f/∂xₙ" 
        className="top-1/2 right-20"
        color="#FF6B35"
      />
      <FloatingEquation 
        equation="σ(z) = 1/(1 + e⁻ᶻ)" 
        className="bottom-32 left-20"
        color="#00D9FF"
      />
      <FloatingEquation 
        equation="E = mc²" 
        className="top-20 right-1/3"
        color="#FF6B35"
      />

      {/* Main Content Container */}
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between relative z-10">
        
        {/* Left Content */}
        <motion.div 
          className="flex-1 text-center lg:text-left mb-12 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
          >
            <Heading level={1} className="mb-6 bg-gradient-to-r from-off-white via-ethereal-cyan to-sacred-saffron bg-clip-text text-transparent">
              TrinetraAI
            </Heading>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
          >
            <Heading level={3} className="mb-4 text-ethereal-cyan">
              {hero.subtitle}
            </Heading>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.9 }}
          >
            <Text variant="large" className="mb-8 max-w-2xl">
              {hero.description}
            </Text>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 1.2 }}
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-sacred-saffron to-ethereal-cyan text-cosmic-purple font-semibold rounded-lg text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-ethereal-cyan/25"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 40px rgba(0, 217, 255, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Solutions
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Content - 3D Mandala */}
        <motion.div 
          className="flex-1 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.8 }}
        >
          <div className="relative">
            <MandalaNeural3D 
              width={600} 
              height={600} 
              className="max-w-full h-auto"
            />
            
            {/* Glow effect around 3D element */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-radial from-ethereal-cyan/20 to-transparent blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 4, 
                ease: 'easeInOut', 
                repeat: Infinity 
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator with Om Symbol */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ 
          duration: 2, 
          ease: 'easeInOut', 
          repeat: Infinity 
        }}
      >
        <div className="text-ethereal-cyan text-2xl">
          ॐ
        </div>
        <div className="text-off-white/60 text-sm mt-2">
          Scroll to explore
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection