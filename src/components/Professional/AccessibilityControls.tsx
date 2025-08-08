import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface AccessibilityState {
  reducedMotion: boolean
  highContrast: boolean
  fontSize: 'normal' | 'large' | 'larger'
  focusVisible: boolean
}

const AccessibilityControls: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [state, setState] = useState<AccessibilityState>({
    reducedMotion: false,
    highContrast: false,
    fontSize: 'normal',
    focusVisible: false
  })

  useEffect(() => {
    // Check system preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)')

    setState(prev => ({
      ...prev,
      reducedMotion: prefersReducedMotion.matches,
      highContrast: prefersHighContrast.matches
    }))

    // Listen for changes
    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      setState(prev => ({ ...prev, reducedMotion: e.matches }))
    }

    const handleHighContrastChange = (e: MediaQueryListEvent) => {
      setState(prev => ({ ...prev, highContrast: e.matches }))
    }

    prefersReducedMotion.addEventListener('change', handleReducedMotionChange)
    prefersHighContrast.addEventListener('change', handleHighContrastChange)

    // Keyboard navigation detection
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setState(prev => ({ ...prev, focusVisible: true }))
      }
    }

    const handleMousedown = () => {
      setState(prev => ({ ...prev, focusVisible: false }))
    }

    document.addEventListener('keydown', handleKeydown)
    document.addEventListener('mousedown', handleMousedown)

    return () => {
      prefersReducedMotion.removeEventListener('change', handleReducedMotionChange)
      prefersHighContrast.removeEventListener('change', handleHighContrastChange)
      document.removeEventListener('keydown', handleKeydown)
      document.removeEventListener('mousedown', handleMousedown)
    }
  }, [])

  useEffect(() => {
    // Apply CSS classes based on accessibility state
    const root = document.documentElement

    // Reduced motion
    if (state.reducedMotion) {
      root.classList.add('reduce-motion')
    } else {
      root.classList.remove('reduce-motion')
    }

    // High contrast
    if (state.highContrast) {
      root.classList.add('high-contrast')
    } else {
      root.classList.remove('high-contrast')
    }

    // Font size
    root.classList.remove('font-large', 'font-larger')
    if (state.fontSize === 'large') {
      root.classList.add('font-large')
    } else if (state.fontSize === 'larger') {
      root.classList.add('font-larger')
    }

    // Focus visible
    if (state.focusVisible) {
      root.classList.add('focus-visible')
    } else {
      root.classList.remove('focus-visible')
    }
  }, [state])

  const toggleReducedMotion = () => {
    setState(prev => ({ ...prev, reducedMotion: !prev.reducedMotion }))
  }

  const toggleHighContrast = () => {
    setState(prev => ({ ...prev, highContrast: !prev.highContrast }))
  }

  const setFontSize = (fontSize: AccessibilityState['fontSize']) => {
    setState(prev => ({ ...prev, fontSize }))
  }

  const buttonStyles: React.CSSProperties = {
    position: 'fixed',
    bottom: '2rem',
    left: '1.5rem',
    width: '3.5rem',
    height: '3.5rem',
    background: 'linear-gradient(45deg, #00D9FF, #FF6B35)',
    color: '#1a0033',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    boxShadow: '0 10px 30px rgba(255, 107, 53, 0.3)',
    zIndex: 50,
    transition: 'all 0.3s ease'
  }

  const panelStyles: React.CSSProperties = {
    position: 'fixed',
    bottom: '6rem',
    left: '1.5rem',
    zIndex: 50,
    background: 'linear-gradient(135deg, rgba(26, 0, 51, 0.95), rgba(26, 0, 51, 0.9))',
    backdropFilter: 'blur(15px)',
    borderRadius: '16px',
    border: '1px solid rgba(0, 217, 255, 0.2)',
    padding: '1.5rem',
    minWidth: '16rem',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)'
  }

  const toggleStyles = (isActive: boolean): React.CSSProperties => ({
    position: 'relative',
    width: '3rem',
    height: '1.5rem',
    borderRadius: '0.75rem',
    background: isActive ? '#FF6B35' : 'rgba(0, 217, 255, 0.3)',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  })

  const toggleKnobStyles = (isActive: boolean): React.CSSProperties => ({
    position: 'absolute',
    top: '0.125rem',
    left: isActive ? '1.375rem' : '0.125rem',
    width: '1.25rem',
    height: '1.25rem',
    background: '#FAFAF8',
    borderRadius: '50%',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.2s ease'
  })

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        style={buttonStyles}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)'
          e.currentTarget.style.boxShadow = '0 15px 40px rgba(255, 107, 53, 0.5)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)'
          e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 107, 53, 0.3)'
        }}
        aria-label="Accessibility Controls"
      >
        <span>♿</span>
        
        {/* Pulse Ring */}
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            border: '2px solid rgba(255, 107, 53, 0.4)'
          }}
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
            style={panelStyles}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <h3 style={{ 
              fontSize: '1.125rem', 
              fontWeight: '600', 
              color: '#00D9FF', 
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span>♿</span>
              Accessibility
            </h3>

            {/* Reduced Motion Toggle */}
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                cursor: 'pointer' 
              }}>
                <span style={{ color: '#FAFAF8', fontSize: '0.875rem' }}>
                  Reduce Motion
                </span>
                <motion.button
                  onClick={toggleReducedMotion}
                  style={toggleStyles(state.reducedMotion)}
                  whileTap={{ scale: 0.95 }}
                >
                  <div style={toggleKnobStyles(state.reducedMotion)} />
                </motion.button>
              </label>
            </div>

            {/* High Contrast Toggle */}
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                cursor: 'pointer' 
              }}>
                <span style={{ color: '#FAFAF8', fontSize: '0.875rem' }}>
                  High Contrast
                </span>
                <motion.button
                  onClick={toggleHighContrast}
                  style={toggleStyles(state.highContrast)}
                  whileTap={{ scale: 0.95 }}
                >
                  <div style={toggleKnobStyles(state.highContrast)} />
                </motion.button>
              </label>
            </div>

            {/* Font Size Controls */}
            <div style={{ marginBottom: '1rem' }}>
              <span style={{ color: '#FAFAF8', fontSize: '0.875rem', display: 'block', marginBottom: '0.5rem' }}>
                Font Size
              </span>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {(['normal', 'large', 'larger'] as const).map((size) => (
                  <motion.button
                    key={size}
                    onClick={() => setFontSize(size)}
                    style={{
                      padding: '0.375rem 0.75rem',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      border: 'none',
                      transition: 'all 0.2s ease',
                      background: state.fontSize === size
                        ? '#FF6B35'
                        : 'rgba(0, 217, 255, 0.2)',
                      color: state.fontSize === size
                        ? '#1a0033'
                        : '#00D9FF'
                    }}
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
                style={{
                  fontSize: '0.75rem',
                  color: 'rgba(0, 217, 255, 0.8)',
                  border: '1px solid rgba(0, 217, 255, 0.2)',
                  borderRadius: '6px',
                  padding: '0.5rem',
                  background: 'rgba(0, 217, 255, 0.1)'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                💡 Use Tab to navigate, Enter to activate
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default AccessibilityControls