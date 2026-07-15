'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Testimonial } from '@/data/testimonials'

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
  autoplay?: boolean
}

export default function TestimonialCarousel({
  testimonials,
  autoplay = true,
}: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)

  const testimonial = testimonials[current]

  return (
    <div className="w-full">
      <div className="bg-card border border-border rounded-lg p-8 md:p-10">
        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-accent text-accent" />
          ))}
        </div>

        {/* Quote */}
        <p className="text-lg md:text-xl text-foreground mb-6 leading-relaxed italic">
          &ldquo;{testimonial.testimonial}&rdquo;
        </p>

        {/* Author */}
        <div className="flex items-center justify-between pt-6 border-t border-border">
          <div>
            <p className="font-semibold text-foreground">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">
              {testimonial.title} at {testimonial.company}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="text-sm text-muted-foreground min-w-12 text-center">
              {current + 1}/{testimonials.length}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
