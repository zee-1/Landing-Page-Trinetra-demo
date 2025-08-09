import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'

interface BrainNeural3DProps {
  width?: number
  height?: number
  className?: string
}

const BrainNeural3D: React.FC<BrainNeural3DProps> = ({ 
  width = 600, 
  height = 500,
  className = ''
}) => {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene>()
  const rendererRef = useRef<THREE.WebGLRenderer>()
  const cameraRef = useRef<THREE.PerspectiveCamera>()
  const brainGroupRef = useRef<THREE.Group>()

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.set(0, 0, 6)
    cameraRef.current = camera

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setClearColor(0x000000, 0)
    rendererRef.current = renderer
    mountRef.current.appendChild(renderer.domElement)

    // Create brain group
    const brainGroup = new THREE.Group()
    brainGroupRef.current = brainGroup

    // Create brain structure with interconnected nodes
    const createNeuralNetwork = () => {
      const nodes: THREE.Mesh[] = []
      const connections: THREE.Line[] = []

      // Node geometry and materials - Professional matte finish
      const nodeGeometry = new THREE.SphereGeometry(0.05, 12, 12)
      const nodeMainMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x00D9FF,
        transparent: true,
        opacity: 0.4,
        fog: false
      })
      const nodeSecondaryMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xFF6B35,
        transparent: true,
        opacity: 0.3,
        fog: false
      })

      // Create brain-like structure with layered nodes
      const layers = [
        { radius: 2, nodes: 12, material: nodeMainMaterial },
        { radius: 1.5, nodes: 8, material: nodeSecondaryMaterial },
        { radius: 1, nodes: 6, material: nodeMainMaterial },
        { radius: 0.5, nodes: 4, material: nodeSecondaryMaterial }
      ]

      layers.forEach((layer, layerIndex) => {
        for (let i = 0; i < layer.nodes; i++) {
          const node = new THREE.Mesh(nodeGeometry, layer.material)
          
          // Position nodes in brain-like formation
          const angle = (i / layer.nodes) * Math.PI * 2
          const phi = Math.acos(-1 + (2 * Math.random())) // Random vertical distribution
          const theta = angle + (Math.random() - 0.5) * 0.5 // Add some randomness
          
          node.position.x = layer.radius * Math.sin(phi) * Math.cos(theta)
          node.position.y = layer.radius * Math.sin(phi) * Math.sin(theta) + (layerIndex - 1.5) * 0.3
          node.position.z = layer.radius * Math.cos(phi)

          nodes.push(node)
          brainGroup.add(node)
        }
      })

      // Create connections between nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const distance = nodes[i].position.distanceTo(nodes[j].position)
          
          if (distance < 1.8) { // Only connect nearby nodes
            const geometry = new THREE.BufferGeometry()
            const positions = [
              nodes[i].position.x, nodes[i].position.y, nodes[i].position.z,
              nodes[j].position.x, nodes[j].position.y, nodes[j].position.z
            ]
            geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
            
            const material = new THREE.LineBasicMaterial({ 
              color: Math.random() > 0.5 ? 0x00D9FF : 0xFF6B35,
              transparent: true,
              opacity: 0.15
            })
            
            const line = new THREE.Line(geometry, material)
            connections.push(line)
            brainGroup.add(line)
          }
        }
      }

      return { nodes, connections }
    }

    const { nodes, connections } = createNeuralNetwork()

    // Add floating mathematical equations as 3D text sprites
    const createEquationSprites = () => {
      const equations = [
        'f(x) = Σ(w·x + b)',
        '∂E/∂w = δ·x',
        'ReLU(x) = max(0,x)',
        'σ(z) = 1/(1+e⁻ᶻ)'
      ]

      equations.forEach((equation, index) => {
        const canvas = document.createElement('canvas')
        const context = canvas.getContext('2d')!
        canvas.width = 256
        canvas.height = 64
        
        context.fillStyle = index % 2 === 0 ? '#00D9FF' : '#FF6B35'
        context.font = '20px monospace'
        context.textAlign = 'center'
        context.fillText(equation, 128, 35)

        const texture = new THREE.CanvasTexture(canvas)
        const spriteMaterial = new THREE.SpriteMaterial({ 
          map: texture,
          transparent: true,
          opacity: 0.4
        })
        const sprite = new THREE.Sprite(spriteMaterial)
        
        // Position equations around the brain
        const angle = (index / equations.length) * Math.PI * 2
        sprite.position.set(
          Math.cos(angle) * 3.5,
          Math.sin(angle) * 2 + (Math.random() - 0.5),
          (Math.random() - 0.5) * 2
        )
        sprite.scale.set(1, 0.25, 1)
        
        brainGroup.add(sprite)
      })
    }

    createEquationSprites()

    // Add tech stack constellation
    const createTechConstellation = () => {
      const techItems = [
        { name: 'React', color: 0x61DAFB, pos: [3, 2, 1] },
        { name: 'Python', color: 0x3776AB, pos: [-3, 1.5, -1] },
        { name: 'TensorFlow', color: 0xFF6F00, pos: [2.5, -2, 0.5] },
        { name: 'PyTorch', color: 0xEE4C2C, pos: [-2.5, -1.5, -0.5] },
        { name: 'AWS', color: 0xFF9900, pos: [0, 3, -2] },
        { name: 'Docker', color: 0x2496ED, pos: [0, -3, 2] }
      ]

      techItems.forEach((tech) => {
        // Create star-like node
        const starGeometry = new THREE.ConeGeometry(0.08, 0.2, 5)
        const starMaterial = new THREE.MeshBasicMaterial({ 
          color: tech.color,
          transparent: true,
          opacity: 0.8
        })
        const star = new THREE.Mesh(starGeometry, starMaterial)
        star.position.set(tech.pos[0], tech.pos[1], tech.pos[2])
        
        brainGroup.add(star)

        // Create label
        const canvas = document.createElement('canvas')
        const context = canvas.getContext('2d')!
        canvas.width = 128
        canvas.height = 32
        
        context.fillStyle = `#${tech.color.toString(16).padStart(6, '0')}`
        context.font = '16px Arial'
        context.textAlign = 'center'
        context.fillText(tech.name, 64, 20)

        const texture = new THREE.CanvasTexture(canvas)
        const spriteMaterial = new THREE.SpriteMaterial({ 
          map: texture,
          transparent: true,
          opacity: 0.9
        })
        const sprite = new THREE.Sprite(spriteMaterial)
        sprite.position.set(tech.pos[0], tech.pos[1] - 0.3, tech.pos[2])
        sprite.scale.set(0.8, 0.2, 1)
        
        brainGroup.add(sprite)
      })
    }

    createTechConstellation()
    scene.add(brainGroup)

    // Animation variables
    let time = 0

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      time += 0.016

      if (brainGroupRef.current) {
        // Rotate the entire brain structure
        brainGroupRef.current.rotation.y += 0.008
        brainGroupRef.current.rotation.x = Math.sin(time * 0.3) * 0.1

        // Animate neural connections
        connections.forEach((connection, index) => {
          const material = connection.material as THREE.LineBasicMaterial
          material.opacity = 0.2 + Math.sin(time * 2 + index * 0.5) * 0.2
        })

        // Animate nodes
        nodes.forEach((node, index) => {
          const scale = 1 + Math.sin(time * 3 + index * 0.3) * 0.2
          node.scale.setScalar(scale)
          
          // Pulse effect
          const material = node.material as THREE.MeshBasicMaterial
          material.opacity = 0.6 + Math.sin(time * 4 + index * 0.5) * 0.3
        })
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

    // Mouse interaction
    const handleMouseMove = (event: MouseEvent) => {
      if (!mountRef.current || !brainGroupRef.current) return
      
      const rect = mountRef.current.getBoundingClientRect()
      const mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1
      const mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1
      
      // Subtle mouse following
      brainGroupRef.current.rotation.y += (mouseX * 0.1 - brainGroupRef.current.rotation.y) * 0.05
      brainGroupRef.current.rotation.x += (mouseY * 0.1 - brainGroupRef.current.rotation.x) * 0.05
    }

    mountRef.current.addEventListener('mousemove', handleMouseMove)

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
  }, [width, height])

  return (
    <div 
      ref={mountRef} 
      className={className}
      style={{ 
        width, 
        height, 
        background: 'linear-gradient(45deg, rgba(0, 217, 255, 0.1), rgba(255, 107, 53, 0.1))',
        border: '2px dashed rgba(0, 217, 255, 0.3)',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}
    >
    </div>
  )
}

export default BrainNeural3D