import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import ContactForm from '@/components/ContactForm'
import FAQAccordion from '@/components/FAQAccordion'
import ServiceCard from '@/components/ServiceCard'
import { getServiceBySlug, getRelatedServices, services } from '@/data/services'
import {
  CheckCircle,
  Clock,
  FileText,
  HelpCircle,
  ArrowRight,
  Award,
  AlertCircle,
} from 'lucide-react'

interface ServicePageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: `${service.title} | Adah Radah`,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
    },
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  const relatedServices = getRelatedServices(slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/services"
            className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1 mb-6 text-sm"
          >
            ← Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{service.title}</h1>
          <p className="text-xl text-muted-foreground mb-8">{service.description}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-3">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-foreground">Timeline: {service.timeline}</span>
            </div>
            {service.price && (
              <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-3">
                <Award className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium text-foreground">Starting from {service.price}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-secondary" />
                  Benefits
                </h2>
                <div className="space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <AlertCircle className="h-6 w-6 text-accent" />
                  Requirements
                </h2>
                <ul className="space-y-3">
                  {service.requirements.map((req, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-sm font-medium text-accent">
                        {idx + 1}
                      </span>
                      <span className="text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Documents Needed */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <FileText className="h-6 w-6 text-primary" />
                  Documents Needed
                </h2>
                <div className="p-6 rounded-lg border border-border bg-card/50">
                  <ul className="space-y-2">
                    {service.documents.map((doc, idx) => (
                      <li key={idx} className="flex gap-2 text-muted-foreground">
                        <span className="text-primary">✓</span>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <HelpCircle className="h-6 w-6 text-secondary" />
                  Frequently Asked Questions
                </h2>
                <FAQAccordion items={service.faqs} />
              </div>
            </div>

            {/* Right Column - Sticky CTA */}
            <div className="lg:col-span-1">
              <div className="rounded-lg border border-border bg-card p-6 sticky top-24 space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Quick Summary</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>Processing: {service.timeline}</span>
                    </div>
                    {service.price && (
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-secondary" />
                        <span>Price: {service.price}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span>{service.documents.length} documents needed</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-4">Ready to proceed?</h3>
                  <ContactForm
                    defaultService={service.title}
                    services={services}
                  />
                </div>

                {/* CTA Button */}
                <Link href="#enquiry-form" className="block">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
                    Start Application
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-card/50">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-12">Related Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((relatedService) => (
                <ServiceCard key={relatedService.id} service={relatedService} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground">
              Our team is ready to help you complete your {service.title} registration smoothly and efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Why Choose Us For {service.title}</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Specialized expertise in {service.title.toLowerCase()}</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>98% approval rate with fast processing</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Complete documentation and support</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Transparent pricing with no hidden fees</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4">
                <Link href="/contact">
                  <Button variant="outline" className="w-full border-primary/20 hover:border-primary">
                    Contact Our Team
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 rounded-lg border border-border bg-card">
              <h3 className="text-xl font-semibold text-foreground mb-6">Send Us an Enquiry</h3>
              <ContactForm
                defaultService={service.title}
                services={services}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
