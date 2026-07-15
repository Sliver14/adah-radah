import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import FAQAccordion from '@/components/FAQAccordion'
import { faqs, faqCategories, getFAQsByCategory } from '@/data/faqs'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'FAQs | Adah Radah - Business Registration Questions',
  description: 'Find answers to common questions about business registration, trademark protection, NGO registration, and compliance services.',
}

export default function FAQsPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about our services and business registration process.
          </p>
        </div>
      </section>

      {/* FAQs by Category */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-16">
            {faqCategories.map((category) => {
              const categoryFAQs = getFAQsByCategory(category)
              return (
                <div key={category}>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">{category}</h2>
                  <FAQAccordion items={categoryFAQs} />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-card/50">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Still Have Questions?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Can't find the answer you&apos;re looking for? Our team is here to help. Reach out to us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="https://wa.me/2348069204009?text=Hello%20Adah%20Radah%2C%20I%20have%20a%20question" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-primary/20 hover:border-primary w-full">
                Chat on WhatsApp
              </Button>
            </a>
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
            Let us help you navigate the registration process with ease.
          </p>
          <Link href="/services">
            <Button className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-medium py-3 px-8 h-auto text-base">
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
