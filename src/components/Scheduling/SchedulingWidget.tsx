import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface SchedulingWidgetProps {
  calendlyUrl?: string
  acuityUrl?: string
  calComUrl?: string
  customBookingUrl?: string
}

const SchedulingWidget: React.FC<SchedulingWidgetProps> = ({ 
  calendlyUrl,
  acuityUrl, 
  calComUrl,
  customBookingUrl
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedPlatform, setSelectedPlatform] = useState<string>('')

  // Available scheduling platforms
  const schedulingOptions = [
    {
      id: 'calendly',
      name: 'Calendly',
      url: calendlyUrl || 'https://calendly.com/your-username/consultation',
      icon: '📅',
      description: 'Quick 30-min consultation'
    },
    {
      id: 'acuity',
      name: 'Acuity Scheduling', 
      url: acuityUrl || 'https://your-business.acuityscheduling.com',
      icon: '🗓️',
      description: 'Detailed project discussion'
    },
    {
      id: 'calcom',
      name: 'Cal.com',
      url: calComUrl || 'https://cal.com/your-username/meeting',
      icon: '⏰',
      description: 'Technical deep-dive session'
    }
  ]

  const handleScheduleClick = (platform: string, url: string) => {
    setSelectedPlatform(platform)
    // Open scheduling platform in new window
    window.open(url, '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes')
  }

  const buttonStyles: React.CSSProperties = {
    background: 'linear-gradient(45deg, #00D9FF, #FF6B35)',
    border: 'none',
    borderRadius: '12px',
    color: '#1a0033',
    fontSize: '1.1rem',
    fontWeight: '700',
    cursor: 'pointer',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    transition: 'all 0.3s ease',
    padding: '1rem 2rem'
  }

  const modalStyles: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem'
  }

  const modalContentStyles: React.CSSProperties = {
    background: 'linear-gradient(135deg, rgba(26, 0, 51, 0.95), rgba(45, 27, 105, 0.9))',
    borderRadius: '20px',
    border: '1px solid rgba(0, 217, 255, 0.3)',
    padding: '2rem',
    maxWidth: '600px',
    width: '100%',
    backdropFilter: 'blur(20px)',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
  }

  return (
    <>
      <motion.button
        style={buttonStyles}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
      >
        📅 Schedule Consultation
      </motion.button>

      {/* Scheduling Options Modal */}
      {isOpen && (
        <div style={modalStyles} onClick={() => setIsOpen(false)}>
          <motion.div
            style={modalContentStyles}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'rgba(255, 107, 53, 0.2)',
                border: '1px solid #FF6B35',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                color: '#FF6B35',
                cursor: 'pointer',
                fontSize: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ×
            </button>

            {/* Modal Header */}
            <div style={{ marginBottom: '2rem', paddingRight: '3rem' }}>
              <h2 style={{ 
                color: '#00D9FF', 
                fontSize: '2rem', 
                marginBottom: '1rem',
                fontWeight: '600'
              }}>
                Schedule Your AI Consultation
              </h2>
              <p style={{ 
                color: 'rgba(250, 250, 248, 0.8)', 
                fontSize: '1.1rem',
                lineHeight: '1.6'
              }}>
                Choose the type of consultation that best fits your needs. All sessions are conducted by our AI experts.
              </p>
            </div>

            {/* Scheduling Options */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {schedulingOptions.map((option) => (
                <motion.button
                  key={option.id}
                  style={{
                    background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.1), rgba(255, 107, 53, 0.1))',
                    border: '1px solid rgba(0, 217, 255, 0.3)',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    color: '#FAFAF8',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}
                  whileHover={{
                    scale: 1.02,
                    background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.2), rgba(255, 107, 53, 0.2))',
                    borderColor: 'rgba(0, 217, 255, 0.5)'
                  }}
                  onClick={() => handleScheduleClick(option.id, option.url)}
                >
                  <div style={{ fontSize: '2rem' }}>{option.icon}</div>
                  <div>
                    <h3 style={{ 
                      color: '#00D9FF', 
                      fontSize: '1.2rem', 
                      fontWeight: '600',
                      marginBottom: '0.5rem'
                    }}>
                      {option.name}
                    </h3>
                    <p style={{ 
                      color: 'rgba(250, 250, 248, 0.8)', 
                      fontSize: '0.95rem',
                      margin: 0
                    }}>
                      {option.description}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Footer */}
            <div style={{ 
              marginTop: '2rem', 
              padding: '1rem',
              background: 'rgba(0, 217, 255, 0.1)',
              borderRadius: '8px',
              border: '1px solid rgba(0, 217, 255, 0.2)'
            }}>
              <p style={{ 
                color: 'rgba(250, 250, 248, 0.9)', 
                fontSize: '0.9rem',
                margin: 0,
                textAlign: 'center'
              }}>
                💡 <strong>Free Consultation:</strong> All initial consultations are complimentary. 
                We'll discuss your AI transformation goals and provide actionable insights.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}

export default SchedulingWidget