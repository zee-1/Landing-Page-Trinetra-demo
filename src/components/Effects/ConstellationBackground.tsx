import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

interface ConstellationBackgroundProps {
  className?: string
  starCount?: number
  connectionDistance?: number
  colors?: string[]
}

const ConstellationBackground: React.FC<ConstellationBackgroundProps> = ({
  className = '',
  starCount = 100,
  connectionDistance = 150,
  colors = ['#00D9FF', '#FF6B35']
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationIdRef = useRef<number>()
  const starsRef = useRef<Array<{
    x: number
    y: number
    z: number
    vx: number
    vy: number
    color: string
    size: number
    opacity: number
    pulsePhase: number
  }>>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')!
    let width = canvas.offsetWidth
    let height = canvas.offsetHeight

    // Set canvas size
    const updateCanvasSize = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * window.devicePixelRatio
      canvas.height = height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
    }

    updateCanvasSize()

    // Initialize stars
    const initStars = () => {
      starsRef.current = []
      for (let i = 0; i < starCount; i++) {
        starsRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: Math.random() * 1000,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          pulsePhase: Math.random() * Math.PI * 2
        })
      }
    }

    initStars()

    // Animation loop
    let time = 0
    const animate = () => {
      time += 0.016
      ctx.clearRect(0, 0, width, height)

      // Update and draw stars
      starsRef.current.forEach((star, index) => {
        // Update position
        star.x += star.vx
        star.y += star.vy
        star.pulsePhase += 0.02

        // Wrap around screen
        if (star.x < 0) star.x = width
        if (star.x > width) star.x = 0
        if (star.y < 0) star.y = height
        if (star.y > height) star.y = 0

        // Pulsing effect
        const pulse = Math.sin(star.pulsePhase) * 0.3 + 0.7
        const currentSize = star.size * pulse
        const currentOpacity = star.opacity * pulse

        // Draw star
        ctx.beginPath()
        ctx.arc(star.x, star.y, currentSize, 0, Math.PI * 2)
        ctx.fillStyle = `${star.color}${Math.floor(currentOpacity * 255).toString(16).padStart(2, '0')}`
        ctx.fill()

        // Add glow effect
        ctx.beginPath()
        ctx.arc(star.x, star.y, currentSize * 2, 0, Math.PI * 2)
        const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, currentSize * 2)
        gradient.addColorStop(0, `${star.color}${Math.floor(currentOpacity * 0.3 * 255).toString(16).padStart(2, '0')}`)
        gradient.addColorStop(1, `${star.color}00`)
        ctx.fillStyle = gradient
        ctx.fill()
      })

      // Draw connections
      ctx.strokeStyle = colors[0] + '40' // Semi-transparent
      ctx.lineWidth = 1
      
      for (let i = 0; i < starsRef.current.length; i++) {
        for (let j = i + 1; j < starsRef.current.length; j++) {
          const star1 = starsRef.current[i]
          const star2 = starsRef.current[j]
          
          const dx = star1.x - star2.x
          const dy = star1.y - star2.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < connectionDistance) {
            const opacity = (connectionDistance - distance) / connectionDistance * 0.5
            ctx.strokeStyle = `${colors[Math.floor(Math.random() * colors.length)]}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`
            
            ctx.beginPath()
            ctx.moveTo(star1.x, star1.y)
            ctx.lineTo(star2.x, star2.y)
            ctx.stroke()
          }
        }
      }

      // Add sacred geometry overlay
      ctx.strokeStyle = colors[1] + '20'
      ctx.lineWidth = 1
      const centerX = width / 2
      const centerY = height / 2
      const radius = Math.min(width, height) * 0.2

      // Draw rotating sacred geometry
      ctx.save()
      ctx.translate(centerX, centerY)
      ctx.rotate(time * 0.1)
      
      // Draw hexagon
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius
        if (i === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.closePath()
      ctx.stroke()
      
      // Draw inner circle
      ctx.beginPath()
      ctx.arc(0, 0, radius * 0.5, 0, Math.PI * 2)
      ctx.stroke()
      
      ctx.restore()

      animationIdRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Mouse interaction
    let mouseX = 0, mouseY = 0
    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = event.clientX - rect.left
      mouseY = event.clientY - rect.top

      // Attract nearby stars to mouse
      starsRef.current.forEach(star => {
        const dx = mouseX - star.x
        const dy = mouseY - star.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 100 && distance > 0) {
          const force = (100 - distance) * 0.0001
          star.vx += (dx / distance) * force
          star.vy += (dy / distance) * force
        }
      })
    }

    canvas.addEventListener('mousemove', handleMouseMove)

    // Resize handler
    const handleResize = () => {
      updateCanvasSize()
      initStars() // Reinitialize stars for new dimensions
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
      canvas.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [starCount, connectionDistance, colors])

  return (
    <motion.canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ width: '100%', height: '100%' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    />
  )
}

export default ConstellationBackground