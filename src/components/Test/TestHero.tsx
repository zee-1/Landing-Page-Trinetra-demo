import React from 'react'

const TestHero: React.FC = () => {
  return (
    <div 
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1a0033 0%, #FF6B35 50%, #00D9FF 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        color: '#FAFAF8',
        textAlign: 'center',
        padding: '20px'
      }}
    >
      <h1 
        style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          marginBottom: '2rem',
          background: 'linear-gradient(45deg, #00D9FF, #FAFAF8, #FF6B35)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}
      >
        Trinetra AI Solutions
      </h1>
      
      <p 
        style={{
          fontSize: '1.5rem',
          marginBottom: '3rem',
          maxWidth: '800px',
          opacity: 0.9
        }}
      >
        Where Process Meets AI
      </p>
      
      <button
        style={{
          padding: '1rem 2rem',
          fontSize: '1.2rem',
          background: 'linear-gradient(45deg, #FF6B35, #00D9FF)',
          border: 'none',
          borderRadius: '10px',
          color: '#1a0033',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 10px 30px rgba(0, 217, 255, 0.3)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)'
          e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 217, 255, 0.5)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)'
          e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 217, 255, 0.3)'
        }}
      >
        Explore Our Solutions
      </button>
      
      {/* Sacred Geometry SVG */}
      <div style={{ position: 'absolute', top: '10%', right: '10%', opacity: 0.3 }}>
        <svg width="200" height="200" viewBox="0 0 200 200">
          <path
            d="M100 20 L160 160 L40 160 Z"
            stroke="#00D9FF"
            strokeWidth="2"
            fill="none"
            style={{
              animation: 'rotate 20s linear infinite'
            }}
          />
          <path
            d="M100 180 L40 40 L160 40 Z"
            stroke="#FF6B35"
            strokeWidth="2"
            fill="none"
            style={{
              animation: 'rotate 20s linear infinite reverse'
            }}
          />
          <circle
            cx="100"
            cy="100"
            r="60"
            stroke="#00D9FF"
            strokeWidth="1"
            fill="none"
            opacity="0.6"
          />
        </svg>
      </div>
      
      {/* Floating Equations */}
      <div 
        style={{
          position: 'absolute',
          top: '30%',
          left: '10%',
          fontFamily: 'monospace',
          color: '#00D9FF',
          opacity: 0.6,
          animation: 'float 4s ease-in-out infinite'
        }}
      >
        P(H|E) = P(E|H)P(H)/P(E)
      </div>
      
      <div 
        style={{
          position: 'absolute',
          bottom: '30%',
          right: '15%',
          fontFamily: 'monospace',
          color: '#FF6B35',
          opacity: 0.6,
          animation: 'float 4s ease-in-out infinite 2s'
        }}
      >
        ॐ = consciousness
      </div>
      
      <style>{`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  )
}

export default TestHero