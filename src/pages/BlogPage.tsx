import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import DetachedNavigation from '../components/Navigation/DetachedNavigation'
import FooterNavigation from '../components/Navigation/FooterNavigation'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  author: string
  image: string
}

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of AI in Hospitality: Beyond Automation',
      excerpt: 'Exploring how AI is transforming the hospitality industry through personalization, predictive analytics, and enhanced guest experiences.',
      category: 'AI Insights',
      date: '2024-01-15',
      readTime: '8 min read',
      author: 'Vinayak Rana',
      image: '🏨'
    },
    {
      id: '2',
      title: 'Ancient Wisdom Meets Modern AI: The Trinetra Approach',
      excerpt: 'How we bridge thousands of years of human wisdom with cutting-edge artificial intelligence to create more ethical and effective solutions.',
      category: 'Philosophy',
      date: '2024-01-10',
      readTime: '12 min read',
      author: 'Mohammad Zaid Khan',
      image: '🧠'
    },
    {
      id: '3',
      title: 'Building Ethical AI: Lessons from Vedic Principles',
      excerpt: 'Applying ancient ethical frameworks to modern AI development for more responsible and human-centered technology.',
      category: 'Ethics',
      date: '2024-01-08',
      readTime: '10 min read',
      author: 'Vinayak Rana',
      image: '⚖️'
    },
    {
      id: '4',
      title: 'Real-time Data Processing with Sacred Geometry',
      excerpt: 'How we use mathematical patterns inspired by sacred geometry to optimize data flow and processing in our AI systems.',
      category: 'Technical',
      date: '2024-01-05',
      readTime: '15 min read',
      author: 'Mohammad Zaid Khan',
      image: '📐'
    },
    {
      id: '5',
      title: 'Case Study: 40% Efficiency Boost in Hotel Operations',
      excerpt: 'Deep dive into how our AI agent transformed a boutique hotel chain, resulting in significant operational improvements.',
      category: 'Case Studies',
      date: '2024-01-03',
      readTime: '6 min read',
      author: 'Trinetra Team',
      image: '📊'
    },
    {
      id: '6',
      title: 'The Psychology of AI-Human Interaction',
      excerpt: 'Understanding how humans interact with AI systems and designing interfaces that feel natural and trustworthy.',
      category: 'Research',
      date: '2024-01-01',
      readTime: '9 min read',
      author: 'Vinayak Rana',
      image: '🤝'
    }
  ]

  const categories = ['all', 'AI Insights', 'Philosophy', 'Ethics', 'Technical', 'Case Studies', 'Research']

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  const getCategoryColor = (category: string) => {
    const colors = {
      'AI Insights': '#00D9FF',
      'Philosophy': '#FF6B35', 
      'Ethics': '#9D4EDD',
      'Technical': '#06FFA5',
      'Case Studies': '#FFD60A',
      'Research': '#FF006E'
    }
    return colors[category as keyof typeof colors] || '#00D9FF'
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
            Blog & Insights
          </h1>
          <p style={{ 
            fontSize: '1.3rem', 
            color: 'rgba(250, 250, 248, 0.8)', 
            maxWidth: '700px', 
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Thoughts, insights, and discoveries from our journey of bridging ancient wisdom with modern AI.
          </p>
        </motion.div>

        {/* Category Filter */}
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
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '25px',
                border: `1px solid ${selectedCategory === category ? '#00D9FF' : 'rgba(0, 217, 255, 0.3)'}`,
                background: selectedCategory === category 
                  ? 'rgba(0, 217, 255, 0.2)' 
                  : 'transparent',
                color: selectedCategory === category ? '#00D9FF' : 'rgba(250, 250, 248, 0.7)',
                fontSize: '0.9rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'capitalize'
              }}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
              gap: '2rem'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.1), rgba(255, 107, 53, 0.1))',
                  border: '1px solid rgba(0, 217, 255, 0.3)',
                  borderRadius: '20px',
                  padding: '2rem',
                  backdropFilter: 'blur(15px)',
                  cursor: 'pointer',
                  height: 'fit-content'
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: '0 10px 30px rgba(0, 217, 255, 0.2)',
                  borderColor: getCategoryColor(post.category)
                }}
              >
                {/* Post Image/Icon */}
                <div style={{
                  fontSize: '3rem',
                  textAlign: 'center',
                  marginBottom: '1.5rem'
                }}>
                  {post.image}
                </div>

                {/* Category Badge */}
                <div style={{
                  display: 'inline-block',
                  padding: '0.25rem 0.75rem',
                  background: `${getCategoryColor(post.category)}20`,
                  color: getCategoryColor(post.category),
                  borderRadius: '15px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  border: `1px solid ${getCategoryColor(post.category)}40`
                }}>
                  {post.category}
                </div>

                {/* Title */}
                <h2 style={{
                  color: '#FAFAF8',
                  fontSize: '1.4rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  lineHeight: '1.4'
                }}>
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p style={{
                  color: 'rgba(250, 250, 248, 0.8)',
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem'
                }}>
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(0, 217, 255, 0.2)',
                  fontSize: '0.9rem',
                  color: 'rgba(250, 250, 248, 0.7)'
                }}>
                  <div>
                    <div style={{ fontWeight: '500', marginBottom: '0.25rem' }}>
                      {post.author}
                    </div>
                    <div style={{ fontSize: '0.8rem' }}>
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                  </div>
                  <div style={{ 
                    color: getCategoryColor(post.category),
                    fontWeight: '500'
                  }}>
                    {post.readTime}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          style={{
            marginTop: '6rem',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(0, 217, 255, 0.1))',
            border: '1px solid rgba(255, 107, 53, 0.3)',
            borderRadius: '20px',
            padding: '3rem',
            backdropFilter: 'blur(15px)'
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 style={{ 
            color: '#FF6B35', 
            fontSize: '2rem', 
            marginBottom: '1rem',
            fontWeight: '600'
          }}>
            Stay Updated
          </h3>
          <p style={{ 
            fontSize: '1.1rem', 
            color: 'rgba(250, 250, 248, 0.8)',
            marginBottom: '2rem'
          }}>
            Subscribe to our newsletter for the latest insights in AI and technology.
          </p>
          <button style={{
            padding: '1rem 2rem',
            background: 'linear-gradient(45deg, #FF6B35, #00D9FF)',
            border: 'none',
            borderRadius: '12px',
            color: '#1a0033',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}>
            Subscribe Now
          </button>
        </motion.div>
      </div>
      
      {/* Footer Navigation */}
      <FooterNavigation />
    </div>
  )
}

export default BlogPage