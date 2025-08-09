import React from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

const FooterNavigation: React.FC = () => {
  const location = useLocation()

  const navigationLinks = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/team', label: 'Team', icon: '👥' },
    { path: '/story', label: 'Story', icon: '📖' },
    { path: '/blog', label: 'Blog', icon: '📝' },
    { path: '/resources', label: 'Resources', icon: '📚' }
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <footer style={{
      background: 'linear-gradient(135deg, rgba(26, 0, 51, 0.95), rgba(15, 0, 39, 0.95))',
      backdropFilter: 'blur(20px)',
      borderTop: '1px solid rgba(0, 217, 255, 0.2)',
      padding: '2rem 0',
      marginTop: '4rem'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem'
      }}>
        {/* Navigation Links */}
        <nav style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2rem',
          flexWrap: 'wrap'
        }}>
          {navigationLinks.map((link) => (
            <motion.div key={link.path}>
              <Link 
                to={link.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: isActive(link.path) ? '#00D9FF' : 'rgba(250, 250, 248, 0.7)',
                  textDecoration: 'none',
                  padding: '0.75rem 1rem',
                  borderRadius: '12px',
                  background: isActive(link.path) 
                    ? 'rgba(0, 217, 255, 0.15)' 
                    : 'transparent',
                  border: `1px solid ${isActive(link.path) ? 'rgba(0, 217, 255, 0.3)' : 'transparent'}`,
                  fontSize: '1rem',
                  fontWeight: '500',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (!isActive(link.path)) {
                    e.currentTarget.style.background = 'rgba(0, 217, 255, 0.1)'
                    e.currentTarget.style.color = '#00D9FF'
                    e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.2)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive(link.path)) {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.color = 'rgba(250, 250, 248, 0.7)'
                    e.currentTarget.style.borderColor = 'transparent'
                  }
                }}
              >
                <span style={{ fontSize: '1.1rem' }}>{link.icon}</span>
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Divider */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(0, 217, 255, 0.3), transparent)',
          margin: '1rem 0'
        }} />

        {/* Company Info */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(45deg, #00D9FF, #FF6B35)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem'
            }}>
              🧠
            </div>
            <div>
              <div style={{
                color: '#FAFAF8',
                fontSize: '1.1rem',
                fontWeight: '600'
              }}>
                Trinetra AI Solutions
              </div>
              <div style={{
                color: 'rgba(250, 250, 248, 0.7)',
                fontSize: '0.9rem'
              }}>
                Bridging Ancient Wisdom with Modern AI
              </div>
            </div>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            flexWrap: 'wrap'
          }}>
            {/* Quick Links */}
            <div style={{
              display: 'flex',
              gap: '1.5rem',
              fontSize: '0.9rem'
            }}>
              <a 
                href="mailto:contact@trinetra.ai"
                style={{
                  color: 'rgba(250, 250, 248, 0.7)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#00D9FF'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(250, 250, 248, 0.7)'}
              >
                📧 Contact
              </a>
              <a 
                href="https://calendly.com/trinetra"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'rgba(250, 250, 248, 0.7)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#00D9FF'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(250, 250, 248, 0.7)'}
              >
                📅 Schedule
              </a>
            </div>

            {/* Copyright */}
            <div style={{
              color: 'rgba(250, 250, 248, 0.5)',
              fontSize: '0.85rem'
            }}>
              © 2024 Trinetra AI Solutions
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterNavigation