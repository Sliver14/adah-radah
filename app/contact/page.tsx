import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import { services } from '@/data/services'
import { companyInfo } from '@/data/company'
import { Mail, MapPin, Phone, Clock, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | Adah Radah',
  description: 'Get in touch with Adah Radah Company for business registration, trademark, and compliance services. Contact via email, phone, or WhatsApp.',
}

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get In Touch</h1>
          <p className="text-xl text-muted-foreground">
            We&apos;re here to help. Reach out with any questions about our services.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Contact Methods */}
            <div className="md:col-span-1 space-y-6">
              {/* Email */}
              <div className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-foreground">Email</h3>
                </div>
                <a
                  href={`mailto:${companyInfo.contact.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  {companyInfo.contact.email}
                </a>
                <p className="text-xs text-muted-foreground mt-2">We typically respond within 24 hours</p>
              </div>

              {/* Phone */}
              <div className="p-6 rounded-lg border border-border bg-card hover:border-secondary/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="h-6 w-6 text-secondary" />
                  <h3 className="font-semibold text-foreground">Phone</h3>
                </div>
                <a
                  href={`tel:${companyInfo.contact.phone}`}
                  className="text-muted-foreground hover:text-secondary transition-colors"
                >
                  {companyInfo.contact.phone}
                </a>
                <p className="text-xs text-muted-foreground mt-2">Mon-Fri, 9 AM - 5 PM WAT</p>
              </div>

              {/* WhatsApp */}
              <div className="p-6 rounded-lg border border-border bg-card hover:border-accent/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="h-6 w-6 text-accent" />
                  <h3 className="font-semibold text-foreground">WhatsApp</h3>
                </div>
                <a
                  href={`https://wa.me/${companyInfo.contact.whatsapp.replace(/\D/g, '')}?text=Hello%20Adah%20Radah%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  {companyInfo.contact.whatsapp}
                </a>
                <p className="text-xs text-muted-foreground mt-2">Instant messaging available</p>
              </div>

              {/* Address */}
              <div className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-foreground">Address</h3>
                </div>
                <p className="text-muted-foreground text-sm">{companyInfo.contact.address}</p>
              </div>

              {/* Hours */}
              <div className="p-6 rounded-lg border border-border bg-card hover:border-secondary/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-6 w-6 text-secondary" />
                  <h3 className="font-semibold text-foreground">Office Hours</h3>
                </div>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>Mon-Fri: 9 AM - 5 PM</p>
                  <p>Saturday: Closed</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="p-8 rounded-lg border border-border bg-card">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
                <ContactForm services={services} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-card/50">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Visit Our Office</h2>
          <div className="w-full h-96 rounded-lg overflow-hidden border border-border bg-muted">
            {/* Google Maps embed would go here */}
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
              <p className="text-muted-foreground text-center px-8">
                <MapPin className="h-12 w-12 mx-auto mb-4 opacity-50" />
                Interactive map would be displayed here
                <br />
                <span className="text-sm">{companyInfo.contact.address}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground text-center mb-12">What Next?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services">
              <div className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer">
                <h3 className="font-semibold text-foreground mb-2">Explore Services</h3>
                <p className="text-sm text-muted-foreground">
                  Browse our comprehensive range of business registration services
                </p>
              </div>
            </Link>
            <Link href="/about">
              <div className="p-6 rounded-lg border border-border bg-card hover:border-secondary/50 hover:shadow-lg transition-all cursor-pointer">
                <h3 className="font-semibold text-foreground mb-2">About Us</h3>
                <p className="text-sm text-muted-foreground">
                  Learn about our company, mission, and why we&apos;re trusted by thousands
                </p>
              </div>
            </Link>
            <Link href="/faqs">
              <div className="p-6 rounded-lg border border-border bg-card hover:border-accent/50 hover:shadow-lg transition-all cursor-pointer">
                <h3 className="font-semibold text-foreground mb-2">FAQs</h3>
                <p className="text-sm text-muted-foreground">
                  Find answers to common questions about registration and compliance
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
