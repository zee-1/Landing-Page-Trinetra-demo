import React from 'react'
import { motion } from 'framer-motion'

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6
  children: React.ReactNode
  className?: string
  animate?: boolean
}

export const Heading: React.FC<HeadingProps> = ({ 
  level, 
  children, 
  className = '', 
  animate = false 
}) => {
  const baseClasses = 'font-serif-sacred text-off-white'
  const sizeClasses = {
    1: 'text-6xl md:text-8xl font-bold leading-tight',
    2: 'text-4xl md:text-6xl font-semibold leading-tight',
    3: 'text-3xl md:text-4xl font-medium',
    4: 'text-2xl md:text-3xl font-medium',
    5: 'text-xl md:text-2xl font-normal',
    6: 'text-lg md:text-xl font-normal'
  }

  const Component = `h${level}` as keyof JSX.IntrinsicElements
  const classes = `${baseClasses} ${sizeClasses[level]} ${className}`

  const content = (
    <Component className={classes}>
      {children}
    </Component>
  )

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {content}
      </motion.div>
    )
  }

  return content
}

interface TextProps {
  children: React.ReactNode
  className?: string
  variant?: 'body' | 'large' | 'small' | 'mono'
  animate?: boolean
}

export const Text: React.FC<TextProps> = ({ 
  children, 
  className = '', 
  variant = 'body',
  animate = false 
}) => {
  const variantClasses = {
    body: 'text-base md:text-lg text-off-white/90 font-sans-clean leading-relaxed',
    large: 'text-lg md:text-xl text-off-white/90 font-sans-clean leading-relaxed',
    small: 'text-sm md:text-base text-off-white/80 font-sans-clean',
    mono: 'text-sm md:text-base text-ethereal-cyan font-mono-data'
  }

  const classes = `${variantClasses[variant]} ${className}`

  const content = (
    <p className={classes}>
      {children}
    </p>
  )

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true }}
      >
        {content}
      </motion.div>
    )
  }

  return content
}