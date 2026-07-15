'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
  defaultOpen?: number
}

export default function FAQAccordion({ items, defaultOpen = 0 }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState(defaultOpen)

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-accent/5 transition-colors text-left"
          >
            <h3 className="font-semibold text-foreground pr-4">{item.question}</h3>
            <ChevronDown
              className={`h-5 w-5 text-primary flex-shrink-0 transition-transform ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>

          {openIndex === index && (
            <div className="px-6 py-4 border-t border-border bg-accent/5">
              <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
