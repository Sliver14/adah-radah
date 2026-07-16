'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Check, Copy, Download, MessageSquare } from 'lucide-react'
import type { Service } from '@/data/services'

interface ServiceActionPanelProps {
  service: Service
  hidePaymentDetails?: boolean
}

export default function ServiceActionPanel({ service, hidePaymentDetails = false }: ServiceActionPanelProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('0435966811')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownload = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const requirementsList = service.requirements.map(r => `<li style="margin-bottom: 8px;">${r}</li>`).join('');
    const deliverablesList = service.documents.map(d => `<li style="margin-bottom: 8px;">${d}</li>`).join('');

    printWindow.document.write(`
      <html>
        <head>
          <title>${service.title} - Requirements</title>
          <style>
            body {
              font-family: system-ui, -apple-system, sans-serif;
              color: #3A0A5C;
              padding: 40px;
              max-width: 650px;
              margin: 0 auto;
              line-height: 1.6;
            }
            .header-logo {
              font-size: 22px;
              font-weight: 800;
              margin-bottom: 25px;
              border-bottom: 2px solid #3A0A5C;
              padding-bottom: 10px;
              text-transform: uppercase;
              letter-spacing: 1px;
            }
            h1 {
              font-size: 20px;
              font-weight: 700;
              margin-bottom: 8px;
            }
            .meta {
              font-size: 13px;
              color: #666;
              margin-bottom: 30px;
              font-weight: 350;
            }
            h2 {
              font-size: 14px;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-top: 25px;
              margin-bottom: 10px;
              border-bottom: 1px solid #e8dbf5;
              padding-bottom: 5px;
            }
            ul {
              margin: 0;
              padding-left: 20px;
              font-size: 13px;
            }
            .payment {
              background: #fcf8ff;
              border: 1px solid #e8dbf5;
              border-radius: 12px;
              padding: 20px;
              margin-top: 40px;
              font-size: 13px;
            }
            .payment-title {
              font-weight: bold;
              text-transform: uppercase;
              font-size: 11px;
              letter-spacing: 0.5px;
              margin-bottom: 12px;
              color: #8a62b8;
            }
            .payment-row {
              display: flex;
              justify-content: space-between;
              margin-bottom: 6px;
              padding-bottom: 6px;
              border-bottom: 1px dashed #f0e6fa;
            }
            .payment-row:last-child {
              border-bottom: none;
              margin-bottom: 0;
              padding-bottom: 0;
            }
            @media print {
              body { padding: 20px; }
            }
          </style>
        </head>
        <body>
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 25px; border-bottom: 2px solid #3A0A5C; padding-bottom: 15px;">
            <img src="/adah-radah.png" alt="Adah Radah Company Logo" style="height: 40px; width: 40px; object-fit: contain;" />
            <span style="font-size: 22px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">Adah Radah Company</span>
          </div>
          <h1>Requirements & Guidelines</h1>
          <div class="meta">
            Service: <strong>${service.title}</strong> &middot; Timeline: <strong>${service.timeline}</strong>
          </div>

          <h2>Required Documents & Information</h2>
          <ul>${requirementsList}</ul>

          <h2>Deliverables (What you will receive)</h2>
          <ul>${deliverablesList}</ul>

          <div class="payment">
            <div class="payment-title">Payment & Processing Details</div>
            <div class="payment-row">
              <span>Bank Name</span>
              <strong>GTBank</strong>
            </div>
            <div class="payment-row">
              <span>Account Name</span>
              <strong>Adar Radah Company</strong>
            </div>
            <div class="payment-row">
              <span>Account Number</span>
              <strong>0435966811</strong>
            </div>
          </div>
          <script>
            window.onload = function() {
              window.print();
              setTimeout(function() {
                window.close();
              }, 500);
            }
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  }

  const whatsappLink = `https://wa.me/2348069204009?text=Hi+Adah+Radah%2C+I+want+to+start+registration+for+${encodeURIComponent(service.title)}.`

  return (
    <div className="space-y-6">
      {/* Account Details Box */}
      {!hidePaymentDetails && (
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
              <div className="flex items-center gap-1.5 justify-end">
                <button 
                  onClick={handleCopy}
                  className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-all mr-0.5"
                  title="Copy Account Number"
                >
                  {copied ? <Check className="h-3.5 w-3.5 text-green-600 animate-pulse" /> : <Copy className="h-3.5 w-3.5" />}
                </button>
                <span className="font-semibold text-foreground">0435966811</span>
              </div>
            </div>
          </div>
        </div>
      )}

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
