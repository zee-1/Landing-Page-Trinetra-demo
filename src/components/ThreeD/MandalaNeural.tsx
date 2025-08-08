import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'

interface MandalaNeural3DProps {
  width?: number
  height?: number
  className?: string
}

const MandalaNeural3D: React.FC<MandalaNeural3DProps> = ({ 
  width = 800, 
  height = 600,
  className = ''
}) => {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene>()
  const rendererRef = useRef<THREE.WebGLRenderer>()
  const cameraRef = useRef<THREE.PerspectiveCamera>()
  const mandalaGroupRef = useRef<THREE.Group>()

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.z = 5
    cameraRef.current = camera

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setClearColor(0x000000, 0)
    rendererRef.current = renderer
    mountRef.current.appendChild(renderer.domElement)

    // Create mandala geometry
    const mandalaGroup = new THREE.Group()
    mandalaGroupRef.current = mandalaGroup

    // Create sacred geometry patterns
    const createSacredRing = (radius: number, points: number, color: number) => {
      const geometry = new THREE.BufferGeometry()
      const positions = []
      const indices = []

      // Create vertices for the ring
      for (let i = 0; i < points; i++) {
        const angle = (i / points) * Math.PI * 2
        positions.push(
          Math.cos(angle) * radius,
          Math.sin(angle) * radius,
          0
        )
      }

      // Create indices for lines
      for (let i = 0; i < points; i++) {
        indices.push(i, (i + 1) % points)
      }

      geometry.setIndex(indices)
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))

      const material = new THREE.LineBasicMaterial({ 
        color: color,
        transparent: true,
        opacity: 0.4
      })

      return new THREE.LineSegments(geometry, material)
    }

    // Create multiple rings for mandala effect
    const ring1 = createSacredRing(1, 8, 0x00D9FF) // Ethereal cyan
    const ring2 = createSacredRing(1.5, 12, 0xFF6B35) // Sacred saffron
    const ring3 = createSacredRing(2, 16, 0x00D9FF) // Ethereal cyan

    mandalaGroup.add(ring1, ring2, ring3)

    // Create center point
    const centerGeometry = new THREE.SphereGeometry(0.05, 16, 16)
    const centerMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xFF6B35,
      transparent: true,
      opacity: 0.6
    })
    const centerSphere = new THREE.Mesh(centerGeometry, centerMaterial)
    mandalaGroup.add(centerSphere)

    // Create neural network nodes
    const nodeGeometry = new THREE.SphereGeometry(0.02, 8, 8)
    const nodeMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x00D9FF,
      transparent: true,
      opacity: 0.3
    })

    // Add random neural nodes
    for (let i = 0; i < 20; i++) {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial)
      node.position.set(
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 2
      )
      mandalaGroup.add(node)
    }

    scene.add(mandalaGroup)

    // Animation variables
    let morphProgress = 0
    const morphDuration = 10 // seconds

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      if (mandalaGroupRef.current) {
        // Rotate the entire mandala
        mandalaGroupRef.current.rotation.z += 0.005

        // Morph effect - gradually change opacity and scale
        morphProgress += 0.016 / morphDuration // roughly 60fps
        if (morphProgress > 1) morphProgress = 0

        const morphFactor = Math.sin(morphProgress * Math.PI * 2) * 0.5 + 0.5
        
        // Scale and opacity changes for morphing effect
        ring1.material.opacity = 0.7 + morphFactor * 0.3
        ring2.material.opacity = 0.7 - morphFactor * 0.3
        ring3.material.opacity = 0.7 + morphFactor * 0.2

        ring1.scale.setScalar(1 + morphFactor * 0.2)
        ring2.scale.setScalar(1 - morphFactor * 0.1)
        ring3.scale.setScalar(1 + morphFactor * 0.15)
      }

      renderer.render(scene, camera)
    }

    animate()

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
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [width, height])

  return (
    <div 
      ref={mountRef} 
      className={className}
      style={{ width, height }}
    />
  )
}

export default MandalaNeural3D