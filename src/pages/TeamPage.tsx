import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import DetachedNavigation from '../components/Navigation/DetachedNavigation'
import FooterNavigation from '../components/Navigation/FooterNavigation'

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: "Vinayak Rana",
      role: "Co-Founder & AI Architect", 
      expertise: ["Machine Learning", "Neural Networks", "AI Strategy"],
      image: "🧠",
      description: "Leading AI research and development with 15+ years of experience in machine learning and neural network architectures."
    },
    {
      name: "Mohammad Zaid Khan",
      role: "Co-Founder & Technology Lead",
      expertise: ["Data Science", "Generative AI", "AI Implementation", "MLOps"],
      image: "🚀",
      description: "Specializing in AI implementation and MLOps, bringing cutting-edge AI solutions to enterprise environments."
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
            Meet Our Team
          </h1>
          <p style={{ 
            fontSize: '1.3rem', 
            color: 'rgba(250, 250, 248, 0.8)', 
            maxWidth: '700px', 
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            The AI veterans and visionaries behind Trinetra's innovative approach to bridging ancient wisdom with modern technology.
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
          gap: '3rem',
          marginBottom: '6rem'
        }}>
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              style={{
                background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.1), rgba(255, 107, 53, 0.1))',
                border: '1px solid rgba(0, 217, 255, 0.3)',
                borderRadius: '20px',
                padding: '2.5rem',
                backdropFilter: 'blur(15px)',
                textAlign: 'center'
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(0, 217, 255, 0.2)' }}
            >
              {/* Avatar */}
              <div style={{
                width: '120px',
                height: '120px',
                background: 'linear-gradient(45deg, #00D9FF, #FF6B35)',
                borderRadius: '50%',
                margin: '0 auto 2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem'
              }}>
                {member.image}
              </div>

              {/* Info */}
              <h2 style={{ 
                color: '#00D9FF', 
                fontSize: '1.8rem', 
                marginBottom: '0.5rem',
                fontWeight: '600'
              }}>
                {member.name}
              </h2>
              
              <h3 style={{ 
                color: '#FF6B35', 
                fontSize: '1.2rem', 
                marginBottom: '1.5rem',
                fontWeight: '500'
              }}>
                {member.role}
              </h3>

              <p style={{
                color: 'rgba(250, 250, 248, 0.8)',
                fontSize: '1rem',
                lineHeight: '1.6',
                marginBottom: '2rem'
              }}>
                {member.description}
              </p>

              {/* Expertise Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                {member.expertise.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    style={{
                      padding: '0.5rem 1rem',
                      background: 'rgba(0, 217, 255, 0.2)',
                      color: '#00D9FF',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      border: '1px solid rgba(0, 217, 255, 0.3)',
                      fontWeight: '500'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Values */}
        <motion.div
          style={{
            background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(0, 217, 255, 0.1))',
            border: '1px solid rgba(255, 107, 53, 0.3)',
            borderRadius: '20px',
            padding: '3rem',
            textAlign: 'center',
            backdropFilter: 'blur(15px)'
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 style={{ 
            color: '#FF6B35', 
            fontSize: '2.5rem', 
            marginBottom: '2rem',
            fontWeight: '600'
          }}>
            Our Commitment
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            color: 'rgba(250, 250, 248, 0.9)',
            lineHeight: '1.7',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            We believe in the power of combining ancient wisdom with cutting-edge AI technology. 
            Our team is dedicated to creating ethical, transparent, and transformative AI solutions 
            that honor both technological innovation and timeless human values.
          </p>
        </motion.div>
      </div>
      
      {/* Footer Navigation */}
      <FooterNavigation />
    </div>
  )
}

export default TeamPage