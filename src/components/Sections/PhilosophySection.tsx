import React from 'react'
import { motion } from 'framer-motion'
import { Heading, Text } from '../Typography/Typography'
import { SriYantra, FloatingEquation } from '../SacredGeometry/SacredPatterns'
import contentData from '../../data/content.json'

const PhilosophySection: React.FC = () => {
  const { expertise } = contentData

  const timelineItems = [
    { 
      period: "3000 BCE", 
      title: "Vedic Mathematics", 
      description: "Ancient Indian mathematical principles and algorithms",
      equation: "√2 = 1 + 1/(2 + 1/(2 + 1/(2 + ...)))"
    },
    { 
      period: "500 BCE", 
      title: "Zero & Infinity", 
      description: "Revolutionary concepts that transformed mathematics",
      equation: "∞ × 0 = indeterminate"
    },
    { 
      period: "1950 CE", 
      title: "Computing Dawn", 
      description: "First electronic computers emerge",
      equation: "2ⁿ = exponential growth"
    },
    { 
      period: "2023 CE", 
      title: "AI Renaissance", 
      description: "Modern AI transforms ancient wisdom into quantum solutions",
      equation: "AI + ॐ = Trinetra"
    }
  ]

  return (
    <section id="philosophy" className="relative py-20 overflow-hidden">
      {/* Background Sacred Geometry */}
      <div className="absolute inset-0 opacity-10">
        <SriYantra 
          size={600} 
          color="#FF6B35" 
          className="top-0 left-1/2 transform -translate-x-1/2" 
        />
      </div>

      {/* Floating Equations */}
      <FloatingEquation 
        equation="ॐ = consciousness" 
        className="top-20 right-10"
        color="#00D9FF"
      />
      <FloatingEquation 
        equation="∇²ψ = quantum field" 
        className="bottom-20 left-10"
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
            Where Ancient Wisdom Meets <span className="text-ethereal-cyan">Quantum Computing</span>
          </Heading>
          <Text variant="large" className="max-w-3xl mx-auto">
            {expertise.description}
          </Text>
        </motion.div>

        {/* Interactive Timeline */}
        <div className="relative mb-20">
          {/* Timeline Line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-sacred-saffron to-ethereal-cyan"
            style={{ height: '100%' }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 2, ease: 'easeOut' }}
            viewport={{ once: true }}
          />

          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Content */}
              <motion.div
                className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-gradient-to-br from-cosmic-purple/50 to-ethereal-cyan/10 backdrop-blur-sm rounded-lg p-6 border border-ethereal-cyan/20">
                  <Text variant="mono" className="text-sacred-saffron mb-2">
                    {item.period}
                  </Text>
                  <Heading level={4} className="mb-3 text-ethereal-cyan">
                    {item.title}
                  </Heading>
                  <Text variant="body" className="mb-3">
                    {item.description}
                  </Text>
                  <Text variant="mono" className="text-ethereal-cyan/80 text-xs">
                    {item.equation}
                  </Text>
                </div>
              </motion.div>

              {/* Timeline Node */}
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-sacred-saffron to-ethereal-cyan rounded-full border-4 border-cosmic-purple z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.5 }}
              />

              {/* Empty space for opposite side */}
              <div className="w-5/12" />
            </motion.div>
          ))}
        </div>

        {/* Founders Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Heading level={3} className="mb-12 text-sacred-saffron">
            Our AI Veterans
          </Heading>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {expertise.founders.map((founder, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Founder Node as Constellation */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <motion.div
                    className="w-full h-full bg-gradient-to-r from-sacred-saffron/20 to-ethereal-cyan/20 rounded-full border border-ethereal-cyan/40 flex items-center justify-center"
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 0 30px rgba(0, 217, 255, 0.5)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Constellation pattern inside */}
                    <div className="relative">
                      <div className="w-3 h-3 bg-ethereal-cyan rounded-full absolute -top-6 -left-4" />
                      <div className="w-2 h-2 bg-sacred-saffron rounded-full absolute -top-2 left-6" />
                      <div className="w-4 h-4 bg-ethereal-cyan rounded-full" />
                      <div className="w-2 h-2 bg-sacred-saffron rounded-full absolute top-6 -left-2" />
                      <div className="w-3 h-3 bg-ethereal-cyan rounded-full absolute top-4 right-4" />
                      
                      {/* Connection lines */}
                      <svg className="absolute inset-0 w-20 h-20 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" viewBox="0 0 80 80">
                        <line x1="20" y1="20" x2="40" y2="40" stroke="#00D9FF" strokeWidth="1" opacity="0.6" />
                        <line x1="40" y1="40" x2="60" y2="25" stroke="#00D9FF" strokeWidth="1" opacity="0.6" />
                        <line x1="40" y1="40" x2="35" y2="60" stroke="#FF6B35" strokeWidth="1" opacity="0.6" />
                        <line x1="40" y1="40" x2="65" y2="55" stroke="#FF6B35" strokeWidth="1" opacity="0.6" />
                      </svg>
                    </div>
                  </motion.div>
                </div>

                <Heading level={5} className="mb-2">
                  {founder.name}
                </Heading>
                <Text variant="body" className="text-sacred-saffron mb-4">
                  {founder.role}
                </Text>
                
                {/* Expertise Areas */}
                <div className="flex flex-wrap justify-center gap-2">
                  {founder.expertise.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="px-3 py-1 bg-ethereal-cyan/20 text-ethereal-cyan text-sm rounded-full border border-ethereal-cyan/30"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.2 + skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 217, 255, 0.3)' }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Credentials */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-wrap justify-center gap-4">
              {expertise.credentials.map((credential, index) => (
                <motion.div
                  key={index}
                  className="px-4 py-2 bg-sacred-saffron/20 text-sacred-saffron text-sm rounded-lg border border-sacred-saffron/30"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: 'rgba(255, 107, 53, 0.3)'
                  }}
                >
                  {credential}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default PhilosophySection