import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'

interface ParticleSystemProps {
  width?: number
  height?: number
  className?: string
  particleCount?: number
  color?: string
}

const ParticleSystem: React.FC<ParticleSystemProps> = ({ 
  width = 800, 
  height = 600,
  className = '',
  particleCount = 200,
  color = '#00D9FF'
}) => {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene>()
  const rendererRef = useRef<THREE.WebGLRenderer>()
  const cameraRef = useRef<THREE.PerspectiveCamera>()
  const particlesRef = useRef<THREE.Points>()

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.z = 10
    cameraRef.current = camera

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setClearColor(0x000000, 0)
    rendererRef.current = renderer
    mountRef.current.appendChild(renderer.domElement)

    // Create particle system
    const createParticles = () => {
      const geometry = new THREE.BufferGeometry()
      const positions = []
      const velocities = []
      const scales = []
      const colors = []

      const colorObj = new THREE.Color(color)
      const colorSaffron = new THREE.Color('#FF6B35')

      for (let i = 0; i < particleCount; i++) {
        // Random positions in 3D space
        positions.push(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20
        )

        // Random velocities
        velocities.push(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02
        )

        // Random scales
        scales.push(Math.random() * 0.5 + 0.1)

        // Random colors between cyan and saffron
        const mixedColor = Math.random() > 0.5 ? colorObj : colorSaffron
        colors.push(mixedColor.r, mixedColor.g, mixedColor.b)
      }

      geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
      geometry.setAttribute('velocity', new THREE.Float32BufferAttribute(velocities, 3))
      geometry.setAttribute('scale', new THREE.Float32BufferAttribute(scales, 1))
      geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))

      // Create particle material
      const material = new THREE.PointsMaterial({
        size: 0.1,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
      })

      const particles = new THREE.Points(geometry, material)
      particlesRef.current = particles
      scene.add(particles)

      return { positions, velocities }
    }

    createParticles()

    // Animation variables
    let time = 0

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      time += 0.016

      if (particlesRef.current) {
        const positionAttribute = particlesRef.current.geometry.getAttribute('position')
        const velocityAttribute = particlesRef.current.geometry.getAttribute('velocity')
        const scaleAttribute = particlesRef.current.geometry.getAttribute('scale')

        // Update particles
        for (let i = 0; i < particleCount; i++) {
          // Get current position and velocity
          const px = positionAttribute.getX(i)
          const py = positionAttribute.getY(i)
          const pz = positionAttribute.getZ(i)
          
          const vx = velocityAttribute.getX(i)
          const vy = velocityAttribute.getY(i)
          const vz = velocityAttribute.getZ(i)

          // Apply constellation-like attraction to nearby particles
          let attractionX = 0, attractionY = 0, attractionZ = 0
          for (let j = 0; j < particleCount; j++) {
            if (i !== j) {
              const dx = positionAttribute.getX(j) - px
              const dy = positionAttribute.getY(j) - py
              const dz = positionAttribute.getZ(j) - pz
              const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)
              
              if (distance < 2 && distance > 0) {
                const force = 0.0001 / distance
                attractionX += (dx / distance) * force
                attractionY += (dy / distance) * force
                attractionZ += (dz / distance) * force
              }
            }
          }

          // Update velocity with attraction and gentle drift
          const newVx = vx + attractionX + Math.sin(time + i * 0.1) * 0.0001
          const newVy = vy + attractionY + Math.cos(time + i * 0.15) * 0.0001
          const newVz = vz + attractionZ + Math.sin(time * 0.5 + i * 0.2) * 0.0001

          velocityAttribute.setX(i, newVx * 0.99) // Slight damping
          velocityAttribute.setY(i, newVy * 0.99)
          velocityAttribute.setZ(i, newVz * 0.99)

          // Update position
          let newX = px + newVx
          let newY = py + newVy
          let newZ = pz + newVz

          // Boundary conditions - wrap around
          if (newX > 10) newX = -10
          if (newX < -10) newX = 10
          if (newY > 10) newY = -10
          if (newY < -10) newY = 10
          if (newZ > 10) newZ = -10
          if (newZ < -10) newZ = 10

          positionAttribute.setX(i, newX)
          positionAttribute.setY(i, newY)
          positionAttribute.setZ(i, newZ)

          // Pulsing scale effect
          const baseScale = scaleAttribute.getX(i)
          const pulseScale = baseScale + Math.sin(time * 3 + i * 0.5) * 0.3
          scaleAttribute.setX(i, Math.max(0.1, pulseScale))
        }

        positionAttribute.needsUpdate = true
        velocityAttribute.needsUpdate = true
        scaleAttribute.needsUpdate = true

        // Gentle rotation of entire particle system
        particlesRef.current.rotation.y += 0.001
        particlesRef.current.rotation.z += 0.0005
      }

      renderer.render(scene, camera)
    }

    animate()

    // Mouse interaction
    const handleMouseMove = (event: MouseEvent) => {
      if (!mountRef.current || !particlesRef.current) return
      
      const rect = mountRef.current.getBoundingClientRect()
      const mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1
      const mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1
      
      // Attract particles to mouse position
      const positionAttribute = particlesRef.current.geometry.getAttribute('position')
      const velocityAttribute = particlesRef.current.geometry.getAttribute('velocity')
      
      for (let i = 0; i < particleCount; i++) {
        const px = positionAttribute.getX(i)
        const py = positionAttribute.getY(i)
        
        const dx = mouseX * 5 - px
        const dy = mouseY * 5 - py
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 3) {
          const force = (3 - distance) * 0.0002
          velocityAttribute.setX(i, velocityAttribute.getX(i) + (dx / distance) * force)
          velocityAttribute.setY(i, velocityAttribute.getY(i) + (dy / distance) * force)
        }
      }
    }

    mountRef.current.addEventListener('mousemove', handleMouseMove)

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return
      const newWidth = mountRef.current.clientWidth
      const newHeight = mountRef.current.clientHeight
      
      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()
      renderer.setSize(newWidth, newHeight)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      if (mountRef.current) {
        mountRef.current.removeEventListener('mousemove', handleMouseMove)
        if (renderer.domElement) {
          mountRef.current.removeChild(renderer.domElement)
        }
      }
      renderer.dispose()
    }
  }, [width, height, particleCount, color])

  return (
    <div 
      ref={mountRef} 
      className={className}
      style={{ width, height }}
    />
  )
}

export default ParticleSystem