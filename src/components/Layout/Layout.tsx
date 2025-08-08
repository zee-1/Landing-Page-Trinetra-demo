import React from 'react'
import ConstellationBackground from '../Effects/ConstellationBackground'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-cosmic-purple overflow-x-hidden relative">
      {/* Constellation Background */}
      <ConstellationBackground 
        className="fixed inset-0 z-0"
        starCount={80}
        connectionDistance={120}
        colors={['#00D9FF', '#FF6B35']}
      />
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

export default Layout