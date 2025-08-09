import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import solutionsData from '../../data/solutions.json'

interface Solution {
  id: string
  name: string
  icon: string
  status: string
  shortDescription: string
  overview: {
    title: string
    description: string
    keyFeatures: Array<{
      feature: string
      description: string
    }>
    techStack: string[]
    benefits: string[]
  } | null
}

const SolutionsSection: React.FC = () => {
  const [selectedSolution, setSelectedSolution] = useState<string | null>(null)
  const solutions: Solution[] = solutionsData.solutions
  const demos = solutionsData.demos

  const selectedSolutionData = solutions.find(s => s.id === selectedSolution)

  const sectionStyles: React.CSSProperties = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0f0027 0%, #1a0033 25%, #2d1b69 50%, #1a0033 75%, #0f0027 100%)',
    padding: '5rem 0',
    position: 'relative',
    overflow: 'hidden'
  }

  const containerStyles: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    position: 'relative',
    zIndex: 10
  }

  const headerStyles: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '4rem'
  }

  const titleStyles: React.CSSProperties = {
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontWeight: '600',
    color: '#FAFAF8',
    marginBottom: '1rem',
    lineHeight: '1.2'
  }

  const subtitleStyles: React.CSSProperties = {
    fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
    color: 'rgba(250, 250, 248, 0.8)',
    maxWidth: '600px',
    margin: '0 auto'
  }

  const gridStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem'
  }

  const cardStyles = (isAvailable: boolean): React.CSSProperties => ({
    background: isAvailable 
      ? 'linear-gradient(135deg, rgba(0, 217, 255, 0.1), rgba(255, 107, 53, 0.1))'
      : 'linear-gradient(135deg, rgba(26, 0, 51, 0.3), rgba(0, 0, 0, 0.2))',
    border: `1px solid ${isAvailable ? 'rgba(0, 217, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)'}`,
    borderRadius: '16px',
    padding: '2rem',
    cursor: isAvailable ? 'pointer' : 'default',
    transition: 'all 0.3s ease',
    position: 'relative' as const,
    backdropFilter: 'blur(10px)',
    boxShadow: isAvailable 
      ? '0 6px 20px rgba(0, 217, 255, 0.15)' 
      : '0 3px 10px rgba(0, 0, 0, 0.2)'
  })

  const iconStyles: React.CSSProperties = {
    fontSize: '3rem',
    marginBottom: '1rem',
    display: 'block'
  }

  const cardTitleStyles: React.CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#FAFAF8',
    marginBottom: '0.75rem'
  }

  const cardDescStyles: React.CSSProperties = {
    fontSize: '1rem',
    color: 'rgba(250, 250, 248, 0.8)',
    lineHeight: '1.6',
    marginBottom: '1rem'
  }

  const statusBadgeStyles = (isAvailable: boolean): React.CSSProperties => ({
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    padding: '0.25rem 0.75rem',
    borderRadius: '20px',
    fontSize: '0.75rem',
    fontWeight: '600',
    background: isAvailable 
      ? 'linear-gradient(45deg, #00D9FF, #FF6B35)'
      : 'rgba(255, 255, 255, 0.1)',
    color: isAvailable ? '#1a0033' : 'rgba(255, 255, 255, 0.6)',
    border: isAvailable ? 'none' : '1px solid rgba(255, 255, 255, 0.2)'
  })

  const overlayStyles: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.8)',
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem'
  }

  const modalStyles: React.CSSProperties = {
    background: 'linear-gradient(135deg, rgba(26, 0, 51, 0.95), rgba(45, 27, 105, 0.9))',
    borderRadius: '20px',
    border: '1px solid rgba(0, 217, 255, 0.3)',
    padding: '2rem',
    maxWidth: '800px',
    width: '100%',
    maxHeight: '80vh',
    overflowY: 'auto',
    backdropFilter: 'blur(20px)',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
  }

  const demoButtonStyles: React.CSSProperties = {
    background: 'linear-gradient(45deg, #FF6B35, #00D9FF)',
    color: '#1a0033',
    border: 'none',
    borderRadius: '12px',
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    display: 'inline-block',
    marginTop: '1rem'
  }

  return (
    <section id="solutions" style={sectionStyles}>
      {/* Background Elements */}
      <motion.div
        style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(0, 217, 255, 0.1), transparent)',
          borderRadius: '50%'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      <motion.div
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          fontSize: '1.5rem',
          color: 'rgba(255, 107, 53, 0.4)',
          fontFamily: 'monospace'
        }}
        animate={{
          y: [-10, 10, -10],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        ॠ = solutions²
      </motion.div>

      <div style={containerStyles}>
        {/* Header */}
        <motion.div
          style={headerStyles}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 style={titleStyles}>
            AI Solutions for{' '}
            <span style={{ color: '#00D9FF' }}>Every Industry</span>
          </h2>
          <p style={subtitleStyles}>
            Discover how ancient wisdom meets cutting-edge AI to transform your business operations
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div style={gridStyles}>
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              style={cardStyles(solution.status === 'available')}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={solution.status === 'available' ? {
                scale: 1.02,
                boxShadow: '0 12px 30px rgba(0, 217, 255, 0.2)'
              } : {}}
              onClick={() => {
                if (solution.status === 'available') {
                  setSelectedSolution(solution.id)
                }
              }}
            >
              <div style={statusBadgeStyles(solution.status === 'available')}>
                {solution.status === 'available' ? 'Available' : 'Coming Soon'}
              </div>
              
              <span style={iconStyles}>{solution.icon}</span>
              <h3 style={cardTitleStyles}>{solution.name}</h3>
              <p style={cardDescStyles}>{solution.shortDescription}</p>
              
              {solution.status === 'available' && (
                <motion.div
                  style={{
                    color: '#00D9FF',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    marginTop: '1rem'
                  }}
                  whileHover={{ color: '#FF6B35' }}
                >
                  Click to explore →
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Demo Navigator */}
        <motion.div
          style={{
            textAlign: 'center',
            marginTop: '3rem'
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 style={{
            fontSize: '2rem',
            color: '#FF6B35',
            marginBottom: '2rem'
          }}>
            Experience Our Solutions
          </h3>
          
          {Object.entries(demos).map(([demoId, demo]) => (
            <motion.a
              key={demoId}
              href={demo.url}
              target="_blank"
              rel="noopener noreferrer"
              style={demoButtonStyles}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 6px 20px rgba(255, 107, 53, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              🚀 {demo.name}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Solution Detail Modal */}
      <AnimatePresence>
        {selectedSolution && selectedSolutionData?.overview && (
          <motion.div
            style={overlayStyles}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSolution(null)}
          >
            <motion.div
              style={modalStyles}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedSolution(null)}
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

              {/* Modal Content */}
              <div style={{ paddingRight: '3rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '2.5rem' }}>{selectedSolutionData.icon}</span>
                  <h2 style={{
                    fontSize: '2rem',
                    color: '#00D9FF',
                    margin: 0
                  }}>
                    {selectedSolutionData.overview.title}
                  </h2>
                </div>

                <p style={{
                  fontSize: '1.1rem',
                  color: 'rgba(250, 250, 248, 0.9)',
                  lineHeight: '1.6',
                  marginBottom: '2rem'
                }}>
                  {selectedSolutionData.overview.description}
                </p>

                {/* Key Features */}
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    color: '#FF6B35',
                    marginBottom: '1rem'
                  }}>
                    Key Features
                  </h3>
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    {selectedSolutionData.overview.keyFeatures.map((feature, index) => (
                      <div key={index} style={{
                        background: 'rgba(0, 217, 255, 0.1)',
                        border: '1px solid rgba(0, 217, 255, 0.2)',
                        borderRadius: '12px',
                        padding: '1rem'
                      }}>
                        <h4 style={{
                          color: '#00D9FF',
                          marginBottom: '0.5rem'
                        }}>
                          {feature.feature}
                        </h4>
                        <p style={{
                          color: 'rgba(250, 250, 248, 0.8)',
                          margin: 0,
                          lineHeight: '1.5'
                        }}>
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    color: '#FF6B35',
                    marginBottom: '1rem'
                  }}>
                    Proven Results
                  </h3>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1rem'
                  }}>
                    {selectedSolutionData.overview.benefits.map((benefit, index) => (
                      <div key={index} style={{
                        background: 'rgba(255, 107, 53, 0.1)',
                        border: '1px solid rgba(255, 107, 53, 0.2)',
                        borderRadius: '8px',
                        padding: '0.75rem',
                        textAlign: 'center'
                      }}>
                        <span style={{
                          color: '#FAFAF8',
                          fontSize: '0.9rem',
                          fontWeight: '600'
                        }}>
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Demo Link */}
                {demos[selectedSolution as keyof typeof demos] && (
                  <a
                    href={demos[selectedSolution as keyof typeof demos].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={demoButtonStyles}
                  >
                    🚀 Try Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default SolutionsSection