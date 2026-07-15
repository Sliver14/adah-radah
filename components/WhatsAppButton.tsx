'use client'

import { MessageCircle } from 'lucide-react'
import { companyInfo } from '@/data/company'

export default function WhatsAppButton() {
  const whatsappLink = `https://wa.me/${companyInfo.contact.whatsapp.replace(/\D/g, '')}?text=Hello%20Adah%20Radah%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.`

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground px-4 py-3 shadow-lg hover:shadow-xl transition-all hover:scale-105 md:bottom-8 md:right-8 md:px-6 md:py-4"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline text-sm font-medium">Chat with us</span>
    </a>
  )
}
