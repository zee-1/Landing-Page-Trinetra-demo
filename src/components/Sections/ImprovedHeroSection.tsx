import React from 'react'
import { motion } from 'framer-motion'

const ImprovedHeroSection: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1a0033 0%, #FF6B35 50%, #00D9FF 100%)' }}
    >
      {/* Floating Mathematical Equations */}
      <motion.div
        className="absolute top-32 left-1/4 text-ethereal-cyan font-mono text-sm opacity-60"
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{ 
          duration: 4, 
          ease: 'easeInOut', 
          repeat: Infinity,
          repeatType: 'reverse'
        }}
        style={{ color: '#00D9FF' }}
      >
        P(H|E) = P(E|H)P(H)/P(E)
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-20 text-sacred-saffron font-mono text-sm opacity-60"
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{ 
          duration: 4, 
          ease: 'easeInOut', 
          repeat: Infinity,
          repeatType: 'reverse',
          delay: 1
        }}
        style={{ color: '#FF6B35' }}
      >
        ∇f(x) = ∂f/∂x₁ + ∂f/∂x₂ + ... + ∂f/∂xₙ
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-20 text-ethereal-cyan font-mono text-sm opacity-60"
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{ 
          duration: 4, 
          ease: 'easeInOut', 
          repeat: Infinity,
          repeatType: 'reverse',
          delay: 2
        }}
        style={{ color: '#00D9FF' }}
      >
        σ(z) = 1/(1 + e⁻ᶻ)
      </motion.div>

      <motion.div
        className="absolute top-20 right-1/3 text-sacred-saffron font-mono text-sm opacity-60"
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{ 
          duration: 4, 
          ease: 'easeInOut', 
          repeat: Infinity,
          repeatType: 'reverse',
          delay: 3
        }}
        style={{ color: '#FF6B35' }}
      >
        ॐ = consciousness
      </motion.div>

      {/* Sacred Geometry Background Elements */}
      <div className="absolute inset-0 opacity-20">
        {/* Sri Yantra */}
        <motion.div 
          className="absolute top-20 left-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
        >
          <svg width="400" height="400" viewBox="0 0 200 200" fill="none">
            <g opacity="0.6">
              <motion.path
                d="M100 20 L160 160 L40 160 Z"
                stroke="#00D9FF"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: 'easeInOut' }}
              />
              <motion.path
                d="M100 180 L40 40 L160 40 Z"
                stroke="#00D9FF"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: 'easeInOut', delay: 0.5 }}
              />
              <motion.circle
                cx="100"
                cy="100"
                r="60"
                stroke="#00D9FF"
                strokeWidth="0.5"
                fill="none"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: 'easeOut', delay: 1 }}
              />
              <motion.circle
                cx="100"
                cy="100"
                r="3"
                fill="#00D9FF"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 2 }}
              />
            </g>
          </svg>
        </motion.div>

        {/* Fibonacci Spiral */}
        <motion.div 
          className="absolute bottom-20 right-10"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, ease: 'linear', repeat: Infinity }}
        >
          <svg width="300" height="300" viewBox="0 0 150 150" fill="none">
            <motion.path
              d="M75 75 Q60 60 45 75 Q30 90 45 105 Q60 120 75 105 Q90 90 105 105 Q120 120 135 105 Q150 90 135 75 Q120 60 105 75"
              stroke="#FF6B35"
              strokeWidth="2"
              fill="none"
              opacity="0.7"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, ease: 'easeInOut' }}
            />
          </svg>
        </motion.div>

        {/* Additional Sacred Geometry */}
        <motion.div 
          className="absolute top-1/3 right-1/4"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
        >
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
            <motion.path
              d="M100 20 L160 160 L40 160 Z"
              stroke="#FF6B35"
              strokeWidth="1"
              fill="none"
              opacity="0.25"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: 'easeInOut', delay: 1 }}
            />
          </svg>
        </motion.div>
      </div>

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
            <h1 
              className="text-6xl md:text-8xl font-bold leading-tight mb-6"
              style={{
                background: 'linear-gradient(45deg, #FAFAF8, #00D9FF, #FF6B35)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              TrinetraAI
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
          >
            <h3 
              className="text-3xl md:text-4xl font-medium mb-4"
              style={{ color: '#00D9FF' }}
            >
              Your Partner in AI-Powered Transformation
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.9 }}
          >
            <p 
              className="text-lg md:text-xl mb-8 max-w-2xl leading-relaxed"
              style={{ color: 'rgba(250, 250, 248, 0.9)' }}
            >
              At Trinetra, we specialize in empowering businesses to achieve unparalleled efficiency and innovation through advanced AI. From comprehensive process re-engineering to cutting-edge generative AI assistance, we tailor solutions that drive tangible results.
            </p>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 1.2 }}
          >
            <motion.button
              className="px-8 py-4 font-semibold rounded-lg text-lg transition-all duration-300"
              style={{
                background: 'linear-gradient(45deg, #FF6B35, #00D9FF)',
                color: '#1a0033'
              }}
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

        {/* Right Content - 3D Visualization Placeholder */}
        <motion.div 
          className="flex-1 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.8 }}
        >
          <div className="relative">
            {/* Placeholder for 3D Mandala */}
            <div 
              className="w-96 h-96 rounded-full flex items-center justify-center"
              style={{
                background: 'radial-gradient(circle, rgba(0, 217, 255, 0.2), rgba(255, 107, 53, 0.1), transparent)'
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
                className="text-6xl"
                style={{ color: '#00D9FF' }}
              >
                ॐ
              </motion.div>
            </div>
            
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(0, 217, 255, 0.3), transparent)'
              }}
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
        <div 
          className="text-2xl"
          style={{ color: '#00D9FF' }}
        >
          ॐ
        </div>
        <div 
          className="text-sm mt-2"
          style={{ color: 'rgba(250, 250, 248, 0.6)' }}
        >
          Scroll to explore
        </div>
      </motion.div>
    </section>
  )
}

export default ImprovedHeroSection