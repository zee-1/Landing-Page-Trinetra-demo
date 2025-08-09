import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

interface DetachedNavSection {
  id: string
  title: string
  description: string
  link: string
}

interface DetachedNavItem {
  id: string
  label: string
  icon: string
  sections: DetachedNavSection[]
}

const DetachedNavigation: React.FC = () => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [panelPosition, setPanelPosition] = useState<{ top?: string; bottom?: string; maxHeight?: string }>({ top: '0' })
  const containerRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  // Calculate optimal panel position to avoid screen overflow
  const calculatePanelPosition = (itemIndex: number) => {
    if (!containerRef.current) return { top: '0' }
    
    const containerRect = containerRef.current.getBoundingClientRect()
    const itemHeight = 64 // Height of each nav item including margin
    const panelHeight = 400 // Maximum height of expanded panel
    const itemOffset = itemIndex * itemHeight
    const itemAbsoluteTop = containerRect.top + itemOffset
    
    const viewportHeight = window.innerHeight
    const spaceBelow = viewportHeight - itemAbsoluteTop
    const spaceAbove = itemAbsoluteTop
    const panelMargin = 20 // Safe margin from screen edges
    
    // If panel would overflow bottom of screen
    if (spaceBelow < (panelHeight + panelMargin)) {
      // If there's enough space above, position panel above the item
      if (spaceAbove > (panelHeight + panelMargin)) {
        return { 
          bottom: `${itemHeight}px`,
          top: 'auto'
        }
      }
      // If neither above nor below has enough space, center it in available space
      else {
        const availableHeight = Math.max(spaceAbove, spaceBelow) - panelMargin
        const centerOffset = (itemHeight - Math.min(panelHeight, availableHeight)) / 2
        return { 
          top: `${centerOffset}px`,
          maxHeight: `${availableHeight}px`
        }
      }
    }
    
    // Default position aligned with nav item
    return { top: '0' }
  }

  // Handle window resize to recalculate panel positions
  useEffect(() => {
    const handleResize = () => {
      if (expandedItem) {
        const currentIndex = navigationItems.findIndex(item => item.id === expandedItem)
        if (currentIndex !== -1) {
          const position = calculatePanelPosition(currentIndex)
          setPanelPosition(position)
        }
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [expandedItem])

  // Navigation items with expandable sections
  const navigationItems: DetachedNavItem[] = [
    {
      id: 'about',
      label: 'About Us',
      icon: '🏢',
      sections: [
        { 
          id: 'team', 
          title: 'Our Team', 
          description: 'Meet the AI veterans behind Trinetra',
          link: '/team' 
        },
        { 
          id: 'story', 
          title: 'Our Story', 
          description: 'Journey from concept to AI innovation',
          link: '/story' 
        },
        { 
          id: 'mission', 
          title: 'Our Mission', 
          description: 'Bridging ancient wisdom with modern AI',
          link: '/mission' 
        },
        { 
          id: 'values', 
          title: 'Our Values', 
          description: 'Ethics and principles driving our work',
          link: '/values' 
        }
      ]
    },
    {
      id: 'blogs',
      label: 'Blogs',
      icon: '📝',
      sections: [
        { 
          id: 'latest', 
          title: 'Latest Posts', 
          description: 'Recent insights and updates',
          link: '/blog' 
        },
        { 
          id: 'ai-insights', 
          title: 'AI Insights', 
          description: 'Deep technical articles and research',
          link: '/blog' 
        },
        { 
          id: 'industry', 
          title: 'Industry News', 
          description: 'Market trends and developments',
          link: '/blog' 
        },
        { 
          id: 'tutorials', 
          title: 'Tutorials', 
          description: 'Step-by-step AI implementation guides',
          link: '/blog' 
        }
      ]
    },
    {
      id: 'resources',
      label: 'Resources',
      icon: '📚',
      sections: [
        { 
          id: 'case-studies', 
          title: 'Case Studies', 
          description: 'Real-world AI transformation stories',
          link: '/resources' 
        },
        { 
          id: 'whitepapers', 
          title: 'White Papers', 
          description: 'In-depth research and analysis',
          link: '/resources' 
        },
        { 
          id: 'documentation', 
          title: 'Documentation', 
          description: 'Technical guides and API references',
          link: '/resources' 
        },
        { 
          id: 'downloads', 
          title: 'Downloads', 
          description: 'Tools, templates, and resources',
          link: '/resources' 
        }
      ]
    }
  ]

  // Show navigation after scroll
  React.useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle section navigation
  const handleSectionClick = (link: string) => {
    if (link.startsWith('#')) {
      const element = document.querySelector(link)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate(link)
    }
    setExpandedItem(null) // Collapse after click
  }

  // Container styles
  const containerStyles: React.CSSProperties = {
    position: 'fixed',
    left: '1.5rem',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 40, // Lower than main nav (50)
    background: 'rgba(26, 0, 51, 0.85)',
    backdropFilter: 'blur(15px)',
    borderRadius: '20px',
    border: '1px solid rgba(0, 217, 255, 0.25)',
    padding: '0.75rem',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
    minWidth: '4rem',
    overflow: 'visible'
  }

  // Main nav item styles
  const navItemStyles = (isActive: boolean): React.CSSProperties => ({
    width: '3.5rem',
    height: '3.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '16px',
    marginBottom: '0.75rem',
    cursor: 'pointer',
    background: isActive 
      ? 'rgba(0, 217, 255, 0.15)'
      : 'transparent',
    color: isActive ? '#00D9FF' : 'rgba(0, 217, 255, 0.7)',
    border: isActive ? '1px solid rgba(0, 217, 255, 0.3)' : '1px solid transparent',
    position: 'relative',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    willChange: 'transform'
  })

  // Expandable section styles - dynamic positioning
  const sectionPanelStyles: React.CSSProperties = {
    position: 'absolute',
    left: '100%',
    ...panelPosition,
    marginLeft: '1rem',
    background: 'rgba(26, 0, 51, 0.95)',
    backdropFilter: 'blur(20px)',
    borderRadius: '16px',
    border: '1px solid rgba(0, 217, 255, 0.3)',
    padding: '1rem',
    minWidth: '280px',
    maxHeight: panelPosition.maxHeight || '450px',
    overflowY: 'auto',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    zIndex: 41
  }

  const sectionItemStyles: React.CSSProperties = {
    padding: '0.75rem',
    marginBottom: '0.5rem',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: '1px solid transparent'
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={containerRef}
          style={containerStyles}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ 
            duration: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          onMouseLeave={() => setExpandedItem(null)}
        >
          {navigationItems.map((item, index) => (
            <div key={item.id} style={{ position: 'relative' }}>
              <motion.button
                style={navItemStyles(expandedItem === item.id)}
                className="detached-nav-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                onMouseEnter={() => {
                  setExpandedItem(item.id)
                  const position = calculatePanelPosition(index)
                  setPanelPosition(position)
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span style={{ fontSize: '1.3rem' }}>{item.icon}</span>
              </motion.button>

              {/* Expandable Section Panel */}
              <AnimatePresence>
                {expandedItem === item.id && (
                  <motion.div
                    style={sectionPanelStyles}
                    initial={{ 
                      opacity: 0, 
                      x: -20, 
                      scale: 0.9 
                    }}
                    animate={{ 
                      opacity: 1, 
                      x: 0, 
                      scale: 1 
                    }}
                    exit={{ 
                      opacity: 0, 
                      x: -20, 
                      scale: 0.9 
                    }}
                    transition={{
                      type: "spring",
                      damping: 25,
                      stiffness: 400,
                      duration: 0.4
                    }}
                  >
                    {/* Panel Header */}
                    <div style={{ marginBottom: '1rem' }}>
                      <h3 style={{ 
                        color: '#00D9FF', 
                        fontSize: '1.2rem', 
                        fontWeight: '600',
                        margin: '0 0 0.5rem 0',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        {item.icon} {item.label}
                      </h3>
                      <div style={{
                        height: '1px',
                        background: 'linear-gradient(90deg, rgba(0, 217, 255, 0.5), transparent)',
                        width: '100%'
                      }} />
                    </div>

                    {/* Section Items */}
                    {item.sections.map((section, sectionIndex) => (
                      <motion.div
                        key={section.id}
                        style={sectionItemStyles}
                        className="section-item"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: sectionIndex * 0.05 
                        }}
                        onClick={() => handleSectionClick(section.link)}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(0, 217, 255, 0.1)'
                          e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.3)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent'
                          e.currentTarget.style.borderColor = 'transparent'
                        }}
                      >
                        <div style={{ 
                          color: '#FAFAF8', 
                          fontSize: '1rem', 
                          fontWeight: '500',
                          marginBottom: '0.25rem'
                        }}>
                          {section.title}
                        </div>
                        <div style={{ 
                          color: 'rgba(250, 250, 248, 0.7)', 
                          fontSize: '0.85rem',
                          lineHeight: '1.4'
                        }}>
                          {section.description}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* Styling */}
          <style>{`
            .detached-nav-item {
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
            }
            .detached-nav-item:hover {
              box-shadow: 0 5px 20px rgba(0, 217, 255, 0.2);
              transform: translateY(-1px) scale(1.05);
            }
            .section-item:hover {
              transform: translateX(2px);
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default DetachedNavigation