import React from 'react'
import { motion } from 'framer-motion'

interface SriYantraProps {
  size?: number
  color?: string
  animate?: boolean
  className?: string
}

export const SriYantra: React.FC<SriYantraProps> = ({ 
  size = 200, 
  color = '#00D9FF', 
  animate = true,
  className = ''
}) => {
  return (
    <motion.div 
      className={`absolute ${className}`}
      animate={animate ? { rotate: 360 } : {}}
      transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
    >
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
        <g opacity="0.6">
          {/* Outer triangles */}
          <motion.path
            d="M100 20 L160 160 L40 160 Z"
            stroke={color}
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
          <motion.path
            d="M100 180 L40 40 L160 40 Z"
            stroke={color}
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: 'easeInOut', delay: 0.5 }}
          />
          
          {/* Inner sacred geometry */}
          <motion.circle
            cx="100"
            cy="100"
            r="60"
            stroke={color}
            strokeWidth="0.5"
            fill="none"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 1 }}
          />
          
          {/* Central point */}
          <motion.circle
            cx="100"
            cy="100"
            r="3"
            fill={color}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 2 }}
          />
        </g>
      </svg>
    </motion.div>
  )
}

interface FibonacciSpiralProps {
  size?: number
  color?: string
  animate?: boolean
  className?: string
}

export const FibonacciSpiral: React.FC<FibonacciSpiralProps> = ({ 
  size = 150, 
  color = '#FF6B35', 
  animate = true,
  className = ''
}) => {
  return (
    <motion.div 
      className={`absolute ${className}`}
      animate={animate ? { rotate: -360 } : {}}
      transition={{ duration: 25, ease: 'linear', repeat: Infinity }}
    >
      <svg width={size} height={size} viewBox="0 0 150 150" fill="none">
        <motion.path
          d="M75 75 Q60 60 45 75 Q30 90 45 105 Q60 120 75 105 Q90 90 105 105 Q120 120 135 105 Q150 90 135 75 Q120 60 105 75"
          stroke={color}
          strokeWidth="2"
          fill="none"
          opacity="0.7"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: 'easeInOut' }}
        />
      </svg>
    </motion.div>
  )
}

interface MathEquationProps {
  equation: string
  color?: string
  className?: string
  animate?: boolean
}

export const FloatingEquation: React.FC<MathEquationProps> = ({ 
  equation, 
  color = '#00D9FF', 
  className = '',
  animate = true
}) => {
  return (
    <motion.div
      className={`absolute text-mono-data text-sm opacity-60 ${className}`}
      style={{ color }}
      animate={animate ? { 
        y: [0, -20, 0],
        opacity: [0.4, 0.8, 0.4]
      } : {}}
      transition={{ 
        duration: 4, 
        ease: 'easeInOut', 
        repeat: Infinity,
        repeatType: 'reverse'
      }}
    >
      {equation}
    </motion.div>
  )
}