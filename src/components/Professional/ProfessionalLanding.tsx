import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import FloatingNavigation from './FloatingNavigation'
import AccessibilityControls from './AccessibilityControls'
import SolutionsSection from './SolutionsSection'
import BrainNeural3D from '../ThreeD/BrainNeural'
import SchedulingWidget from '../Scheduling/SchedulingWidget'
import { useContactForm } from '../../hooks/useContactForm'
import contentData from '../../data/content.json'
import solutionsData from '../../data/solutions.json'

const ProfessionalLanding: React.FC = () => {
  const [content, setContent] = useState(contentData)
  const [solutions, setSolutions] = useState(solutionsData)
  
  // Contact form state management
  const {
    formState,
    errors,
    isSubmitting,
    submitResult,
    handleInputChange,
    handleSubmit
  } = useContactForm()

  useEffect(() => {
    // Data is already imported statically, but this allows for future dynamic loading
    setContent(contentData)
    setSolutions(solutionsData)
  }, [])
  const heroStyles: React.CSSProperties = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0f0027 0%, #1a0033 25%, #2d1b69 50%, #1a0033 75%, #0f0027 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    padding: '0 2rem'
  }

  const containerStyles: React.CSSProperties = {
    maxWidth: '1200px',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'center',
    zIndex: 2,
    position: 'relative'
  }

  const textContentStyles: React.CSSProperties = {
    color: '#FAFAF8'
  }

  const titleStyles: React.CSSProperties = {
    fontSize: '4.5rem',
    fontWeight: '800',
    background: 'linear-gradient(45deg, #FAFAF8, #00D9FF, #FF6B35)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '2rem',
    lineHeight: '1.1'
  }

  const subtitleStyles: React.CSSProperties = {
    fontSize: '1.8rem',
    color: '#00D9FF',
    marginBottom: '1.5rem',
    fontWeight: '600'
  }

  const descriptionStyles: React.CSSProperties = {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    color: 'rgba(250, 250, 248, 0.9)',
    marginBottom: '3rem'
  }

  const buttonStyles: React.CSSProperties = {
    padding: '1rem 2.5rem',
    fontSize: '1.1rem',
    fontWeight: '600',
    background: 'linear-gradient(45deg, #FF6B35, #00D9FF)',
    border: 'none',
    borderRadius: '8px',
    color: '#1a0033',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(0, 217, 255, 0.2)',
    textTransform: 'none',
    letterSpacing: '0.5px'
  }

  const visualSectionStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  }

  const mandalaStyles: React.CSSProperties = {
    width: '400px',
    height: '400px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  const backgroundPatternStyles: React.CSSProperties = {
    position: 'absolute',
    inset: '0',
    opacity: '0.1',
    pointerEvents: 'none'
  }

  const equationStyles: React.CSSProperties = {
    position: 'absolute',
    fontFamily: 'monospace',
    fontSize: '0.9rem',
    opacity: '0.7',
    animation: 'float 6s ease-in-out infinite'
  }

  const philosophyStyles: React.CSSProperties = {
    padding: '6rem 2rem',
    background: 'linear-gradient(180deg, #1a0033 0%, #2d1b69 50%, #1a0033 100%)',
    minHeight: '100vh'
  }

  const sectionTitleStyles: React.CSSProperties = {
    fontSize: '3.5rem',
    fontWeight: '700',
    textAlign: 'center',
    color: '#FAFAF8',
    marginBottom: '4rem'
  }


  return (
    <div>
      {/* Add CSS animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        .floating-equation {
          animation: float 6s ease-in-out infinite;
        }
        
        .rotating-geometry {
          animation: rotate 20s linear infinite;
        }
        
        .pulsing-glow {
          animation: pulse 3s ease-in-out infinite;
        }
        
        .hover-scale:hover {
          transform: scale(1.02);
          box-shadow: 0 8px 25px rgba(0, 217, 255, 0.25);
        }
        
        @media (max-width: 768px) {
          .grid-responsive {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          .product-grid-layout {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          .title-responsive {
            font-size: 2.5rem !important;
          }
          
          .subtitle-responsive {
            font-size: 1.3rem !important;
          }
        }
        
        @media (max-width: 1024px) {
          .product-grid-layout {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>

      {/* Navigation & Accessibility */}
      <FloatingNavigation />
      <AccessibilityControls />

      {/* Skip to content link for screen readers */}
      <a 
        href="#hero" 
        style={{
          position: 'absolute',
          top: '-40px',
          left: '6px',
          background: '#00D9FF',
          color: '#1a0033',
          padding: '8px 16px',
          textDecoration: 'none',
          borderRadius: '0 0 8px 8px',
          fontWeight: 'bold',
          zIndex: 1000,
          transition: 'top 0.3s'
        }}
        onFocus={(e) => e.currentTarget.style.top = '0'}
        onBlur={(e) => e.currentTarget.style.top = '-40px'}
      >
        Skip to main content
      </a>

      {/* Hero Section */}
      <section id="hero" style={heroStyles}>
        {/* Background Patterns */}
        <div style={backgroundPatternStyles}>
          {/* Sacred Geometry SVG */}
          <svg 
            style={{ 
              position: 'absolute', 
              top: '10%', 
              right: '10%', 
              width: '300px', 
              height: '300px',
              opacity: '0.2'
            }} 
            className="rotating-geometry"
            viewBox="0 0 200 200"
          >
            <path
              d="M100 20 L160 160 L40 160 Z"
              stroke="#00D9FF"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M100 180 L40 40 L160 40 Z"
              stroke="#FF6B35"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="100"
              cy="100"
              r="60"
              stroke="#00D9FF"
              strokeWidth="1"
              fill="none"
            />
          </svg>

          <svg 
            style={{ 
              position: 'absolute', 
              bottom: '10%', 
              left: '10%', 
              width: '250px', 
              height: '250px',
              opacity: '0.15'
            }} 
            className="rotating-geometry"
            viewBox="0 0 150 150"
          >
            <path
              d="M75 75 Q60 60 45 75 Q30 90 45 105 Q60 120 75 105 Q90 90 105 105 Q120 120 135 105 Q150 90 135 75 Q120 60 105 75"
              stroke="#FF6B35"
              strokeWidth="3"
              fill="none"
            />
          </svg>
        </div>

        {/* Floating Equations */}
        <div style={{...equationStyles, top: '20%', left: '15%', color: '#00D9FF'}} className="floating-equation">
          P(H|E) = P(E|H)P(H)/P(E)
        </div>
        <div style={{...equationStyles, top: '60%', right: '20%', color: '#FF6B35', animationDelay: '2s'}} className="floating-equation">
          ∇f(x) = ∂f/∂x₁ + ∂f/∂x₂ + ... + ∂f/∂xₙ
        </div>
        <div style={{...equationStyles, bottom: '25%', left: '25%', color: '#00D9FF', animationDelay: '4s'}} className="floating-equation">
          ॠ = consciousness
        </div>

        <div style={containerStyles} className="grid-responsive">
          {/* Text Content */}
          <motion.div 
            style={textContentStyles}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 style={titleStyles} className="title-responsive">
              TrinetraAI
            </h1>
            <h2 style={subtitleStyles} className="subtitle-responsive">
              {content.hero.tagline}
            </h2>
            <p style={descriptionStyles}>
              {content.hero.description}
            </p>
            <motion.button
              style={buttonStyles}
              className="hover-scale"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Solutions
            </motion.button>
          </motion.div>

          {/* Visual Section */}
          <motion.div 
            style={visualSectionStyles}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <div style={mandalaStyles}>
              {/* Central Mandala */}
              <div 
                style={{
                  width: '300px',
                  height: '300px',
                  background: 'radial-gradient(circle, rgba(0, 217, 255, 0.3), rgba(255, 107, 53, 0.2), transparent)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}
                className="pulsing-glow"
              >
                <div 
                  style={{
                    fontSize: '4rem',
                    color: '#00D9FF',
                    fontWeight: '300'
                  }}
                  className="rotating-geometry"
                >
                  ॠ
                </div>
                
                {/* Orbiting particles */}
                <div 
                  style={{
                    position: 'absolute',
                    width: '8px',
                    height: '8px',
                    background: '#00D9FF',
                    borderRadius: '50%',
                    top: '20px',
                    left: '50%',
                    transformOrigin: '0 130px',
                    animation: 'rotate 10s linear infinite'
                  }}
                />
                <div 
                  style={{
                    position: 'absolute',
                    width: '6px',
                    height: '6px',
                    background: '#FF6B35',
                    borderRadius: '50%',
                    top: '40px',
                    right: '30px',
                    transformOrigin: '0 110px',
                    animation: 'rotate 15s linear infinite reverse'
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            textAlign: 'center',
            color: '#00D9FF'
          }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>ॠ</div>
          <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>Scroll to explore</div>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" style={philosophyStyles}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 style={sectionTitleStyles}>
            Where Process Meets <span style={{ color: '#00D9FF' }}>AI</span>
          </h2>
        </motion.div>
        {/* Founders */}
        <motion.div
          style={{ marginTop: '6rem', textAlign: 'center' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 style={{ fontSize: '2.5rem', color: '#FFFFFF', marginBottom: '3rem', fontWeight: '600' }}>
            Our <span style={{ color: '#FF6B35' }}>AI</span> Veterans
          </h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            {content.expertise.founders.map((founder, index) => (
              <motion.div
                key={index}
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.1), rgba(255, 107, 53, 0.1))',
                  border: '1px solid rgba(0, 217, 255, 0.3)',
                  borderRadius: '16px',
                  padding: '2rem',
                  backdropFilter: 'blur(10px)'
                }}
                className="hover-scale"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div 
                  style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(45deg, #00D9FF, #FF6B35)',
                    borderRadius: '50%',
                    margin: '0 auto 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    color: '#1a0033',
                    fontWeight: 'bold'
                  }}
                >
                  {founder.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h4 style={{ color: '#FAFAF8', fontSize: '1.4rem', marginBottom: '0.5rem' }}>
                  {founder.name}
                </h4>
                <p style={{ color: '#FF6B35', fontSize: '1rem', marginBottom: '1.5rem' }}>
                  {founder.role}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                  {founder.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(0, 217, 255, 0.2)',
                        color: '#00D9FF',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(0, 217, 255, 0.3)'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Solutions Section */}
      <SolutionsSection />

      {/* Product Showcase */}
      <section id="product" style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(180deg, #1a0033 0%, #0f0027 50%, #1a0033 100%)',
        minHeight: '100vh'
      }}>
        <motion.div
          style={{ textAlign: 'center', marginBottom: '4rem' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontSize: '3.5rem', fontWeight: '700', color: '#FAFAF8', marginBottom: '2rem' }}>
            <span style={{ color: '#FF6B35' }}>{content.product.hospitality.title}</span>
          </h2>
          <p style={{ fontSize: '1.3rem', color: 'rgba(250, 250, 248, 0.9)', maxWidth: '800px', margin: '0 auto' }}>
            {content.product.hospitality.description}
          </p>
        </motion.div>

        {/* Left-Right Layout: Neural Network + Cards */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '4rem', 
            maxWidth: '1400px', 
            margin: '0 auto',
            alignItems: 'start'
          }}
          className="product-grid-layout"
        >
          {/* LEFT: Neural Network Model */}
          <motion.div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              height: '100%',
              minHeight: '600px'
            }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div style={{ 
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <BrainNeural3D 
                width={600} 
                height={550}
                className="brain-neural-3d"
              />
              
              {/* Neural Network Label */}
              <div style={{
                textAlign: 'center',
                marginTop: '2rem'
              }}>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Customer & Provider Cards Stacked */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Customer Experience Card */}
            <motion.div
              style={{
                background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.1), rgba(0, 217, 255, 0.03))',
                border: '1px solid rgba(0, 217, 255, 0.2)',
                borderRadius: '12px',
                padding: '1.5rem',
                backdropFilter: 'blur(10px)'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.75rem', 
                marginBottom: '1rem' 
              }}>
                <div style={{ fontSize: '2rem' }}>👥</div>
                <h3 style={{ color: '#00D9FF', fontSize: '1.4rem', fontWeight: '600', margin: 0 }}>
                  For Customers
                </h3>
              </div>
              
              <div style={{ marginBottom: '1rem' }}>
                {content.product.hospitality.customer.map((item, idx) => (
                  <div key={idx} style={{ 
                    color: '#FAFAF8', 
                    fontSize: '0.95rem', 
                    lineHeight: '1.5',
                    marginBottom: '0.5rem'
                  }}>
                    • {item.feature}: {item.description}
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ color: '#FF6B35', fontSize: '1.25rem', fontWeight: '700' }}>98%</div>
                  <div style={{ color: 'rgba(250, 250, 248, 0.7)', fontSize: '0.7rem' }}>Satisfaction</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ color: '#FF6B35', fontSize: '1.25rem', fontWeight: '700' }}>45s</div>
                  <div style={{ color: 'rgba(250, 250, 248, 0.7)', fontSize: '0.7rem' }}>Response</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ color: '#FF6B35', fontSize: '1.25rem', fontWeight: '700' }}>24/7</div>
                  <div style={{ color: 'rgba(250, 250, 248, 0.7)', fontSize: '0.7rem' }}>Available</div>
                </div>
              </div>
            </motion.div>

            {/* Provider Dashboard Card */}
            <motion.div
              style={{
                background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(255, 107, 53, 0.03))',
                border: '1px solid rgba(255, 107, 53, 0.2)',
                borderRadius: '12px',
                padding: '1.5rem',
                backdropFilter: 'blur(10px)'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.75rem', 
                marginBottom: '1rem' 
              }}>
                <div style={{ fontSize: '2rem' }}>🏨</div>
                <h3 style={{ color: '#FF6B35', fontSize: '1.4rem', fontWeight: '600', margin: 0 }}>
                  For Providers
                </h3>
              </div>
              
              <div style={{ marginBottom: '1rem' }}>
                {content.product.hospitality.provider.map((item, idx) => (
                  <div key={idx} style={{ 
                    color: '#FAFAF8', 
                    fontSize: '0.95rem', 
                    lineHeight: '1.5',
                    marginBottom: '0.5rem'
                  }}>
                    • {item.feature}: {item.description}
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ color: '#00D9FF', fontSize: '1.25rem', fontWeight: '700' }}>75%</div>
                  <div style={{ color: 'rgba(250, 250, 248, 0.7)', fontSize: '0.7rem' }}>Efficiency</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ color: '#00D9FF', fontSize: '1.25rem', fontWeight: '700' }}>89%</div>
                  <div style={{ color: 'rgba(250, 250, 248, 0.7)', fontSize: '0.7rem' }}>Cost Cut</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ color: '#00D9FF', fontSize: '1.25rem', fontWeight: '700' }}>24/7</div>
                  <div style={{ color: 'rgba(250, 250, 248, 0.7)', fontSize: '0.7rem' }}>Monitor</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(135deg, #2d1b69 0%, #1a0033 25%, #0f0027 50%, #1a0033 75%, #2d1b69 100%)',
        minHeight: '100vh'
      }}>
        <motion.div
          style={{ textAlign: 'center', marginBottom: '4rem' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontSize: '3.5rem', fontWeight: '700', color: '#FAFAF8', marginBottom: '2rem' }}>
            {content.contact.title}
          </h2>
          <p style={{ fontSize: '1.3rem', color: 'rgba(250, 250, 248, 0.9)', maxWidth: '600px', margin: '0 auto' }}>
            {content.contact.subtitle}
          </p>
        </motion.div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem' }}>
          {/* Contact Form */}
          <motion.div
            style={{
              background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.1), rgba(255, 107, 53, 0.1))',
              border: '1px solid rgba(0, 217, 255, 0.3)',
              borderRadius: '24px',
              padding: '3rem',
              backdropFilter: 'blur(15px)'
            }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 style={{ color: '#00D9FF', fontSize: '2rem', fontWeight: '600', marginBottom: '2rem', textAlign: 'center' }}>
              Send us a Message
            </h3>
            
            {/* Success/Error Message */}
            {submitResult && (
              <motion.div
                style={{
                  padding: '1rem',
                  borderRadius: '8px',
                  marginBottom: '1rem',
                  background: submitResult.success 
                    ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(34, 197, 94, 0.1))'
                    : 'linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(239, 68, 68, 0.1))',
                  border: `1px solid ${submitResult.success ? 'rgba(34, 197, 94, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`
                }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p style={{
                  color: submitResult.success ? '#22c55e' : '#ef4444',
                  margin: 0,
                  fontSize: '0.95rem'
                }}>
                  {submitResult.message}
                </p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Name Field */}
              <div>
                <label style={{ color: '#FAFAF8', fontSize: '1rem', marginBottom: '0.5rem', display: 'block' }}>
                  Name *
                </label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'rgba(26, 0, 51, 0.5)',
                    border: `1px solid ${errors.name ? 'rgba(239, 68, 68, 0.5)' : 'rgba(0, 217, 255, 0.2)'}`,
                    borderRadius: '12px',
                    color: '#FAFAF8',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  placeholder="Your name"
                  onFocus={(e) => e.target.style.borderColor = 'rgba(255, 107, 53, 0.5)'}
                  onBlur={(e) => e.target.style.borderColor = errors.name ? 'rgba(239, 68, 68, 0.5)' : 'rgba(0, 217, 255, 0.2)'}
                />
                {errors.name && (
                  <p style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '0.5rem', marginBottom: 0 }}>
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label style={{ color: '#FAFAF8', fontSize: '1rem', marginBottom: '0.5rem', display: 'block' }}>
                  Email *
                </label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'rgba(26, 0, 51, 0.5)',
                    border: `1px solid ${errors.email ? 'rgba(239, 68, 68, 0.5)' : 'rgba(0, 217, 255, 0.2)'}`,
                    borderRadius: '12px',
                    color: '#FAFAF8',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  placeholder="your.email@company.com"
                  onFocus={(e) => e.target.style.borderColor = 'rgba(255, 107, 53, 0.5)'}
                  onBlur={(e) => e.target.style.borderColor = errors.email ? 'rgba(239, 68, 68, 0.5)' : 'rgba(0, 217, 255, 0.2)'}
                />
                {errors.email && (
                  <p style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '0.5rem', marginBottom: 0 }}>
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Company Field */}
              <div>
                <label style={{ color: '#FAFAF8', fontSize: '1rem', marginBottom: '0.5rem', display: 'block' }}>
                  Company
                </label>
                <input
                  type="text"
                  value={formState.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'rgba(26, 0, 51, 0.5)',
                    border: '1px solid rgba(0, 217, 255, 0.2)',
                    borderRadius: '12px',
                    color: '#FAFAF8',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  placeholder="Your company (optional)"
                  onFocus={(e) => e.target.style.borderColor = 'rgba(255, 107, 53, 0.5)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(0, 217, 255, 0.2)'}
                />
              </div>

              {/* Subject Field */}
              <div>
                <label style={{ color: '#FAFAF8', fontSize: '1rem', marginBottom: '0.5rem', display: 'block' }}>
                  Subject
                </label>
                <input
                  type="text"
                  value={formState.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'rgba(26, 0, 51, 0.5)',
                    border: '1px solid rgba(0, 217, 255, 0.2)',
                    borderRadius: '12px',
                    color: '#FAFAF8',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  placeholder="What is this regarding? (optional)"
                  onFocus={(e) => e.target.style.borderColor = 'rgba(255, 107, 53, 0.5)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(0, 217, 255, 0.2)'}
                />
              </div>
              
              {/* Message Field */}
              <div>
                <label style={{ color: '#FAFAF8', fontSize: '1rem', marginBottom: '0.5rem', display: 'block' }}>
                  Message *
                </label>
                <textarea
                  rows={4}
                  value={formState.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'rgba(26, 0, 51, 0.5)',
                    border: `1px solid ${errors.message ? 'rgba(239, 68, 68, 0.5)' : 'rgba(0, 217, 255, 0.2)'}`,
                    borderRadius: '12px',
                    color: '#FAFAF8',
                    fontSize: '1rem',
                    outline: 'none',
                    resize: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  placeholder="Tell us about your AI transformation needs..."
                  onFocus={(e) => e.target.style.borderColor = 'rgba(255, 107, 53, 0.5)'}
                  onBlur={(e) => e.target.style.borderColor = errors.message ? 'rgba(239, 68, 68, 0.5)' : 'rgba(0, 217, 255, 0.2)'}
                />
                {errors.message && (
                  <p style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '0.5rem', marginBottom: 0 }}>
                    {errors.message}
                  </p>
                )}
              </div>
              
              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  padding: '1rem 2rem',
                  background: isSubmitting 
                    ? 'rgba(0, 217, 255, 0.3)' 
                    : 'linear-gradient(45deg, #FF6B35, #00D9FF)',
                  border: 'none',
                  borderRadius: '12px',
                  color: isSubmitting ? 'rgba(26, 0, 51, 0.7)' : '#1a0033',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? '📤 Sending...' : '📨 Send Message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { icon: '📧', title: 'Email', value: content.contact.email },
              { icon: '📞', title: 'Phone', value: content.contact.phone },
              { icon: '📍', title: 'Location', value: content.contact.location },
              { icon: '📅', title: 'Schedule', value: content.contact.calendlyLink }
            ].map((contact, index) => (
              <motion.div
                key={index}
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(0, 217, 255, 0.1))',
                  border: '1px solid rgba(255, 107, 53, 0.3)',
                  borderRadius: '16px',
                  padding: '2rem',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  transition: 'all 0.3s ease'
                }}
                className="hover-scale"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div style={{ fontSize: '2rem' }}>{contact.icon}</div>
                <div>
                  <h4 style={{ color: '#FF6B35', fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                    {contact.title}
                  </h4>
                  <p style={{ color: 'rgba(250, 250, 248, 0.9)', fontSize: '1rem' }}>
                    {contact.value}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Call to Action */}
            <motion.div
              style={{
                background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.2), rgba(255, 107, 53, 0.2))',
                border: '2px solid rgba(0, 217, 255, 0.4)',
                borderRadius: '20px',
                padding: '2.5rem',
                textAlign: 'center',
                backdropFilter: 'blur(15px)'
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀</div>
              <h3 style={{ color: '#00D9FF', fontSize: '1.8rem', fontWeight: '600', marginBottom: '1rem' }}>
                Ready to Transform?
              </h3>
              <p style={{ color: 'rgba(250, 250, 248, 0.9)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                Join the AI revolution with Trinetra's cutting-edge solutions.
              </p>
              <SchedulingWidget 
                calendlyUrl={content.contact.calendlyLink}
                acuityUrl={content.contact.acuityLink}
                calComUrl={content.contact.calComLink}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: 'linear-gradient(180deg, #0f0027 0%, #1a0033 50%, #0f0027 100%)',
        padding: '4rem 2rem 2rem',
        borderTop: '1px solid rgba(0, 217, 255, 0.2)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Footer Content */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem'
          }}>
            {/* Company Info */}
            <div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem', 
                marginBottom: '1.5rem' 
              }}>
                <div style={{ fontSize: '2rem', color: '#00D9FF' }}>ॠ</div>
                <h3 style={{ 
                  color: '#FAFAF8', 
                  fontSize: '1.5rem', 
                  fontWeight: '600', 
                  margin: 0 
                }}>
                  Trinetra AI Solutions
                </h3>
              </div>
              <p style={{
                color: 'rgba(250, 250, 248, 0.8)',
                fontSize: '1rem',
                lineHeight: '1.6',
                marginBottom: '1.5rem'
              }}>
                Bridging ancient wisdom with quantum computing to transform businesses through AI-powered solutions.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {['🔗', '📧', '📱'].map((icon, index) => (
                  <div key={index} style={{
                    width: '40px',
                    height: '40px',
                    background: 'linear-gradient(45deg, #FF6B35, #00D9FF)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}>
                    {icon}
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h4 style={{
                color: '#FF6B35',
                fontSize: '1.2rem',
                fontWeight: '600',
                marginBottom: '1.5rem'
              }}>
                Solutions
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {solutions.solutions.map((solution, index) => (
                  <li key={index} style={{
                    color: 'rgba(250, 250, 248, 0.8)',
                    fontSize: '0.95rem',
                    marginBottom: '0.75rem',
                    cursor: 'pointer',
                    transition: 'color 0.3s ease'
                  }}>
                    • {solution.name}
                  </li>
                ))}
                {content.solutions.services.map((service, index) => (
                  <li key={`service-${index}`} style={{
                    color: 'rgba(250, 250, 248, 0.8)',
                    fontSize: '0.95rem',
                    marginBottom: '0.75rem',
                    cursor: 'pointer',
                    transition: 'color 0.3s ease'
                  }}>
                    • {service.title}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 style={{
                color: '#FF6B35',
                fontSize: '1.2rem',
                fontWeight: '600',
                marginBottom: '1.5rem'
              }}>
                Contact
              </h4>
              <div style={{
                color: 'rgba(250, 250, 248, 0.8)',
                fontSize: '0.95rem',
                lineHeight: '1.8'
              }}>
                <div style={{ marginBottom: '0.75rem' }}>
                  📧 {content.contact.email}
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  🌐 www.trinetra-ai.com
                </div>
                <div>
                  📍 {content.contact.location}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div style={{
            borderTop: '1px solid rgba(0, 217, 255, 0.1)',
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div style={{
              color: 'rgba(250, 250, 248, 0.7)',
              fontSize: '0.9rem'
            }}>
              © 2024 Trinetra AI Solutions. Where Process Meets AI.
            </div>
            <div style={{
              display: 'flex',
              gap: '2rem',
              fontSize: '0.9rem'
            }}>
              <span style={{ color: 'rgba(250, 250, 248, 0.7)', cursor: 'pointer' }}>Privacy</span>
              <span style={{ color: 'rgba(250, 250, 248, 0.7)', cursor: 'pointer' }}>Terms</span>
              <span style={{ color: 'rgba(250, 250, 248, 0.7)', cursor: 'pointer' }}>Cookies</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Sanskrit and Mathematical Symbols */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}>
        {/* Sanskrit Symbols */}
        <motion.div
          style={{
            position: 'absolute',
            top: '15%',
            left: '5%',
            fontSize: '1.5rem',
            color: 'rgba(0, 217, 255, 0.3)',
            fontWeight: '300'
          }}
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
        >
          ॐ
        </motion.div>

        <motion.div
          style={{
            position: 'absolute',
            top: '25%',
            right: '8%',
            fontSize: '1.2rem',
            color: 'rgba(255, 107, 53, 0.4)',
            fontWeight: '300'
          }}
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 2
          }}
        >
          श्री
        </motion.div>

        <motion.div
          style={{
            position: 'absolute',
            top: '45%',
            left: '3%',
            fontSize: '1.3rem',
            color: 'rgba(0, 217, 255, 0.3)',
            fontWeight: '300'
          }}
          animate={{ 
            y: [0, -18, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 4
          }}
        >
          गुरु
        </motion.div>

        <motion.div
          style={{
            position: 'absolute',
            top: '65%',
            right: '4%',
            fontSize: '1.4rem',
            color: 'rgba(255, 107, 53, 0.3)',
            fontWeight: '300'
          }}
          animate={{ 
            y: [0, -22, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 9, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 1
          }}
        >
          यंत्र
        </motion.div>

        {/* Mathematical Symbols */}
        <motion.div
          style={{
            position: 'absolute',
            top: '20%',
            left: '15%',
            fontSize: '1.2rem',
            color: 'rgba(0, 217, 255, 0.4)',
            fontFamily: 'monospace'
          }}
          animate={{ 
            y: [0, -16, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 3
          }}
        >
          ∞
        </motion.div>

        <motion.div
          style={{
            position: 'absolute',
            top: '35%',
            right: '12%',
            fontSize: '1.1rem',
            color: 'rgba(255, 107, 53, 0.4)',
            fontFamily: 'monospace'
          }}
          animate={{ 
            y: [0, -14, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 6.5, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 1.5
          }}
        >
          ∑
        </motion.div>

        <motion.div
          style={{
            position: 'absolute',
            top: '55%',
            left: '8%',
            fontSize: '1.3rem',
            color: 'rgba(0, 217, 255, 0.3)',
            fontFamily: 'monospace'
          }}
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 7.5, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 2.5
          }}
        >
          π
        </motion.div>

        <motion.div
          style={{
            position: 'absolute',
            top: '75%',
            right: '15%',
            fontSize: '1.2rem',
            color: 'rgba(255, 107, 53, 0.4)',
            fontFamily: 'monospace'
          }}
          animate={{ 
            y: [0, -17, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 8.5, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 0.5
          }}
        >
          ∇
        </motion.div>

        <motion.div
          style={{
            position: 'absolute',
            top: '40%',
            left: '25%',
            fontSize: '1.1rem',
            color: 'rgba(0, 217, 255, 0.3)',
            fontFamily: 'monospace'
          }}
          animate={{ 
            y: [0, -13, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 4.5
          }}
        >
          Φ
        </motion.div>

        <motion.div
          style={{
            position: 'absolute',
            top: '60%',
            right: '25%',
            fontSize: '1.2rem',
            color: 'rgba(255, 107, 53, 0.3)',
            fontFamily: 'monospace'
          }}
          animate={{ 
            y: [0, -19, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 3.5
          }}
        >
          ∫
        </motion.div>
      </div>
    </div>
  )
}

export default ProfessionalLanding