'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Check, Copy, Download, MessageSquare } from 'lucide-react'
import type { Service } from '@/data/services'

interface ServiceActionPanelProps {
  service: Service
}

export default function ServiceActionPanel({ service }: ServiceActionPanelProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('0435966811')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownload = () => {
    const content = `
ADAH RADAH COMPANY
==================================
SERVICE: ${service.title.toUpperCase()}
PROCESSING TIME: ${service.timeline}
PRICE: ${service.price || 'Contact us'}

REQUIREMENTS NEEDED FROM YOU:
${service.requirements.map((r, i) => `${i + 1}. ${r}`).join('\n')}

WHAT YOU WILL RECEIVE (DELIVERABLES):
${service.documents.map((d, i) => `- ${d}`).join('\n')}

==================================
PAYMENT DETAILS:
Bank: GTBank
Account Name: Adar Radah Company
Account Number: 0435966811
==================================

How to proceed:
1. Pay the fee to the GTBank account above.
2. Click 'Proceed to WhatsApp' on our website or message +234 806 920 4009.
3. Send your proof of payment and the required documents listed above.
`
    const blob = new Blob([content.trim()], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${service.slug}-requirements.txt`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const whatsappLink = `https://wa.me/2348069204009?text=Hi+Adah+Radah%2C+I+want+to+start+registration+for+${encodeURIComponent(service.title)}.`

  return (
    <div className="space-y-6">
      {/* Account Details Box */}
      <div className="bg-muted/50 rounded-xl p-4 border border-border">
        <h4 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-3">Payment Details</h4>
        <div className="space-y-2 text-sm text-foreground">
          <div className="flex justify-between items-center text-xs">
            <span className="text-muted-foreground font-light">Bank</span>
            <span className="font-semibold text-foreground">GTBank</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-muted-foreground font-light">Account Name</span>
            <span className="font-semibold text-foreground">Adar Radah Company</span>
          </div>
          <div className="flex justify-between items-center gap-2 pt-2 border-t border-border/60 mt-1.5">
            <span className="text-xs text-muted-foreground font-light">Account Number</span>
            <div className="flex items-center gap-1.5">
              <span className="font-mono font-bold text-secondary text-xs">0435966811</span>
              <button 
                onClick={handleCopy}
                className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-all"
                title="Copy Account Number"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-green-600 animate-pulse" /> : <Copy className="h-3.5 w-3.5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-3">
        <Button 
          onClick={handleDownload} 
          variant="outline" 
          className="w-full border-secondary/20 hover:border-secondary text-secondary hover:bg-secondary/5 font-semibold text-xs py-5"
        >
          <Download className="mr-2 h-4 w-4" />
          Download Requirements
        </Button>

        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full"
        >
          <Button className="w-full bg-primary hover:bg-primary/95 text-white font-semibold text-xs py-5 shadow-sm">
            <MessageSquare className="mr-2 h-4 w-4" />
            Proceed to WhatsApp
          </Button>
        </a>
      </div>
    </div>
  )
}
