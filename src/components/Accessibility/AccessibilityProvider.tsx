import React, { createContext, useContext, useState, useEffect } from 'react'

interface AccessibilityState {
  reducedMotion: boolean
  highContrast: boolean
  fontSize: 'normal' | 'large' | 'larger'
  focusVisible: boolean
}

interface AccessibilityContextType {
  state: AccessibilityState
  toggleReducedMotion: () => void
  toggleHighContrast: () => void
  setFontSize: (size: AccessibilityState['fontSize']) => void
  setFocusVisible: (visible: boolean) => void
}

const AccessibilityContext = createContext<AccessibilityContextType | null>(null)

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext)
  if (!context) {
    throw new Error('useAccessibility must be used within AccessibilityProvider')
  }
  return context
}

interface AccessibilityProviderProps {
  children: React.ReactNode
}

export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({ children }) => {
  const [state, setState] = useState<AccessibilityState>({
    reducedMotion: false,
    highContrast: false,
    fontSize: 'normal',
    focusVisible: false
  })

  useEffect(() => {
    // Check system preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)')

    setState(prev => ({
      ...prev,
      reducedMotion: prefersReducedMotion.matches,
      highContrast: prefersHighContrast.matches
    }))

    // Listen for changes
    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      setState(prev => ({ ...prev, reducedMotion: e.matches }))
    }

    const handleHighContrastChange = (e: MediaQueryListEvent) => {
      setState(prev => ({ ...prev, highContrast: e.matches }))
    }

    prefersReducedMotion.addEventListener('change', handleReducedMotionChange)
    prefersHighContrast.addEventListener('change', handleHighContrastChange)

    // Keyboard navigation detection
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setState(prev => ({ ...prev, focusVisible: true }))
      }
    }

    const handleMousedown = () => {
      setState(prev => ({ ...prev, focusVisible: false }))
    }

    document.addEventListener('keydown', handleKeydown)
    document.addEventListener('mousedown', handleMousedown)

    return () => {
      prefersReducedMotion.removeEventListener('change', handleReducedMotionChange)
      prefersHighContrast.removeEventListener('change', handleHighContrastChange)
      document.removeEventListener('keydown', handleKeydown)
      document.removeEventListener('mousedown', handleMousedown)
    }
  }, [])

  useEffect(() => {
    // Apply CSS classes based on accessibility state
    const root = document.documentElement

    // Reduced motion
    if (state.reducedMotion) {
      root.classList.add('reduce-motion')
    } else {
      root.classList.remove('reduce-motion')
    }

    // High contrast
    if (state.highContrast) {
      root.classList.add('high-contrast')
    } else {
      root.classList.remove('high-contrast')
    }

    // Font size
    root.classList.remove('font-large', 'font-larger')
    if (state.fontSize === 'large') {
      root.classList.add('font-large')
    } else if (state.fontSize === 'larger') {
      root.classList.add('font-larger')
    }

    // Focus visible
    if (state.focusVisible) {
      root.classList.add('focus-visible')
    } else {
      root.classList.remove('focus-visible')
    }
  }, [state])

  const toggleReducedMotion = () => {
    setState(prev => ({ ...prev, reducedMotion: !prev.reducedMotion }))
  }

  const toggleHighContrast = () => {
    setState(prev => ({ ...prev, highContrast: !prev.highContrast }))
  }

  const setFontSize = (fontSize: AccessibilityState['fontSize']) => {
    setState(prev => ({ ...prev, fontSize }))
  }

  const setFocusVisible = (focusVisible: boolean) => {
    setState(prev => ({ ...prev, focusVisible }))
  }

  const contextValue: AccessibilityContextType = {
    state,
    toggleReducedMotion,
    toggleHighContrast,
    setFontSize,
    setFocusVisible
  }

  return (
    <AccessibilityContext.Provider value={contextValue}>
      {children}
    </AccessibilityContext.Provider>
  )
}