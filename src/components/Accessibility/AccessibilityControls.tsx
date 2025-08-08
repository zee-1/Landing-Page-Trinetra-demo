import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAccessibility } from './AccessibilityProvider'

const AccessibilityControls: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { state, toggleReducedMotion, toggleHighContrast, setFontSize } = useAccessibility()

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 left-6 w-14 h-14 bg-gradient-to-r from-ethereal-cyan to-sacred-saffron text-cosmic-purple rounded-full shadow-2xl border-2 border-ethereal-cyan/20 z-50 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 10px 30px rgba(255, 107, 53, 0.4)"
        }}
        whileTap={{ scale: 0.9 }}
        aria-label="Accessibility Controls"
      >
        <span className="text-xl">♿</span>
        
        {/* Pulse Ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-sacred-saffron/40"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.8, 0, 0.8]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 left-6 z-50"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-br from-cosmic-purple/95 to-cosmic-purple/90 backdrop-blur-md rounded-2xl border border-ethereal-cyan/20 p-6 shadow-2xl min-w-64">
              <h3 className="text-lg font-semibold text-ethereal-cyan mb-4 flex items-center">
                <span className="mr-2">♿</span>
                Accessibility
              </h3>

              {/* Reduced Motion Toggle */}
              <div className="mb-4">
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-off-white text-sm">Reduce Motion</span>
                  <motion.button
                    onClick={toggleReducedMotion}
                    className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
                      state.reducedMotion 
                        ? 'bg-sacred-saffron' 
                        : 'bg-ethereal-cyan/30'
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow"
                      animate={{
                        x: state.reducedMotion ? 24 : 0
                      }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.button>
                </label>
              </div>

              {/* High Contrast Toggle */}
              <div className="mb-4">
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-off-white text-sm">High Contrast</span>
                  <motion.button
                    onClick={toggleHighContrast}
                    className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
                      state.highContrast 
                        ? 'bg-sacred-saffron' 
                        : 'bg-ethereal-cyan/30'
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow"
                      animate={{
                        x: state.highContrast ? 24 : 0
                      }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.button>
                </label>
              </div>

              {/* Font Size Controls */}
              <div className="mb-4">
                <span className="text-off-white text-sm block mb-2">Font Size</span>
                <div className="flex gap-2">
                  {(['normal', 'large', 'larger'] as const).map((size) => (
                    <motion.button
                      key={size}
                      onClick={() => setFontSize(size)}
                      className={`px-3 py-1 rounded text-xs font-semibold transition-colors ${
                        state.fontSize === size
                          ? 'bg-sacred-saffron text-cosmic-purple'
                          : 'bg-ethereal-cyan/20 text-ethereal-cyan hover:bg-ethereal-cyan/30'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {size === 'normal' ? 'A' : size === 'large' ? 'A+' : 'A++'}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Keyboard Navigation Hint */}
              {state.focusVisible && (
                <motion.div
                  className="text-xs text-ethereal-cyan/80 border border-ethereal-cyan/20 rounded p-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  💡 Use Tab to navigate, Enter to activate
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default AccessibilityControls