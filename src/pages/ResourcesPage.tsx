import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import DetachedNavigation from '../components/Navigation/DetachedNavigation'
import FooterNavigation from '../components/Navigation/FooterNavigation'

interface Resource {
  id: string
  title: string
  description: string
  type: string
  downloadUrl?: string
  viewUrl?: string
  size?: string
  format?: string
  icon: string
  color: string
}

const ResourcesPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('all')

  const resources: Resource[] = [
    {
      id: '1',
      title: 'AI Implementation Guide for Hotels',
      description: 'Comprehensive guide on implementing AI solutions in hospitality management.',
      type: 'White Papers',
      downloadUrl: '#download',
      size: '2.4 MB',
      format: 'PDF',
      icon: '🏨',
      color: '#00D9FF'
    },
    {
      id: '2',
      title: 'Case Study: Boutique Hotel Chain Transformation',
      description: 'Detailed analysis of 40% efficiency improvement in hotel operations.',
      type: 'Case Studies',
      viewUrl: '#view',
      downloadUrl: '#download',
      size: '1.8 MB',
      format: 'PDF',
      icon: '📊',
      color: '#FF6B35'
    },
    {
      id: '3',
      title: 'API Documentation - Hospitality AI Agent',
      description: 'Complete technical documentation for integrating our AI agent.',
      type: 'Documentation',
      viewUrl: '#docs',
      icon: '📚',
      color: '#06FFA5'
    },
    {
      id: '4',
      title: 'Sacred Geometry in AI Systems',
      description: 'Research paper on applying ancient mathematical patterns to modern AI.',
      type: 'White Papers',
      downloadUrl: '#download',
      size: '3.2 MB',
      format: 'PDF',
      icon: '📐',
      color: '#9D4EDD'
    },
    {
      id: '5',
      title: 'ROI Calculator Template',
      description: 'Excel template to calculate potential ROI from AI implementation.',
      type: 'Tools',
      downloadUrl: '#download',
      size: '156 KB',
      format: 'XLSX',
      icon: '🧮',
      color: '#FFD60A'
    },
    {
      id: '6',
      title: 'Healthcare AI: Future Possibilities',
      description: 'Exploring AI applications in healthcare with ethical considerations.',
      type: 'Case Studies',
      viewUrl: '#view',
      downloadUrl: '#download',
      size: '2.1 MB',
      format: 'PDF',
      icon: '⚕️',
      color: '#FF006E'
    },
    {
      id: '7',
      title: 'Integration Checklist',
      description: 'Step-by-step checklist for successful AI system integration.',
      type: 'Tools',
      downloadUrl: '#download',
      size: '89 KB',
      format: 'PDF',
      icon: '✅',
      color: '#00D9FF'
    },
    {
      id: '8',
      title: 'Ethical AI Development Framework',
      description: 'Guidelines for developing AI systems with ethical considerations.',
      type: 'White Papers',
      downloadUrl: '#download',
      size: '1.9 MB',
      format: 'PDF',
      icon: '⚖️',
      color: '#FF6B35'
    },
    {
      id: '9',
      title: 'SDK - Python AI Agent Library',
      description: 'Python library for rapid AI agent development and deployment.',
      type: 'Tools',
      downloadUrl: '#download',
      viewUrl: '#github',
      size: '450 KB',
      format: 'ZIP',
      icon: '🐍',
      color: '#06FFA5'
    }
  ]

  const types = ['all', 'Case Studies', 'White Papers', 'Documentation', 'Tools']

  const filteredResources = selectedType === 'all' 
    ? resources 
    : resources.filter(resource => resource.type === selectedType)

  const getTypeStats = () => {
    const stats = types.slice(1).map(type => ({
      type,
      count: resources.filter(r => r.type === type).length,
      color: {
        'Case Studies': '#FF6B35',
        'White Papers': '#00D9FF', 
        'Documentation': '#06FFA5',
        'Tools': '#FFD60A'
      }[type]
    }))
    return stats
  }

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
          style={{ textAlign: 'center', marginBottom: '4rem' }}
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
            Resources & Downloads
          </h1>
          <p style={{ 
            fontSize: '1.3rem', 
            color: 'rgba(250, 250, 248, 0.8)', 
            maxWidth: '700px', 
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Comprehensive collection of guides, tools, and research to accelerate your AI transformation journey.
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            marginBottom: '4rem'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {getTypeStats().map((stat) => (
            <div
              key={stat.type}
              style={{
                background: `${stat.color}15`,
                border: `1px solid ${stat.color}40`,
                borderRadius: '15px',
                padding: '1.5rem',
                textAlign: 'center',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div style={{
                color: stat.color,
                fontSize: '2rem',
                fontWeight: '700',
                marginBottom: '0.5rem'
              }}>
                {stat.count}
              </div>
              <div style={{
                color: 'rgba(250, 250, 248, 0.8)',
                fontSize: '0.9rem',
                fontWeight: '500'
              }}>
                {stat.type}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Type Filter */}
        <motion.div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center',
            marginBottom: '4rem'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '25px',
                border: `1px solid ${selectedType === type ? '#00D9FF' : 'rgba(0, 217, 255, 0.3)'}`,
                background: selectedType === type 
                  ? 'rgba(0, 217, 255, 0.2)' 
                  : 'transparent',
                color: selectedType === type ? '#00D9FF' : 'rgba(250, 250, 248, 0.7)',
                fontSize: '0.9rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'capitalize'
              }}
            >
              {type === 'all' ? 'All Resources' : type}
            </button>
          ))}
        </motion.div>

        {/* Resources Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedType}
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
              gap: '2rem',
              marginBottom: '4rem'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.1), rgba(255, 107, 53, 0.1))',
                  border: '1px solid rgba(0, 217, 255, 0.3)',
                  borderRadius: '20px',
                  padding: '2rem',
                  backdropFilter: 'blur(15px)',
                  height: 'fit-content'
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: '0 10px 30px rgba(0, 217, 255, 0.2)',
                  borderColor: resource.color
                }}
              >
                {/* Resource Icon & Type */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{ fontSize: '2.5rem' }}>
                    {resource.icon}
                  </div>
                  <div style={{
                    padding: '0.25rem 0.75rem',
                    background: `${resource.color}20`,
                    color: resource.color,
                    borderRadius: '15px',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    border: `1px solid ${resource.color}40`
                  }}>
                    {resource.type}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 style={{
                  color: '#FAFAF8',
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  lineHeight: '1.4'
                }}>
                  {resource.title}
                </h3>

                <p style={{
                  color: 'rgba(250, 250, 248, 0.8)',
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  marginBottom: '2rem'
                }}>
                  {resource.description}
                </p>

                {/* File Info & Actions */}
                <div style={{
                  borderTop: '1px solid rgba(0, 217, 255, 0.2)',
                  paddingTop: '1.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  {/* File Info */}
                  {resource.size && (
                    <div style={{
                      fontSize: '0.85rem',
                      color: 'rgba(250, 250, 248, 0.7)'
                    }}>
                      <div style={{ fontWeight: '500', marginBottom: '0.25rem' }}>
                        {resource.format}
                      </div>
                      <div>
                        {resource.size}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    {resource.viewUrl && (
                      <button style={{
                        padding: '0.5rem 1rem',
                        background: 'transparent',
                        border: `1px solid ${resource.color}`,
                        borderRadius: '8px',
                        color: resource.color,
                        fontSize: '0.85rem',
                        fontWeight: '500',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}>
                        View
                      </button>
                    )}
                    {resource.downloadUrl && (
                      <button style={{
                        padding: '0.5rem 1rem',
                        background: resource.color,
                        border: 'none',
                        borderRadius: '8px',
                        color: '#1a0033',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}>
                        Download
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Newsletter Signup */}
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
          <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>📬</div>
          <h3 style={{ 
            color: '#FF6B35', 
            fontSize: '2rem', 
            marginBottom: '1rem',
            fontWeight: '600'
          }}>
            Get Notified of New Resources
          </h3>
          <p style={{ 
            fontSize: '1.1rem', 
            color: 'rgba(250, 250, 248, 0.8)',
            marginBottom: '2rem',
            maxWidth: '500px',
            margin: '0 auto 2rem'
          }}>
            Be the first to access our latest guides, tools, and research papers.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            maxWidth: '400px',
            margin: '0 auto',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                flex: '1',
                minWidth: '250px',
                padding: '1rem',
                borderRadius: '10px',
                border: '1px solid rgba(0, 217, 255, 0.3)',
                background: 'rgba(26, 0, 51, 0.5)',
                color: '#FAFAF8',
                fontSize: '1rem'
              }}
            />
            <button style={{
              padding: '1rem 2rem',
              background: 'linear-gradient(45deg, #FF6B35, #00D9FF)',
              border: 'none',
              borderRadius: '10px',
              color: '#1a0033',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Footer Navigation */}
      <FooterNavigation />
    </div>
  )
}

export default ResourcesPage