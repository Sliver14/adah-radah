import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import ServiceCard from '@/components/ServiceCard'
import { services } from '@/data/services'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services | Adah Radah - Business Registration & Compliance',
  description: 'Explore our comprehensive range of business registration, trademark, NGO registration, and compliance services in Nigeria.',
}

export default function ServicesPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive solutions for business registration, trademark protection, compliance, and consulting. Whatever your business needs, we have a service for it.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-card/50">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Service Categories</h2>

          <div className="space-y-8">
            {/* Category 1: Business Registration */}
            <div className="p-8 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors">
              <h3 className="text-2xl font-bold text-foreground mb-4">Business Registration</h3>
              <p className="text-muted-foreground mb-6">
                Get your business properly registered with the Corporate Affairs Commission (CAC). We handle business name registration, limited company registration, and annual compliance filings.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link href="/services/business-name-registration">
                  <Button variant="outline" size="sm">Business Name</Button>
                </Link>
                <Link href="/services/limited-company-registration">
                  <Button variant="outline" size="sm">Limited Company</Button>
                </Link>
                <Link href="/services/annual-returns-filing">
                  <Button variant="outline" size="sm">Annual Returns</Button>
                </Link>
              </div>
            </div>

            {/* Category 2: Non-Profit & Trusts */}
            <div className="p-8 rounded-lg border border-border bg-card hover:border-secondary/50 transition-colors">
              <h3 className="text-2xl font-bold text-foreground mb-4">Non-Profit & Trusts</h3>
              <p className="text-muted-foreground mb-6">
                Register your NGO, non-profit organization, or incorporated trustees with full legal recognition and tax-exempt status eligibility.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link href="/services/ngo-registration">
                  <Button variant="outline" size="sm">NGO Registration</Button>
                </Link>
                <Link href="/services/incorporated-trustees-registration">
                  <Button variant="outline" size="sm">Incorporated Trustees</Button>
                </Link>
              </div>
            </div>

            {/* Category 3: Intellectual Property */}
            <div className="p-8 rounded-lg border border-border bg-card hover:border-accent/50 transition-colors">
              <h3 className="text-2xl font-bold text-foreground mb-4">Intellectual Property</h3>
              <p className="text-muted-foreground mb-6">
                Protect your brand and intellectual property with professional trademark registration and comprehensive coverage.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link href="/services/trademark-registration">
                  <Button variant="outline" size="sm">Trademark Protection</Button>
                </Link>
              </div>
            </div>

            {/* Category 4: Industry-Specific Registration */}
            <div className="p-8 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors">
              <h3 className="text-2xl font-bold text-foreground mb-4">Industry-Specific Registration</h3>
              <p className="text-muted-foreground mb-6">
                Get specialized registrations for specific industries including pharmaceutical, food, manufacturing, and import/export businesses.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link href="/services/nafdac-registration">
                  <Button variant="outline" size="sm">NAFDAC</Button>
                </Link>
                <Link href="/services/son-registration">
                  <Button variant="outline" size="sm">SON Certification</Button>
                </Link>
                <Link href="/services/scuml-registration">
                  <Button variant="outline" size="sm">SCUML</Button>
                </Link>
                <Link href="/services/tin-registration">
                  <Button variant="outline" size="sm">TIN Registration</Button>
                </Link>
              </div>
            </div>

            {/* Category 5: Consulting & Advisory */}
            <div className="p-8 rounded-lg border border-border bg-card hover:border-secondary/50 transition-colors md:col-span-2 lg:col-span-1">
              <h3 className="text-2xl font-bold text-foreground mb-4">Consulting & Advisory</h3>
              <p className="text-muted-foreground mb-6">
                Get expert guidance and ongoing support for business strategy, compliance, and growth.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link href="/services/business-advisory">
                  <Button variant="outline" size="sm">Business Advisory</Button>
                </Link>
                <Link href="/services/corporate-compliance-services">
                  <Button variant="outline" size="sm">Compliance Services</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why These Services */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Why Choose Our Services?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-4">Fast</div>
              <p className="text-muted-foreground">
                Average 7-day turnaround without compromising quality or accuracy in registration.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-4">Affordable</div>
              <p className="text-muted-foreground">
                Competitive pricing with transparent, no-hidden-fee structure for all services.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-4">Reliable</div>
              <p className="text-muted-foreground">
                98% approval rate with dedicated support throughout your registration journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gradient-to-r from-primary to-secondary/80">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Get Your Business Registered?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Contact us today for a free consultation about which service is right for your business.
          </p>
          <Link href="/contact">
            <Button className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-medium py-3 px-8 h-auto text-base">
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
