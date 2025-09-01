import { useEffect, useState, useRef } from 'react'

interface RevealOptions {
  threshold?: number
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
  distance?: number
  once?: boolean
}

export const useScrollReveal = (options: RevealOptions = {}) => {
  const {
    threshold = 0.1,
    delay = 0,
    duration = 600,
    direction = 'up',
    distance = 50,
    once = true
  } = options

  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!once || !hasAnimated)) {
          setTimeout(() => {
            setIsVisible(true)
            if (once) setHasAnimated(true)
          }, delay)
        } else if (!once && !entry.isIntersecting) {
          setIsVisible(false)
        }
      },
      { threshold }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, delay, once, hasAnimated])

  const getTransform = () => {
    switch (direction) {
      case 'up':
        return `translateY(${distance}px)`
      case 'down':
        return `translateY(-${distance}px)`
      case 'left':
        return `translateX(${distance}px)`
      case 'right':
        return `translateX(-${distance}px)`
      case 'fade':
      default:
        return 'translateY(0px)'
    }
  }

  const style = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0px)' : getTransform(),
    transition: `opacity ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
    willChange: 'transform, opacity'
  }

  return {
    ref: (node: HTMLElement | null) => {
      elementRef.current = node
    },
    isVisible,
    style
  }
}

export const useStaggeredReveal = (count: number, options: RevealOptions & { staggerDelay?: number } = {}) => {
  const { staggerDelay = 100, ...revealOptions } = options
  
  return Array.from({ length: count }, (_, index) => 
    useScrollReveal({
      ...revealOptions,
      delay: (revealOptions.delay || 0) + (index * staggerDelay)
    })
  )
}