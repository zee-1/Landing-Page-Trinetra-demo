import React from 'react'
import { motion } from 'framer-motion'

const ImprovedPhilosophySection: React.FC = () => {
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

  const founders = [
    {
      name: "AI Veteran 1",
      role: "Co-Founder & AI Architect",
      expertise: ["Machine Learning", "Neural Networks", "AI Strategy"]
    },
    {
      name: "AI Veteran 2", 
      role: "Co-Founder & Technology Lead", 
      expertise: ["Deep Learning", "Computer Vision", "AI Implementation"]
    }
  ]

  return (
    <section 
      id="philosophy" 
      className="relative py-20 overflow-hidden"
      style={{ 
        background: 'linear-gradient(180deg, #1a0033 0%, #2d1b69 50%, #1a0033 100%)',
        minHeight: '100vh'
      }}
    >
      {/* Floating Equations */}
      <motion.div
        className="absolute top-20 right-10 font-mono opacity-60"
        style={{ color: '#00D9FF' }}
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{ 
          duration: 4, 
          ease: 'easeInOut', 
          repeat: Infinity
        }}
      >
        ॐ = consciousness
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-10 font-mono opacity-60"
        style={{ color: '#FF6B35' }}
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{ 
          duration: 4, 
          ease: 'easeInOut', 
          repeat: Infinity,
          delay: 2
        }}
      >
        ∇²ψ = quantum field
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-4xl md:text-6xl font-semibold leading-tight mb-6"
            style={{ color: '#FAFAF8' }}
          >
            Where Ancient Wisdom Meets{' '}
            <span style={{ color: '#00D9FF' }}>Quantum Computing</span>
          </h2>
          <p 
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: 'rgba(250, 250, 248, 0.9)' }}
          >
            Trinetra is founded by a team of AI veterans, each bringing extensive experience in artificial intelligence to the forefront of our solutions.
          </p>
        </motion.div>

        {/* Interactive Timeline */}
        <div className="relative mb-20">
          {/* Timeline Line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1"
            style={{ 
              height: '100%',
              background: 'linear-gradient(to bottom, #FF6B35, #00D9FF)'
            }}
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
                <div 
                  className="rounded-lg p-6 border backdrop-blur-sm"
                  style={{
                    background: 'linear-gradient(135deg, rgba(26, 0, 51, 0.5), rgba(0, 217, 255, 0.1))',
                    borderColor: 'rgba(0, 217, 255, 0.2)'
                  }}
                >
                  <p 
                    className="font-mono mb-2"
                    style={{ color: '#FF6B35' }}
                  >
                    {item.period}
                  </p>
                  <h4 
                    className="text-2xl md:text-3xl font-medium mb-3"
                    style={{ color: '#00D9FF' }}
                  >
                    {item.title}
                  </h4>
                  <p 
                    className="text-base md:text-lg mb-3 leading-relaxed"
                    style={{ color: 'rgba(250, 250, 248, 0.9)' }}
                  >
                    {item.description}
                  </p>
                  <p 
                    className="font-mono text-xs"
                    style={{ color: 'rgba(0, 217, 255, 0.8)' }}
                  >
                    {item.equation}
                  </p>
                </div>
              </motion.div>

              {/* Timeline Node */}
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 z-10"
                style={{
                  background: 'linear-gradient(45deg, #FF6B35, #00D9FF)',
                  borderColor: '#1a0033'
                }}
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
          <h3 
            className="text-3xl font-medium mb-12"
            style={{ color: '#FF6B35' }}
          >
            Our AI Veterans
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Founder Constellation */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <motion.div
                    className="w-full h-full rounded-full border flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.2), rgba(0, 217, 255, 0.2))',
                      borderColor: 'rgba(0, 217, 255, 0.4)'
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 0 30px rgba(0, 217, 255, 0.5)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Constellation pattern inside */}
                    <div className="relative">
                      <div 
                        className="w-3 h-3 rounded-full absolute -top-6 -left-4"
                        style={{ backgroundColor: '#00D9FF' }}
                      />
                      <div 
                        className="w-2 h-2 rounded-full absolute -top-2 left-6"
                        style={{ backgroundColor: '#FF6B35' }}
                      />
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: '#00D9FF' }}
                      />
                      <div 
                        className="w-2 h-2 rounded-full absolute top-6 -left-2"
                        style={{ backgroundColor: '#FF6B35' }}
                      />
                      <div 
                        className="w-3 h-3 rounded-full absolute top-4 right-4"
                        style={{ backgroundColor: '#00D9FF' }}
                      />
                      
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

                <h5 
                  className="text-xl md:text-2xl font-normal mb-2"
                  style={{ color: '#FAFAF8' }}
                >
                  {founder.name}
                </h5>
                <p 
                  className="text-base md:text-lg mb-4"
                  style={{ color: '#FF6B35' }}
                >
                  {founder.role}
                </p>
                
                {/* Expertise Areas */}
                <div className="flex flex-wrap justify-center gap-2">
                  {founder.expertise.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="px-3 py-1 text-sm rounded-full border"
                      style={{
                        backgroundColor: 'rgba(0, 217, 255, 0.2)',
                        color: '#00D9FF',
                        borderColor: 'rgba(0, 217, 255, 0.3)'
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.2 + skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: 'rgba(0, 217, 255, 0.3)' 
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ImprovedPhilosophySection