import React from 'react'
import { motion } from 'framer-motion'
import FloatingNavigation from './FloatingNavigation'
import AccessibilityControls from './AccessibilityControls'
import SolutionsSection from './SolutionsSection'
import MandalaNeural3D from '../ThreeD/MandalaNeural'
import BrainNeural3D from '../ThreeD/BrainNeural'

const ProfessionalLanding: React.FC = () => {
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

  const timelineStyles: React.CSSProperties = {
    maxWidth: '800px',
    margin: '0 auto',
    position: 'relative'
  }

  const timelineItemStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '3rem',
    position: 'relative'
  }

  const timelineCardStyles: React.CSSProperties = {
    background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.1), rgba(255, 107, 53, 0.1))',
    border: '1px solid rgba(0, 217, 255, 0.3)',
    borderRadius: '16px',
    padding: '2rem',
    backdropFilter: 'blur(10px)',
    flex: '1',
    transition: 'all 0.3s ease'
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
          
          .title-responsive {
            font-size: 2.5rem !important;
          }
          
          .subtitle-responsive {
            font-size: 1.3rem !important;
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
              Trinetra
            </h1>
            <h2 style={subtitleStyles} className="subtitle-responsive">
              Your Partner in AI-Powered Transformation
            </h2>
            <p style={descriptionStyles}>
              At Trinetra, we specialize in empowering businesses to achieve unparalleled efficiency and innovation through advanced AI. From comprehensive process re-engineering to cutting-edge generative AI assistance, we tailor solutions that drive tangible results.
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
            Where Ancient Wisdom Meets <span style={{ color: '#00D9FF' }}>Quantum Computing</span>
          </h2>
        </motion.div>

        <div style={timelineStyles}>
          {[
            { period: "3000 BCE", title: "Vedic Mathematics", desc: "Ancient Indian mathematical principles", eq: "√2 = 1 + 1/(2 + 1/(2 + ...))" },
            { period: "500 BCE", title: "Zero & Infinity", desc: "Revolutionary mathematical concepts", eq: "∞ × 0 = indeterminate" },
            { period: "1950 CE", title: "Computing Dawn", desc: "First electronic computers emerge", eq: "2ⁿ = exponential growth" },
            { period: "2023 CE", title: "AI Renaissance", desc: "Modern AI transforms ancient wisdom", eq: "AI + ॠ = Trinetra" }
          ].map((item, index) => (
            <motion.div
              key={index}
              style={timelineItemStyles}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div 
                style={timelineCardStyles}
                className="hover-scale"
              >
                <div style={{ color: '#FF6B35', fontFamily: 'monospace', fontSize: '0.9rem', marginBottom: '1rem' }}>
                  {item.period}
                </div>
                <h3 style={{ color: '#00D9FF', fontSize: '1.8rem', fontWeight: '600', marginBottom: '1rem' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'rgba(250, 250, 248, 0.9)', fontSize: '1.1rem', marginBottom: '1rem' }}>
                  {item.desc}
                </p>
                <code style={{ color: 'rgba(0, 217, 255, 0.8)', fontSize: '0.9rem', fontFamily: 'monospace' }}>
                  {item.eq}
                </code>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Founders */}
        <motion.div
          style={{ marginTop: '6rem', textAlign: 'center' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 style={{ fontSize: '2.5rem', color: '#FF6B35', marginBottom: '3rem', fontWeight: '600' }}>
            Our AI Veterans
          </h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            {[
              { name: "AI Veteran One", role: "Co-Founder & AI Architect", skills: ["Machine Learning", "Neural Networks", "AI Strategy"] },
              { name: "AI Veteran Two", role: "Co-Founder & Technology Lead", skills: ["Deep Learning", "Computer Vision", "Implementation"] }
            ].map((founder, index) => (
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
                  {founder.skills.map((skill, skillIndex) => (
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
            <span style={{ color: '#FF6B35' }}>AI Agent</span> for Hospitality Management
          </h2>
          <p style={{ fontSize: '1.3rem', color: 'rgba(250, 250, 248, 0.9)', maxWidth: '800px', margin: '0 auto' }}>
            Our flagship AI Agent, meticulously designed to revolutionize the hospitality sector with dual-sided solutions.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem', maxWidth: '1200px', margin: '0 auto' }}>
          {/* Customer Experience */}
          <motion.div
            style={{
              background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.15), rgba(0, 217, 255, 0.05))',
              border: '1px solid rgba(0, 217, 255, 0.3)',
              borderRadius: '24px',
              padding: '3rem',
              backdropFilter: 'blur(10px)'
            }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>👥</div>
              <h3 style={{ color: '#00D9FF', fontSize: '2.2rem', fontWeight: '600' }}>
                For Customers
              </h3>
            </div>
            
            {[
              { title: "End-to-End Support", desc: "From onboarding to checkout, continuous AI assistance enhancing guest experience" },
              { title: "Personalized Interactions", desc: "Intelligent responses and proactive support ensuring every guest feels valued" }
            ].map((feature, index) => (
              <div key={index} style={{ marginBottom: '2rem', padding: '1.5rem', background: 'rgba(0, 217, 255, 0.1)', borderRadius: '12px' }}>
                <h4 style={{ color: '#FAFAF8', fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem' }}>
                  {feature.title}
                </h4>
                <p style={{ color: 'rgba(250, 250, 248, 0.9)', fontSize: '1.1rem', lineHeight: '1.5' }}>
                  {feature.desc}
                </p>
              </div>
            ))}

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-around', gap: '1rem' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ color: '#FF6B35', fontSize: '2rem', fontWeight: '700' }}>98%</div>
                  <div style={{ color: 'rgba(250, 250, 248, 0.8)', fontSize: '0.9rem' }}>Satisfaction</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ color: '#FF6B35', fontSize: '2rem', fontWeight: '700' }}>45s</div>
                  <div style={{ color: 'rgba(250, 250, 248, 0.8)', fontSize: '0.9rem' }}>Response Time</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ color: '#FF6B35', fontSize: '2rem', fontWeight: '700' }}>24/7</div>
                  <div style={{ color: 'rgba(250, 250, 248, 0.8)', fontSize: '0.9rem' }}>Available</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Provider Dashboard */}
          <motion.div
            style={{
              background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.15), rgba(255, 107, 53, 0.05))',
              border: '1px solid rgba(255, 107, 53, 0.3)',
              borderRadius: '24px',
              padding: '3rem',
              backdropFilter: 'blur(10px)'
            }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🏨</div>
              <h3 style={{ color: '#FF6B35', fontSize: '2.2rem', fontWeight: '600' }}>
                For Providers
              </h3>
            </div>
            
            {[
              { title: "Streamlined Administration", desc: "Automate routine tasks and optimize workflows, freeing teams for core activities" },
              { title: "Real-time Analytics", desc: "Deep operational insights with live data analysis for informed decision-making" },
              { title: "Smart Alerts", desc: "Immediate notifications for critical events ensuring prompt responses" }
            ].map((feature, index) => (
              <div key={index} style={{ marginBottom: '2rem', padding: '1.5rem', background: 'rgba(255, 107, 53, 0.1)', borderRadius: '12px' }}>
                <h4 style={{ color: '#FAFAF8', fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem' }}>
                  {feature.title}
                </h4>
                <p style={{ color: 'rgba(250, 250, 248, 0.9)', fontSize: '1.1rem', lineHeight: '1.5' }}>
                  {feature.desc}
                </p>
              </div>
            ))}

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-around', gap: '1rem' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ color: '#00D9FF', fontSize: '2rem', fontWeight: '700' }}>67%</div>
                  <div style={{ color: 'rgba(250, 250, 248, 0.8)', fontSize: '0.9rem' }}>Efficiency</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ color: '#00D9FF', fontSize: '2rem', fontWeight: '700' }}>89%</div>
                  <div style={{ color: 'rgba(250, 250, 248, 0.8)', fontSize: '0.9rem' }}>Cost Reduction</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ color: '#00D9FF', fontSize: '2rem', fontWeight: '700' }}>24/7</div>
                  <div style={{ color: 'rgba(250, 250, 248, 0.8)', fontSize: '0.9rem' }}>Monitoring</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* AI Brain Visualization */}
        <motion.div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '4rem',
            position: 'relative'
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div style={{ position: 'relative' }}>
            <BrainNeural3D 
              width={600} 
              height={500}
              className="brain-neural-3d"
            />
            
            {/* Professional Label */}
            <div style={{
              position: 'absolute',
              bottom: '-2rem',
              left: '50%',
              transform: 'translateX(-50%)',
              textAlign: 'center'
            }}>
              <div style={{
                color: '#00D9FF',
                fontSize: '1.1rem',
                fontWeight: '600',
                marginBottom: '0.5rem'
              }}>
                Neural Network Architecture
              </div>
              <div style={{
                color: 'rgba(250, 250, 248, 0.7)',
                fontSize: '0.9rem'
              }}>
                Powered by Advanced AI Algorithms
              </div>
            </div>
          </div>
        </motion.div>
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
            Get in Touch
          </h2>
          <p style={{ fontSize: '1.3rem', color: 'rgba(250, 250, 248, 0.9)', maxWidth: '600px', margin: '0 auto' }}>
            Ready to transform your business with AI? Contact us today to discuss how Trinetra can empower your success.
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
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {['Name', 'Email', 'Company'].map((field) => (
                <div key={field}>
                  <label style={{ color: '#FAFAF8', fontSize: '1rem', marginBottom: '0.5rem', display: 'block' }}>
                    {field} *
                  </label>
                  <input
                    type={field === 'Email' ? 'email' : 'text'}
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
                    placeholder={`Your ${field.toLowerCase()}`}
                    onFocus={(e) => e.target.style.borderColor = 'rgba(255, 107, 53, 0.5)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(0, 217, 255, 0.2)'}
                  />
                </div>
              ))}
              
              <div>
                <label style={{ color: '#FAFAF8', fontSize: '1rem', marginBottom: '0.5rem', display: 'block' }}>
                  Message *
                </label>
                <textarea
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'rgba(26, 0, 51, 0.5)',
                    border: '1px solid rgba(0, 217, 255, 0.2)',
                    borderRadius: '12px',
                    color: '#FAFAF8',
                    fontSize: '1rem',
                    outline: 'none',
                    resize: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  placeholder="Tell us about your AI transformation needs..."
                  onFocus={(e) => e.target.style.borderColor = 'rgba(255, 107, 53, 0.5)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(0, 217, 255, 0.2)'}
                />
              </div>
              
              <motion.button
                type="submit"
                style={{
                  width: '100%',
                  padding: '1rem 2rem',
                  background: 'linear-gradient(45deg, #FF6B35, #00D9FF)',
                  border: 'none',
                  borderRadius: '12px',
                  color: '#1a0033',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
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
              { icon: '📧', title: 'Email', value: 'Person@trinetra.com' },
              { icon: '📞', title: 'Phone', value: 'Person' },
              { icon: '📍', title: 'Location', value: 'Place' },
              { icon: '📅', title: 'Schedule', value: 'Calendar event' }
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
              <motion.button
                style={{
                  padding: '1rem 2rem',
                  background: 'linear-gradient(45deg, #00D9FF, #FF6B35)',
                  border: 'none',
                  borderRadius: '12px',
                  color: '#1a0033',
                  fontSize: '1rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Consultation
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ProfessionalLanding