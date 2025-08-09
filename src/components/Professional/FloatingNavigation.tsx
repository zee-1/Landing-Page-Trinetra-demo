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
  const [expandedItem, setExpandedItem] = useState<string | null>(null)
  const [isNavigationHovered, setIsNavigationHovered] = useState(false)

  const navigationItems: NavigationItem[] = [
    { id: 'hero', label: 'Home', icon: '🏠' },
    { id: 'philosophy', label: 'Philosophy', icon: '🧠' },
    { id: 'solutions', label: 'Solutions', icon: '⚙️' },
    { id: 'product', label: 'Product', icon: '🚀' },
    { id: 'contact', label: 'Contact', icon: '📞' }
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
    background: 'rgba(26, 0, 51, 0.85)',
    backdropFilter: 'blur(15px)',
    borderRadius: '20px',
    border: '1px solid rgba(0, 217, 255, 0.25)',
    padding: '0.75rem',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
    minWidth: '4.5rem',
    overflow: 'visible'
  }

  const navItemStyles = (isActive: boolean, isExpanded: boolean): React.CSSProperties => ({
    width: isExpanded ? 'auto' : '3.5rem',
    height: '3rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: '15px',
    marginBottom: '0.5rem',
    cursor: 'pointer',
    background: isActive 
      ? 'rgba(0, 217, 255, 0.15)'
      : 'transparent',
    color: isActive ? '#00D9FF' : 'rgba(0, 217, 255, 0.7)',
    border: isActive ? '1px solid rgba(0, 217, 255, 0.3)' : '1px solid transparent',
    position: 'relative',
    padding: isExpanded ? '0 1.5rem 0 0' : '0',
    minWidth: '3rem',
    overflow: 'hidden',
    willChange: 'width, padding'
  })

  const labelStyles: React.CSSProperties = {
    marginLeft: '0.75rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    whiteSpace: 'nowrap',
    position: 'relative',
    zIndex: 1,
    willChange: 'opacity, transform'
  }

  const scrollToTopStyles: React.CSSProperties = {
    position: 'fixed',
    bottom: '2rem',
    right: '1.5rem',
    width: '3.25rem',
    height: '3.25rem',
    background: 'rgba(0, 217, 255, 0.15)',
    color: '#00D9FF',
    borderRadius: '50%',
    border: '1px solid rgba(0, 217, 255, 0.3)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    boxShadow: '0 6px 20px rgba(0, 217, 255, 0.15)',
    zIndex: 50,
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)'
  }

  return (
    <>
      {/* Floating Navigation */}
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            style={navStyles}
            initial={{ opacity: 0, x: 100 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              scale: isNavigationHovered ? 1.02 : 1
            }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ 
              duration: 0.3,
              scale: {
                type: "spring",
                damping: 25,
                stiffness: 400
              }
            }}
            onMouseEnter={() => setIsNavigationHovered(true)}
            onMouseLeave={() => setIsNavigationHovered(false)}
          >
            {navigationItems.map((item, index) => {
              const isExpanded = expandedItem === item.id
              const isActive = activeSection === item.id
              
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  style={navItemStyles(isActive, isExpanded)}
                  className="nav-item"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    width: isExpanded ? 'auto' : '3rem',
                    paddingRight: isExpanded ? '1.5rem' : '0'
                  }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.05,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    width: {
                      type: "spring",
                      damping: 25,
                      stiffness: 300,
                      duration: 0.6
                    },
                    paddingRight: {
                      type: "spring", 
                      damping: 25,
                      stiffness: 300,
                      duration: 0.6
                    }
                  }}
                  onMouseEnter={() => {
                    setExpandedItem(item.id)
                  }}
                  onMouseLeave={() => {
                    setExpandedItem(null)
                  }}
                >
                  {/* Icon */}
                  <motion.div 
                    style={{
                      width: '3rem',
                      height: '3rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.2rem',
                      flexShrink: 0,
                      position: 'relative',
                      zIndex: 1
                    }}
                    animate={{
                      scale: isExpanded ? 0.95 : 1
                    }}
                    transition={{
                      type: "spring",
                      damping: 20,
                      stiffness: 400,
                      duration: 0.4
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  
                  {/* Label */}
                  <motion.span
                    style={labelStyles}
                    initial={{ opacity: 0, x: -20, scale: 0.8 }}
                    animate={{ 
                      opacity: isExpanded ? 1 : 0,
                      x: isExpanded ? 0 : -20,
                      scale: isExpanded ? 1 : 0.8
                    }}
                    transition={{
                      type: "spring",
                      damping: 20,
                      stiffness: 400,
                      duration: 0.5,
                      delay: isExpanded ? 0.1 : 0
                    }}
                  >
                    {item.label}
                  </motion.span>
                </motion.button>
              )
            })}

            <style>{`
              .nav-item {
                transition: box-shadow 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                           transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
              }
              .nav-item:hover {
                box-shadow: 0 6px 20px rgba(0, 217, 255, 0.15);
                transform: translateY(-1px) scale(1.02);
              }
              .nav-item:active {
                transform: translateY(0) scale(0.98);
                transition: transform 0.1s ease-out !important;
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
              e.currentTarget.style.transform = 'scale(1.05)'
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 217, 255, 0.25)'
              e.currentTarget.style.background = 'rgba(0, 217, 255, 0.2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 217, 255, 0.15)'
              e.currentTarget.style.background = 'rgba(0, 217, 255, 0.15)'
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
          background: 'linear-gradient(90deg, rgba(0, 217, 255, 0.8), rgba(0, 217, 255, 0.6))',
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