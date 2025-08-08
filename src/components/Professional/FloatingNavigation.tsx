import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface NavigationItem {
  id: string
  label: string
  icon: string
}

const FloatingNavigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero')
  const [isVisible, setIsVisible] = useState(false)

  const navigationItems: NavigationItem[] = [
    { id: 'hero', label: 'Home', icon: 'ॠ' },
    { id: 'philosophy', label: 'Philosophy', icon: '🔮' },
    { id: 'solutions', label: 'Solutions', icon: '⬡' },
    { id: 'product', label: 'Product', icon: '🤖' },
    { id: 'contact', label: 'Contact', icon: '✨' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)

      // Determine active section based on scroll position
      const sections = navigationItems.map(item => item.id)
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const navStyles: React.CSSProperties = {
    position: 'fixed',
    right: '1.5rem',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 50,
    background: 'linear-gradient(135deg, rgba(26, 0, 51, 0.8), rgba(26, 0, 51, 0.6))',
    backdropFilter: 'blur(10px)',
    borderRadius: '16px',
    border: '1px solid rgba(0, 217, 255, 0.2)',
    padding: '0.5rem',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)'
  }

  const navItemStyles = (isActive: boolean): React.CSSProperties => ({
    width: '3rem',
    height: '3rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '12px',
    marginBottom: '0.5rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    background: isActive 
      ? 'linear-gradient(45deg, #FF6B35, #00D9FF)' 
      : 'transparent',
    color: isActive ? '#1a0033' : '#00D9FF',
    position: 'relative'
  })

  const tooltipStyles: React.CSSProperties = {
    position: 'absolute',
    right: '100%',
    top: '50%',
    transform: 'translateY(-50%)',
    marginRight: '0.75rem',
    padding: '0.5rem 0.75rem',
    background: 'rgba(26, 0, 51, 0.9)',
    color: '#FAFAF8',
    fontSize: '0.875rem',
    borderRadius: '8px',
    whiteSpace: 'nowrap',
    opacity: 0,
    pointerEvents: 'none',
    border: '1px solid rgba(0, 217, 255, 0.2)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
  }

  const scrollToTopStyles: React.CSSProperties = {
    position: 'fixed',
    bottom: '2rem',
    right: '1.5rem',
    width: '3.5rem',
    height: '3.5rem',
    background: 'linear-gradient(45deg, #FF6B35, #00D9FF)',
    color: '#1a0033',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    boxShadow: '0 10px 30px rgba(0, 217, 255, 0.3)',
    zIndex: 50,
    transition: 'all 0.3s ease'
  }

  return (
    <>
      {/* Floating Navigation */}
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            style={navStyles}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
          >
            {navigationItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={navItemStyles(activeSection === item.id)}
                className="nav-item"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)'
                  const tooltip = e.currentTarget.querySelector('.tooltip') as HTMLElement
                  if (tooltip) tooltip.style.opacity = '1'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                  const tooltip = e.currentTarget.querySelector('.tooltip') as HTMLElement
                  if (tooltip) tooltip.style.opacity = '0'
                }}
              >
                <span style={{ fontSize: '1.25rem' }}>{item.icon}</span>
                
                {/* Tooltip */}
                <div className="tooltip" style={tooltipStyles}>
                  {item.label}
                  <div style={{
                    position: 'absolute',
                    right: 0,
                    top: '50%',
                    transform: 'translate(100%, -50%)',
                    width: 0,
                    height: 0,
                    borderLeft: '4px solid rgba(26, 0, 51, 0.9)',
                    borderTop: '4px solid transparent',
                    borderBottom: '4px solid transparent'
                  }} />
                </div>
              </motion.button>
            ))}

            <style>{`
              .nav-item:hover {
                box-shadow: 0 5px 20px rgba(0, 217, 255, 0.4);
              }
            `}</style>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={scrollToTop}
            style={scrollToTopStyles}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0, rotate: 180 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)'
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 217, 255, 0.5)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 217, 255, 0.3)'
            }}
          >
            <motion.div
              animate={{ y: [-2, 2, -2] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              ↑
            </motion.div>
            
            {/* Pulse Ring */}
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                border: '2px solid rgba(0, 217, 255, 0.4)'
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
        )}
      </AnimatePresence>

      {/* Progress Indicator */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '3px',
          background: 'linear-gradient(90deg, #FF6B35, #00D9FF)',
          zIndex: 50,
          transformOrigin: 'left',
          scaleX: typeof window !== 'undefined' ? 
            Math.min(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight), 1) : 0
        }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.1 }}
      />
    </>
  )
}

export default FloatingNavigation