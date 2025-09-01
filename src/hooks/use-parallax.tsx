import { useEffect, useState, useCallback } from 'react'

interface ParallaxOptions {
  speed?: number
  direction?: 'up' | 'down'
  disable?: boolean
}

export const useParallax = (options: ParallaxOptions = {}) => {
  const { speed = 0.5, direction = 'up', disable = false } = options
  const [offset, setOffset] = useState(0)

  const handleScroll = useCallback(() => {
    if (disable) return
    
    const scrolled = window.pageYOffset
    const multiplier = direction === 'up' ? -speed : speed
    setOffset(scrolled * multiplier)
  }, [speed, direction, disable])

  useEffect(() => {
    if (disable) return

    // Throttle scroll events for better performance
    let ticking = false
    
    const updatePosition = () => {
      handleScroll()
      ticking = false
    }

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updatePosition)
        ticking = true
      }
    }

    window.addEventListener('scroll', requestTick, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', requestTick)
    }
  }, [handleScroll, disable])

  return { 
    offset,
    transform: `translateY(${offset}px)`,
    style: { transform: `translateY(${offset}px)` }
  }
}

export const useIntersectionParallax = (options: ParallaxOptions & { threshold?: number } = {}) => {
  const { speed = 0.3, direction = 'up', threshold = 0.1, disable = false } = options
  const [isVisible, setIsVisible] = useState(false)
  const [elementRef, setElementRef] = useState<HTMLElement | null>(null)
  const [offset, setOffset] = useState(0)

  const handleScroll = useCallback(() => {
    if (disable || !elementRef || !isVisible) return
    
    const rect = elementRef.getBoundingClientRect()
    const scrolled = window.pageYOffset
    const rate = scrolled * speed
    const multiplier = direction === 'up' ? -1 : 1
    
    setOffset(rate * multiplier)
  }, [elementRef, isVisible, speed, direction, disable])

  useEffect(() => {
    if (!elementRef || disable) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold }
    )

    observer.observe(elementRef)

    return () => {
      observer.disconnect()
    }
  }, [elementRef, threshold, disable])

  useEffect(() => {
    if (disable) return

    let ticking = false
    
    const updatePosition = () => {
      handleScroll()
      ticking = false
    }

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updatePosition)
        ticking = true
      }
    }

    window.addEventListener('scroll', requestTick, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', requestTick)
    }
  }, [handleScroll, disable])

  return { 
    ref: setElementRef,
    offset,
    isVisible,
    transform: `translateY(${offset}px)`,
    style: { transform: `translateY(${offset}px)` }
  }
}