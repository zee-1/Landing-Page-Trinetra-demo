import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import DetachedNavigation from '../components/Navigation/DetachedNavigation'
import FooterNavigation from '../components/Navigation/FooterNavigation'
import { resources } from '../data'

interface Resource {
  id: string
  title: string
  description: string
  type: string
  viewUrl?: string
  downloadUrl?: string
  size?: string
  format?: string
  icon: string
  color: string
}

const ResourcesPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('all')

  // Transform imported resources to match component expectations
  const resourcesData: Resource[] = resources.resources.map(resource => ({
    ...resource,
    icon: resource.icon || '📄',
    color: resource.color || '#00D9FF'
  }))

  const types = ['all', 'Case Study', 'White Paper', 'Documentation', 'Template', 'Guide']

  const filteredResources = selectedType === 'all' 
    ? resourcesData 
    : resourcesData.filter(resource => resource.type === selectedType)

  const getTypeStats = () => {
    const stats = types.slice(1).map(type => ({
      type,
      count: resourcesData.filter(r => r.type === type).length,
      color: {
        'Case Study': '#FF6B35',
        'White Paper': '#00D9FF', 
        'Documentation': '#06FFA5',
        'Template': '#F72585',
        'Guide': '#4361EE'
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
            fontSize: '3.5rem', 
            fontWeight: '700', 
            color: '#FAFAF8', 
            marginBottom: '2rem' 
          }}>
            <span style={{ color: '#FF6B35' }}>Resources</span> & Knowledge Hub
          </h1>
          <p style={{ 
            fontSize: '1.3rem', 
            color: 'rgba(250, 250, 248, 0.9)', 
            maxWidth: '700px', 
            margin: '0 auto',
            lineHeight: '1.6' 
          }}>
            {resources.subtitle}
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3rem',
            flexWrap: 'wrap'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              style={{
                background: selectedType === type 
                  ? 'linear-gradient(45deg, #FF6B35, #00D9FF)' 
                  : 'rgba(0, 217, 255, 0.1)',
                color: selectedType === type ? '#1a0033' : '#00D9FF',
                border: selectedType === type ? 'none' : '1px solid rgba(0, 217, 255, 0.3)',
                padding: '0.75rem 1.5rem',
                borderRadius: '25px',
                fontSize: '0.9rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'capitalize'
              }}
              onMouseEnter={(e) => {
                if (selectedType !== type) {
                  e.currentTarget.style.background = 'rgba(0, 217, 255, 0.2)'
                  e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.5)'
                }
              }}
              onMouseLeave={(e) => {
                if (selectedType !== type) {
                  e.currentTarget.style.background = 'rgba(0, 217, 255, 0.1)'
                  e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.3)'
                }
              }}
            >
              {type === 'all' ? 'All Resources' : type}
            </button>
          ))}
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
                borderRadius: '12px',
                padding: '1.5rem',
                textAlign: 'center',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: stat.color,
                marginBottom: '0.5rem'
              }}>
                {stat.count}
              </div>
              <div style={{
                fontSize: '0.9rem',
                color: 'rgba(250, 250, 248, 0.8)',
                fontWeight: '500'
              }}>
                {stat.type}
              </div>
            </div>
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
                  background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.05), rgba(255, 107, 53, 0.05))',
                  border: '1px solid rgba(0, 217, 255, 0.2)',
                  borderRadius: '16px',
                  padding: '2rem',
                  backdropFilter: 'blur(15px)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: '0 10px 30px rgba(0, 217, 255, 0.2)',
                  borderColor: resource.color
                }}
              >
                {/* Icon and Type */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ fontSize: '2.5rem' }}>
                    {resource.icon}
                  </div>
                  <div style={{
                    background: `${resource.color}20`,
                    color: resource.color,
                    padding: '0.4rem 0.8rem',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    border: `1px solid ${resource.color}40`
                  }}>
                    {resource.type}
                  </div>
                </div>

                {/* Content */}
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
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem'
                }}>
                  {resource.description}
                </p>

                {/* Metadata */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  {resource.size && (
                    <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem', color: 'rgba(250, 250, 248, 0.6)' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        📄 {resource.format}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        📦 {resource.size}
                      </span>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {resource.viewUrl && (
                    <button style={{
                      background: 'transparent',
                      border: `1px solid ${resource.color}`,
                      padding: '0.6rem 1.2rem',
                      borderRadius: '8px',
                      color: resource.color,
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      flex: 1
                    }}>
                      👁️ View
                    </button>
                  )}
                  {resource.downloadUrl && (
                    <button style={{
                      background: resource.color,
                      border: 'none',
                      padding: '0.6rem 1.2rem',
                      borderRadius: '8px',
                      color: '#FAFAF8',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      flex: 1
                    }}>
                      ⬇️ Download
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Newsletter Section */}
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
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 style={{ 
            color: '#FF6B35', 
            fontSize: '2.5rem', 
            marginBottom: '1rem',
            fontWeight: '600'
          }}>
            {resources.newsletter.title}
          </h2>
          <p style={{ 
            fontSize: '1.1rem', 
            color: 'rgba(250, 250, 248, 0.9)',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            {resources.newsletter.description}
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <input
              type="email"
              placeholder="Enter your email address"
              style={{
                background: 'rgba(26, 0, 51, 0.8)',
                border: '1px solid rgba(0, 217, 255, 0.3)',
                borderRadius: '8px',
                padding: '0.8rem 1.2rem',
                color: '#FAFAF8',
                fontSize: '0.95rem',
                width: '300px',
                outline: 'none'
              }}
            />
            <button style={{
              background: 'linear-gradient(45deg, #FF6B35, #00D9FF)',
              border: 'none',
              padding: '0.8rem 2rem',
              borderRadius: '8px',
              color: '#1a0033',
              fontSize: '0.95rem',
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