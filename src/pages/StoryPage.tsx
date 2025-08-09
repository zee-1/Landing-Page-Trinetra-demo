import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import DetachedNavigation from '../components/Navigation/DetachedNavigation'
import FooterNavigation from '../components/Navigation/FooterNavigation'

const StoryPage: React.FC = () => {
  const timelineEvents = [
    {
      year: '2019',
      title: 'The Vision',
      description: 'Two AI veterans meet and discover a shared passion for bridging ancient wisdom with modern technology.',
      icon: '💡',
      color: '#00D9FF'
    },
    {
      year: '2020',
      title: 'Deep Research',
      description: 'Extensive study of Vedic mathematics, sacred geometry, and their applications in computational systems.',
      icon: '📚',
      color: '#FF6B35'
    },
    {
      year: '2021',
      title: 'First Prototype',
      description: 'Development of the first AI system incorporating sacred geometry principles for data optimization.',
      icon: '⚙️',
      color: '#9D4EDD'
    },
    {
      year: '2022',
      title: 'Breakthrough',
      description: 'Discovery of how ancient mathematical patterns can significantly improve AI decision-making processes.',
      icon: '🚀',
      color: '#06FFA5'
    },
    {
      year: '2023',
      title: 'Trinetra Born',
      description: 'Official founding of Trinetra AI Solutions with our revolutionary approach to ethical AI.',
      icon: '🏢',
      color: '#FFD60A'
    },
    {
      year: '2024',
      title: 'Market Impact',
      description: 'Launch of our hospitality AI agent, transforming business operations with 40% efficiency improvements.',
      icon: '📈',
      color: '#FF006E'
    }
  ]

  const values = [
    {
      title: 'Ancient Wisdom',
      description: 'We draw from thousands of years of human knowledge, particularly Vedic principles and sacred geometry.',
      icon: '🕉️',
      gradient: 'linear-gradient(135deg, #FF6B35, #FFD60A)'
    },
    {
      title: 'Modern Innovation',
      description: 'Cutting-edge AI technology, machine learning algorithms, and state-of-the-art computational systems.',
      icon: '🤖',
      gradient: 'linear-gradient(135deg, #00D9FF, #06FFA5)'
    },
    {
      title: 'Ethical Foundation',
      description: 'Every solution is built on principles of transparency, fairness, and respect for human dignity.',
      icon: '⚖️',
      gradient: 'linear-gradient(135deg, #9D4EDD, #FF006E)'
    },
    {
      title: 'Transformative Impact',
      description: 'We create solutions that genuinely improve lives and transform businesses for the better.',
      icon: '✨',
      gradient: 'linear-gradient(135deg, #FFD60A, #FF6B35)'
    }
  ]

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0027 0%, #1a0033 25%, #2d1b69 50%, #1a0033 75%, #0f0027 100%)',
      color: '#FAFAF8'
    }}>
      {/* Navigation */}
      <DetachedNavigation />
      
      {/* Back to Home Button */}
      <Link 
        to="/"
        style={{
          position: 'fixed',
          top: '2rem',
          right: '2rem',
          background: 'linear-gradient(45deg, #FF6B35, #00D9FF)',
          color: '#1a0033',
          padding: '0.75rem 1.5rem',
          borderRadius: '12px',
          textDecoration: 'none',
          fontWeight: '600',
          fontSize: '0.9rem',
          zIndex: 100,
          transition: 'all 0.3s ease'
        }}
      >
        ← Back to Home
      </Link>

      {/* Page Content */}
      <div style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Hero Section */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: '6rem' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={{ 
            fontSize: '4rem', 
            fontWeight: '700',
            background: 'linear-gradient(45deg, #FAFAF8, #00D9FF, #FF6B35)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '2rem'
          }}>
            Our Story
          </h1>
          <p style={{ 
            fontSize: '1.3rem', 
            color: 'rgba(250, 250, 248, 0.8)', 
            maxWidth: '700px', 
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            The journey from ancient wisdom to modern AI innovation - how Trinetra came to bridge 
            thousands of years of human knowledge with cutting-edge technology.
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ marginBottom: '8rem' }}>
          <motion.h2
            style={{
              fontSize: '2.5rem',
              color: '#00D9FF',
              textAlign: 'center',
              marginBottom: '4rem',
              fontWeight: '600'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Journey Timeline
          </motion.h2>

          <div style={{ position: 'relative' }}>
            {/* Timeline Line */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: '0',
              bottom: '0',
              width: '2px',
              background: 'linear-gradient(180deg, #00D9FF, #FF6B35)',
              transform: 'translateX(-50%)',
              zIndex: 1
            }} />

            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '4rem',
                  position: 'relative'
                }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Timeline Node */}
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '60px',
                  height: '60px',
                  background: event.color,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  zIndex: 2,
                  boxShadow: `0 0 20px ${event.color}40`
                }}>
                  {event.icon}
                </div>

                {/* Content */}
                <div style={{
                  width: '45%',
                  marginLeft: index % 2 === 0 ? '0' : '55%',
                  textAlign: index % 2 === 0 ? 'right' : 'left'
                }}>
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.1), rgba(255, 107, 53, 0.1))',
                    border: `1px solid ${event.color}`,
                    borderRadius: '16px',
                    padding: '2rem',
                    backdropFilter: 'blur(15px)'
                  }}>
                    <div style={{
                      color: event.color,
                      fontSize: '1.8rem',
                      fontWeight: '700',
                      marginBottom: '0.5rem'
                    }}>
                      {event.year}
                    </div>
                    <h3 style={{
                      color: '#FAFAF8',
                      fontSize: '1.4rem',
                      fontWeight: '600',
                      marginBottom: '1rem'
                    }}>
                      {event.title}
                    </h3>
                    <p style={{
                      color: 'rgba(250, 250, 248, 0.8)',
                      fontSize: '1rem',
                      lineHeight: '1.6'
                    }}>
                      {event.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <motion.div
          style={{ marginBottom: '6rem' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 style={{
            fontSize: '2.5rem',
            color: '#FF6B35',
            textAlign: 'center',
            marginBottom: '4rem',
            fontWeight: '600'
          }}>
            What Drives Us
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {values.map((value, index) => (
              <motion.div
                key={index}
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.1), rgba(255, 107, 53, 0.1))',
                  border: '1px solid rgba(0, 217, 255, 0.3)',
                  borderRadius: '20px',
                  padding: '2rem',
                  textAlign: 'center',
                  backdropFilter: 'blur(15px)'
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(0, 217, 255, 0.2)' }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: value.gradient,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  margin: '0 auto 1.5rem'
                }}>
                  {value.icon}
                </div>
                
                <h3 style={{
                  color: '#FAFAF8',
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  marginBottom: '1rem'
                }}>
                  {value.title}
                </h3>
                
                <p style={{
                  color: 'rgba(250, 250, 248, 0.8)',
                  fontSize: '1rem',
                  lineHeight: '1.6'
                }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          style={{
            background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.15), rgba(0, 217, 255, 0.15))',
            border: '2px solid rgba(0, 217, 255, 0.4)',
            borderRadius: '25px',
            padding: '4rem',
            textAlign: 'center',
            backdropFilter: 'blur(20px)'
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>🚀</div>
          <h3 style={{ 
            color: '#00D9FF', 
            fontSize: '2.2rem', 
            fontWeight: '600',
            marginBottom: '1.5rem'
          }}>
            Ready to Transform Your Business?
          </h3>
          <p style={{ 
            color: 'rgba(250, 250, 248, 0.9)', 
            fontSize: '1.2rem',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Join us in bridging ancient wisdom with modern AI. Let's create something extraordinary together.
          </p>
          <Link 
            to="/"
            style={{
              display: 'inline-block',
              padding: '1.2rem 2.5rem',
              background: 'linear-gradient(45deg, #FF6B35, #00D9FF)',
              color: '#1a0033',
              textDecoration: 'none',
              borderRadius: '15px',
              fontSize: '1.1rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              transition: 'all 0.3s ease'
            }}
          >
            Start Your Journey
          </Link>
        </motion.div>
      </div>
      
      {/* Footer Navigation */}
      <FooterNavigation />
    </div>
  )
}

export default StoryPage