import { renderHook, act } from '@testing-library/react'
import { useParallax } from '@/hooks/use-parallax'

// Mock window methods
Object.defineProperty(window, 'pageYOffset', {
  value: 0,
  writable: true,
})

Object.defineProperty(window, 'requestAnimationFrame', {
  value: (cb: FrameRequestCallback) => setTimeout(cb, 0),
  writable: true,
})

describe('useParallax', () => {
  beforeEach(() => {
    window.pageYOffset = 0
  })

  it('should return initial offset of 0', () => {
    const { result } = renderHook(() => useParallax())
    
    expect(result.current.offset).toBe(0)
    expect(result.current.transform).toBe('translateY(0px)')
  })

  it('should calculate offset based on scroll and speed', async () => {
    const { result } = renderHook(() => useParallax({ speed: 0.5 }))
    
    // Simulate scroll
    act(() => {
      window.pageYOffset = 100
      window.dispatchEvent(new Event('scroll'))
    })

    // Wait for throttled update
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 50))
    })

    expect(result.current.offset).toBe(-50) // 100 * 0.5 * -1 (up direction)
  })

  it('should respect direction parameter', async () => {
    const { result } = renderHook(() => useParallax({ speed: 0.5, direction: 'down' }))
    
    act(() => {
      window.pageYOffset = 100
      window.dispatchEvent(new Event('scroll'))
    })

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 50))
    })

    expect(result.current.offset).toBe(50) // 100 * 0.5 * 1 (down direction)
  })

  it('should not update when disabled', async () => {
    const { result } = renderHook(() => useParallax({ disable: true }))
    
    act(() => {
      window.pageYOffset = 100
      window.dispatchEvent(new Event('scroll'))
    })

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 50))
    })

    expect(result.current.offset).toBe(0)
  })
})