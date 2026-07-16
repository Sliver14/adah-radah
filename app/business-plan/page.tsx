'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { submitContactForm } from '@/lib/actions'
import { AlertCircle, CheckCircle, Loader2, ArrowRight, ArrowLeft } from 'lucide-react'

export default function BusinessPlanWaitlistPage() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: 'Business Plan Builder Waitlist',
    message: 'Please add me to the AI Business Plan Builder waitlist.',
    whatsappConsent: true,
    honeypot: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const result = await submitContactForm(formData)

      if (result.success) {
        setSuccess(true)
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          service: 'Business Plan Builder Waitlist',
          message: 'Please add me to the AI Business Plan Builder waitlist.',
          whatsappConsent: true,
          honeypot: '',
        })
      } else {
        setError(result.error || 'Failed to join waitlist')
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.')
      console.error('[Waitlist] Submission error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl">
        <div className="text-center mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-card/75 hover:bg-card hover:border-primary/20 text-xs font-semibold text-muted-foreground hover:text-primary transition-all duration-300 shadow-sm group mb-6"
          >
            <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-0.5 transition-transform" />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            AI-Powered Business Plan Builder
          </h1>
          <p className="text-base text-muted-foreground">
            Generate a comprehensive, investor-ready plan tailored to your industry, goals, and the Nigerian market in minutes. Join the waitlist and be first to access it.
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
          {success ? (
            <div className="text-center py-8 space-y-4">
              <div className="inline-flex p-3 rounded-full bg-secondary/15 text-secondary mb-2">
                <CheckCircle className="h-10 w-15 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">You&apos;re on the list!</h2>
              <p className="text-muted-foreground text-sm max-w-sm mx-auto">
                Thank you for joining the waitlist. We will notify you via email and WhatsApp as soon as the Business Plan Builder launches.
              </p>
              <div className="pt-6">
                <Link href="/">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                    Return Home
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot */}
              <input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange} hidden aria-hidden="true" />

              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-foreground mb-2">
                  Full Name *
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                  placeholder="John Doe"
                  disabled={loading}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                  placeholder="john@example.com"
                  disabled={loading}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                  Phone Number (WhatsApp) *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                  placeholder="+234 XXX XXX XXXX"
                  disabled={loading}
                />
              </div>

              {error && (
                <div className="flex items-center gap-3 p-4 rounded-lg bg-destructive/10 border border-destructive/30">
                  <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0" />
                  <p className="text-xs text-destructive">{error}</p>
                </div>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Joining...
                  </>
                ) : (
                  <>
                    Join the Waitlist
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                We respect your privacy. Your information is secure and will only be used to update you about the Business Plan Builder.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
