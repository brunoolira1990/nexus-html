import { renderHook } from '@testing-library/react'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
  }
  
  callback: IntersectionObserverCallback
  
  observe() {
    // Simulate element entering viewport
    setTimeout(() => {
      this.callback([{
        isIntersecting: true,
        intersectionRatio: 1,
        boundingClientRect: {} as DOMRectReadOnly,
        intersectionRect: {} as DOMRectReadOnly,
        rootBounds: {} as DOMRectReadOnly,
        target: {} as Element,
        time: Date.now()
      }], this)
    }, 100)
  }
  
  disconnect() {}
  unobserve() {}
}

describe('useScrollReveal', () => {
  it('should return initial hidden state', () => {
    const { result } = renderHook(() => useScrollReveal())
    
    expect(result.current.isVisible).toBe(false)
    expect(result.current.style.opacity).toBe(0)
  })

  it('should apply correct transform based on direction', () => {
    const { result } = renderHook(() => useScrollReveal({ direction: 'up', distance: 50 }))
    
    expect(result.current.style.transform).toBe('translate3d(0, 50px, 0)')
  })

  it('should apply fade effect when direction is fade', () => {
    const { result } = renderHook(() => useScrollReveal({ direction: 'fade' }))
    
    expect(result.current.style.transform).toBe('translate3d(0, 0, 0)')
  })

  it('should set correct transition properties', () => {
    const { result } = renderHook(() => useScrollReveal({ duration: 800 }))
    
    expect(result.current.style.transition).toBe('all 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94)')
  })
})