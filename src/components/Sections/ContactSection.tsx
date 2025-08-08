import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heading, Text } from '../Typography/Typography'
import { SriYantra, FibonacciSpiral, FloatingEquation } from '../SacredGeometry/SacredPatterns'
import contentData from '../../data/content.json'

const ContactSection: React.FC = () => {
  const { contact } = contentData
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setShowSuccess(true)
    setFormData({ name: '', email: '', company: '', message: '' })
    
    setTimeout(() => setShowSuccess(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="relative py-20 overflow-hidden bg-gradient-to-b from-cosmic-purple to-cosmic-purple/90">
      {/* Background Sacred Geometry */}
      <div className="absolute inset-0 opacity-15">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          <SriYantra 
            size={800} 
            color="#00D9FF" 
            className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" 
          />
        </motion.div>
        <FibonacciSpiral 
          size={400} 
          color="#FF6B35" 
          className="top-10 right-10" 
        />
        <FibonacciSpiral 
          size={300} 
          color="#00D9FF" 
          className="bottom-10 left-10" 
        />
      </div>

      {/* Floating Equations */}
      <FloatingEquation 
        equation="connection = f(trust, innovation)" 
        className="top-16 right-20"
        color="#FF6B35"
      />
      <FloatingEquation 
        equation="success = collaboration × expertise" 
        className="top-1/3 left-16"
        color="#00D9FF"
      />
      <FloatingEquation 
        equation="future = Σ(dreams + technology)" 
        className="bottom-20 right-1/4"
        color="#FF6B35"
      />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Heading level={2} className="mb-6">
            {contact.title}
          </Heading>
          <Text variant="large" className="max-w-3xl mx-auto">
            {contact.subtitle}
          </Text>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          
          {/* Left Side - Contact Form */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Glassmorphism Form Container */}
            <div className="relative p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl border border-ethereal-cyan/30 shadow-2xl">
              
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'linear-gradient(45deg, transparent 30%, rgba(0, 217, 255, 0.3) 50%, transparent 70%)',
                  backgroundSize: '200% 200%'
                }}
                animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
                transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
              />

              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                
                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-ethereal-cyan text-sm font-semibold mb-2">
                    Name *
                  </label>
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-cosmic-purple/50 border border-ethereal-cyan/20 rounded-lg text-off-white placeholder-off-white/50 focus:outline-none focus:border-sacred-saffron focus:ring-2 focus:ring-sacred-saffron/20 transition-all duration-300"
                    placeholder="Your full name"
                    whileFocus={{ 
                      scale: 1.02,
                      boxShadow: "0 0 20px rgba(0, 217, 255, 0.2)"
                    }}
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-ethereal-cyan text-sm font-semibold mb-2">
                    Email *
                  </label>
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-cosmic-purple/50 border border-ethereal-cyan/20 rounded-lg text-off-white placeholder-off-white/50 focus:outline-none focus:border-sacred-saffron focus:ring-2 focus:ring-sacred-saffron/20 transition-all duration-300"
                    placeholder="your.email@company.com"
                    whileFocus={{ 
                      scale: 1.02,
                      boxShadow: "0 0 20px rgba(0, 217, 255, 0.2)"
                    }}
                  />
                </motion.div>

                {/* Company Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-ethereal-cyan text-sm font-semibold mb-2">
                    Company
                  </label>
                  <motion.input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-cosmic-purple/50 border border-ethereal-cyan/20 rounded-lg text-off-white placeholder-off-white/50 focus:outline-none focus:border-sacred-saffron focus:ring-2 focus:ring-sacred-saffron/20 transition-all duration-300"
                    placeholder="Your company name"
                    whileFocus={{ 
                      scale: 1.02,
                      boxShadow: "0 0 20px rgba(0, 217, 255, 0.2)"
                    }}
                  />
                </motion.div>

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-ethereal-cyan text-sm font-semibold mb-2">
                    Message *
                  </label>
                  <motion.textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-cosmic-purple/50 border border-ethereal-cyan/20 rounded-lg text-off-white placeholder-off-white/50 focus:outline-none focus:border-sacred-saffron focus:ring-2 focus:ring-sacred-saffron/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your AI transformation needs..."
                    whileFocus={{ 
                      scale: 1.02,
                      boxShadow: "0 0 20px rgba(0, 217, 255, 0.2)"
                    }}
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-sacred-saffron to-ethereal-cyan text-cosmic-purple font-semibold rounded-lg text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={!isSubmitting ? { 
                      scale: 1.02,
                      boxShadow: "0 10px 30px rgba(0, 217, 255, 0.3)"
                    } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <motion.div 
                        className="flex items-center justify-center"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      >
                        <div className="w-6 h-6 border-2 border-cosmic-purple/30 border-t-cosmic-purple rounded-full" />
                        <span className="ml-3">Sending...</span>
                      </motion.div>
                    ) : 'Send Message'}
                  </motion.button>
                </motion.div>
              </form>

              {/* Success Message */}
              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-cosmic-purple/90 backdrop-blur-sm rounded-2xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                  >
                    <div className="text-center">
                      <motion.div
                        className="text-6xl mb-4"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                      >
                        ॐ
                      </motion.div>
                      <Heading level={4} className="mb-2 text-sacred-saffron">
                        Sanskrit Blessing Received
                      </Heading>
                      <Text variant="body" className="text-ethereal-cyan">
                        Your message has been sent successfully
                      </Text>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right Side - Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            
            {/* Contact Methods */}
            <div className="space-y-6">
              
              {/* Email */}
              <motion.div
                className="flex items-center p-6 bg-gradient-to-br from-ethereal-cyan/10 to-transparent rounded-xl border border-ethereal-cyan/20 backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.02,
                  borderColor: 'rgba(0, 217, 255, 0.4)'
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-2xl mr-4">📧</div>
                <div>
                  <Text variant="body" className="font-semibold text-ethereal-cyan">
                    Email
                  </Text>
                  <Text variant="body">
                    {contact.email}
                  </Text>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                className="flex items-center p-6 bg-gradient-to-br from-sacred-saffron/10 to-transparent rounded-xl border border-sacred-saffron/20 backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.02,
                  borderColor: 'rgba(255, 107, 53, 0.4)'
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-2xl mr-4">📞</div>
                <div>
                  <Text variant="body" className="font-semibold text-sacred-saffron">
                    Phone
                  </Text>
                  <Text variant="body">
                    {contact.phone}
                  </Text>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                className="flex items-center p-6 bg-gradient-to-br from-ethereal-cyan/10 to-transparent rounded-xl border border-ethereal-cyan/20 backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.02,
                  borderColor: 'rgba(0, 217, 255, 0.4)'
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-2xl mr-4">📍</div>
                <div>
                  <Text variant="body" className="font-semibold text-ethereal-cyan">
                    Location
                  </Text>
                  <Text variant="body">
                    {contact.location}
                  </Text>
                </div>
              </motion.div>

              {/* Calendar */}
              <motion.div
                className="flex items-center p-6 bg-gradient-to-br from-sacred-saffron/10 to-transparent rounded-xl border border-sacred-saffron/20 backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.02,
                  borderColor: 'rgba(255, 107, 53, 0.4)'
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-2xl mr-4">📅</div>
                <div>
                  <Text variant="body" className="font-semibold text-sacred-saffron">
                    Schedule Consultation
                  </Text>
                  <Text variant="body">
                    {contact.calendlyLink}
                  </Text>
                </div>
              </motion.div>
            </div>

            {/* Constellation Map Placeholder */}
            <motion.div
              className="relative h-48 bg-gradient-to-br from-cosmic-purple/30 to-cosmic-purple/10 backdrop-blur-md rounded-2xl border border-ethereal-cyan/20 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Stylized Constellation Map */}
              <div className="relative">
                <motion.div
                  className="w-3 h-3 bg-sacred-saffron rounded-full absolute"
                  style={{ top: '20px', left: '30px' }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="w-2 h-2 bg-ethereal-cyan rounded-full absolute"
                  style={{ top: '40px', left: '80px' }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div
                  className="w-4 h-4 bg-sacred-saffron rounded-full absolute"
                  style={{ top: '60px', left: '50px' }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                <motion.div
                  className="w-2 h-2 bg-ethereal-cyan rounded-full absolute"
                  style={{ top: '30px', left: '100px' }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                />
                
                {/* Connection lines */}
                <svg className="absolute inset-0 w-32 h-24" viewBox="0 0 128 96">
                  <line x1="30" y1="20" x2="50" y2="60" stroke="#00D9FF" strokeWidth="1" opacity="0.6" />
                  <line x1="50" y1="60" x2="80" y2="40" stroke="#FF6B35" strokeWidth="1" opacity="0.6" />
                  <line x1="80" y1="40" x2="100" y2="30" stroke="#00D9FF" strokeWidth="1" opacity="0.6" />
                </svg>
                
                <Text variant="body" className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center text-ethereal-cyan">
                  Global Reach
                </Text>
              </div>
            </motion.div>

            {/* Download Brochure */}
            <motion.button
              className="w-full py-4 bg-gradient-to-r from-ethereal-cyan/20 to-sacred-saffron/20 border border-ethereal-cyan/30 text-off-white font-semibold rounded-lg transition-all duration-300"
              whileHover={{ 
                scale: 1.02,
                borderColor: 'rgba(0, 217, 255, 0.6)',
                backgroundColor: 'rgba(0, 217, 255, 0.1)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              📄 Download Our Brochure
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection