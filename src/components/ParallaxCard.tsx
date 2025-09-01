import { ReactNode } from 'react'
import { useIntersectionParallax } from '@/hooks/use-parallax'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Factory } from 'lucide-react'

interface ParallaxCardProps {
  title: string
  description: string
  image?: string
  index: number
  children?: ReactNode
}

export const ParallaxCard = ({ title, description, image, index }: ParallaxCardProps) => {
  // Parallax effect for subtle movement
  const direction = index % 2 === 0 ? 'up' : 'down'
  const { ref: parallaxRef, style: parallaxStyle, isVisible } = useIntersectionParallax({ 
    speed: 0.1, 
    direction,
    threshold: 0.3
  })

  // Reveal animation for entrance effect
  const { ref: revealRef, style: revealStyle } = useScrollReveal({
    direction: 'up',
    distance: 60,
    duration: 800,
    delay: index * 150, // Stagger effect
    threshold: 0.2
  })

  // Combine refs
  const setRefs = (node: HTMLElement | null) => {
    parallaxRef(node)
    revealRef(node)
  }

  // Combine styles with proper transform handling
  const combinedStyle = {
    opacity: revealStyle.opacity,
    transition: revealStyle.transition,
    willChange: 'transform, opacity',
    transform: revealStyle.transform
  }

  return (
    <div ref={setRefs}>
      <Card 
        className={`group hover:shadow-xl transition-all duration-700 cursor-pointer will-change-transform hover:scale-[1.02] ${
          isVisible ? 'opacity-100' : 'opacity-90'
        }`}
        style={combinedStyle}
      >
        <div className="aspect-video rounded-t-lg overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-500">
              <Factory className="h-16 w-16 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
          )}
        </div>
        <CardHeader>
          <CardTitle className="group-hover:text-accent transition-colors duration-300">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  )
}