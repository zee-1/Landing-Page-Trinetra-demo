import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface NavigationItem {
  id: string
  label: string
  icon: string
}

const SmoothScroll: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero')
  const [isVisible, setIsVisible] = useState(false)

  const navigationItems: NavigationItem[] = [
    { id: 'hero', label: 'Home', icon: 'ॐ' },
    { id: 'philosophy', label: 'Philosophy', icon: '🔮' },
    { id: 'solutions', label: 'Solutions', icon: '⬡' },
    { id: 'product', label: 'Product', icon: '🤖' },
    { id: 'technology', label: 'Technology', icon: '🧠' },
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
    handleScroll() // Check initial position

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

  return (
    <>
      {/* Floating Navigation */}
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-b from-cosmic-purple/80 to-cosmic-purple/60 backdrop-blur-md rounded-2xl border border-ethereal-cyan/20 p-2 shadow-2xl">
              {navigationItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-12 h-12 flex items-center justify-center rounded-xl mb-2 last:mb-0 transition-all duration-300 group relative ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-sacred-saffron to-ethereal-cyan text-cosmic-purple'
                      : 'text-ethereal-cyan hover:text-sacred-saffron hover:bg-ethereal-cyan/10'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <span className="text-lg">{item.icon}</span>
                  
                  {/* Tooltip */}
                  <motion.div
                    className="absolute right-full mr-3 px-3 py-1 bg-cosmic-purple/90 text-off-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none border border-ethereal-cyan/20"
                    initial={{ opacity: 0, x: 10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
                    <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 w-0 h-0 border-l-4 border-l-cosmic-purple/90 border-y-4 border-y-transparent" />
                  </motion.div>
                </motion.button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-6 w-14 h-14 bg-gradient-to-r from-sacred-saffron to-ethereal-cyan text-cosmic-purple rounded-full shadow-2xl border-2 border-ethereal-cyan/20 z-50 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0, rotate: 180 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 10px 30px rgba(0, 217, 255, 0.4)"
            }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ y: [-2, 2, -2] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="text-xl font-bold"
            >
              ↑
            </motion.div>
            
            {/* Pulse Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-ethereal-cyan/40"
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
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-sacred-saffron to-ethereal-cyan z-50 origin-left"
        initial={{ scaleX: 0 }}
        style={{
          scaleX: typeof window !== 'undefined' ? 
            window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) : 0
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  )
}

export default SmoothScroll