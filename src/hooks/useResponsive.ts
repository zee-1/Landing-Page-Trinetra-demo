import { useState, useEffect } from 'react'

interface BreakpointSizes {
  mobile: number
  tablet: number
  desktop: number
  large: number
}

const breakpoints: BreakpointSizes = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
  large: 1920
}

export const useResponsive = () => {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)
    handleResize() // Set initial size

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return {
    width: screenSize.width,
    height: screenSize.height,
    isMobile: screenSize.width < breakpoints.tablet,
    isTablet: screenSize.width >= breakpoints.tablet && screenSize.width < breakpoints.desktop,
    isDesktop: screenSize.width >= breakpoints.desktop && screenSize.width < breakpoints.large,
    isLarge: screenSize.width >= breakpoints.large,
    breakpoints
  }
}

export default useResponsive