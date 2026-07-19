'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { services } from '@/data/services'
import { faqs, faqCategories } from '@/data/faqs'
import { testimonials } from '@/data/testimonials'
import { companyInfo } from '@/data/company'
import ServiceCard from '@/components/ServiceCard'
import FAQAccordion from '@/components/FAQAccordion'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import { ArrowRight, CheckCircle, Clock, Users, Zap, Award, FileCheck, TrendingUp, Download, BookOpen, Video, PhoneCall, ShieldCheck, Globe, Building2, MessageSquare } from 'lucide-react'

export default function HomePage() {
  const featuredServices = services.slice(0, 4)
  const homepageFAQs = faqs
  const randomTestimonials = testimonials.slice(0, 3)

  return (
    <div className="w-full">      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-18 lg:py-24 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.08]"
          style={{
            backgroundImage:
              "url('/Network connecting dot polygon background _ Premium Photo.jpg')",
          }}
        />

        {/* Gradient overlay for mobile impact */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.08] via-transparent to-background/50" />

        {/* Content */}
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Mobile: At a Glance Card comes first on mobile for visual impact */}
            <div className="order-first md:order-last bg-gradient-to-br from-card to-card/95 border border-border/50 rounded-2xl p-5 sm:p-6 shadow-xl max-w-md mx-auto w-full hover:shadow-2xl transition-shadow">
              <p className="text-xs font-bold uppercase tracking-wider text-secondary mb-4 block">
                At a glance
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="p-4 rounded-xl border border-border/80 bg-background/50 flex items-start gap-3 hover:bg-background/70 transition-colors">
                  <div className="text-primary mt-0.5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>

                  <div>
                    <div className="text-lg font-bold text-foreground">1500+</div>
                    <div className="text-[10px] text-muted-foreground">
                      Businesses Served
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-border/80 bg-background/50 flex items-start gap-3 hover:bg-background/70 transition-colors">
                  <div className="text-[#008069] mt-0.5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>

                  <div>
                    <div className="text-lg font-bold text-foreground">98%</div>
                    <div className="text-[10px] text-muted-foreground">
                      Approval Rate
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-border/80 bg-background/50 flex items-start gap-3 hover:bg-background/70 transition-colors">
                  <div className="text-secondary mt-0.5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>

                  <div>
                    <div className="text-lg font-bold text-foreground">72hrs</div>
                    <div className="text-[10px] text-muted-foreground">
                      Avg. Turnaround
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-border/80 bg-background/50 flex items-start gap-3 hover:bg-background/70 transition-colors">
                  <div className="text-[#008069] mt-0.5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  </div>

                  <div>
                    <div className="text-lg font-bold text-foreground">16+</div>
                    <div className="text-[10px] text-muted-foreground">
                      States Covered
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Left: Copy */}
            <div className="space-y-4 sm:space-y-6 order-last md:order-first">
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <span className="h-[2px] w-6 bg-secondary inline-block"></span>
                <span className="text-[10px] md:text-xs font-medium uppercase tracking-wider text-secondary">
                  CAC &middot; Trademark &middot; Compliance &middot; Advisory
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
                Build on Solid Ground.
                <br />
                <em className="italic font-serif text-primary">
                  Register Your Business
                </em>
                <br />
                <span className="text-secondary">Today.</span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed font-light">
                You have put in the work. The customers are coming. The money is
                moving. But without proper registration, a trademark, and legal
                structure, everything you have built could be at risk.
                We have helped over 1,500 Nigerian entrepreneurs fix this properly and
                without leaving their house.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <a
                  href="#services"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 font-semibold transition-all text-sm shadow-lg hover:shadow-xl hover:scale-105"
                >
                  See Our Services
                </a>

                <a
                  href="https://wa.me/2348069204009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-primary/20 hover:border-primary px-6 py-3 font-semibold text-foreground transition-all text-sm bg-card/50 hover:bg-card hover:shadow-md"
                >
                  Talk to an Advisor
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Bar Section */}
      <div className="bg-muted/70 py-4 border-b border-border text-xs text-muted-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-4 text-center">
          <span className="font-bold text-foreground uppercase tracking-wider text-[10px]">Why choose us</span>
          <span className="h-3 w-px bg-border hidden md:inline-block"></span>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#008069]"></span>
              Accredited CAC Agent - 5081957
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#008069]"></span>
              Trademark Registration Expert
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#008069]"></span>
              No Hidden Charges
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#008069]"></span>
              Nationwide Coverage
            </span>
          </div>
        </div>
      </div>

      {/* Featured Services */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-primary/[0.025] bg-textured border-b border-border" id="services">
        <div className="mx-auto max-w-7xl">
          <div className="text-left mb-12">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-[2px] w-6 bg-secondary inline-block"></span>
              <span className="text-[11px] md:text-sm font-semibold uppercase tracking-wider text-secondary">Our Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
              Comprehensive solutions for all your business registration and compliance needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-left">
            <Link href="/services">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 p-5">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-primary/[0.025] border-t border-border">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-left mb-12">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-[2px] w-6 bg-secondary inline-block"></span>
              <span className="text-[11px] md:text-sm font-semibold uppercase tracking-wider text-secondary">How It Works</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              From Application to Certificate: 3 Simple Steps
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
              No queues, no office visits, no surprises. Choose your service, pay, and we handle everything else.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="p-6 rounded-xl border border-border bg-card hover:shadow-md transition-all relative">
              <div className="text-5xl font-extrabold text-primary/10 mb-4">01</div>
              <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">Choose &amp; submit</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Select your service and fill in a simple form business name, directors, and basic details. 100% online, from any state in Nigeria or abroad. No office visit required.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-xl border border-border bg-card hover:shadow-md transition-all relative">
              <div className="text-5xl font-extrabold text-secondary/10 mb-4">02</div>
              <div className="mb-4 inline-flex p-3 rounded-lg bg-secondary/10 text-secondary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                  <line x1="1" y1="10" x2="23" y2="10"></line>
                </svg>
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">Confirm &amp; pay</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We confirm your order via WhatsApp and send payment details. Work begins immediately after payment no delays, no hidden charges, no surprises.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-xl border border-border bg-card hover:shadow-md transition-all relative">
              <div className="text-5xl font-extrabold text-[#008069]/10 mb-4">03</div>
              <div className="mb-4 inline-flex p-3 rounded-lg bg-[#d1f4cc]/50 text-[#008069]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">We file. You receive.</h3>
              <p className="text-sm text-muted-foreground text-primary leading-relaxed">
                Our experts handle your CAC or FIPO application, follow up until fully approved, and deliver your certificate digitally. You are now official and ready to grow.
              </p>
            </div>
          </div>

          {/* Footer note */}
          <div className="mt-12 text-center flex items-center gap-2 text-sm text-muted-foreground">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
            <span>
              Have questions before you start?{' '}
              <a
                href="https://wa.me/2348069204009"
                className="text-primary font-bold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat with an advisor on WhatsApp &rarr;
              </a>
            </span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20 border-b border-border">
        <div className="mx-auto max-w-7xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <span className="h-[2px] w-6 bg-secondary inline-block"></span>
            <span className="text-[11px] md:text-sm font-semibold uppercase tracking-wider text-secondary">By the numbers</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Adah Radah at a Glance
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl border border-border bg-card text-center hover:shadow-md transition-all">
              <span className="block text-4xl md:text-5xl font-extrabold text-primary mb-2">1500+</span>
              <span className="block font-bold text-foreground text-sm mb-1">Businesses registered</span>
              <span className="block text-xs text-muted-foreground">Across Nigeria & Diaspora</span>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card text-center hover:shadow-md transition-all">
              <span className="block text-4xl md:text-5xl font-extrabold text-[#008069] mb-2">98%</span>
              <span className="block font-bold text-foreground text-sm mb-1">Application approval rate</span>
              <span className="block text-xs text-muted-foreground">CAC & IPO filings</span>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card text-center hover:shadow-md transition-all">
              <span className="block text-4xl md:text-5xl font-extrabold text-secondary mb-2">72hrs</span>
              <span className="block font-bold text-foreground text-sm mb-1">Average turnaround</span>
              <span className="block text-xs text-muted-foreground">Across all services</span>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card text-center hover:shadow-md transition-all">
              <span className="block text-4xl md:text-5xl font-extrabold text-[#008069] mb-2">100%</span>
              <span className="block font-bold text-foreground text-sm mb-1">Online no office visits</span>
              <span className="block text-xs text-muted-foreground">From any state, any device</span>
            </div>
          </div>
        </div>
      </section>



      {/* Real Businesses. Real Results. */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-primary/[0.025] bg-textured border-t border-b border-border">
        <div className="mx-auto max-w-7xl">
          <div className="text-left mb-12">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-[2px] w-6 bg-secondary inline-block"></span>
              <span className="text-[11px] md:text-sm font-semibold uppercase tracking-wider text-secondary">Client Stories</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Real Businesses. Real Results.</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl font-light">
              From Lagos to Kano, Port Harcourt to Abuja and beyond Nigeria&apos;s borders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <span className="text-4xl font-serif text-[#008069]/20 block mb-2 leading-none">&ldquo;</span>
                <div className="flex items-center gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-500 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed font-light mb-6">
                  I had a ready buyer for my product but they needed proof of company registration before they could process the LPO. I called Adah Radah on a Tuesday morning. By the following week I had my RC certificate and the deal went through.
                </p>
              </div>
              <div className="flex items-center gap-3 border-t border-border/60 pt-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                  AA
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground">Aisha Abdullahi</h4>
                  <p className="text-xs text-muted-foreground font-light">Sapphire Tech Solutions &middot; Abuja FCT</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <span className="text-4xl font-serif text-[#008069]/20 block mb-2 leading-none">&ldquo;</span>
                <div className="flex items-center gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-500 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed font-light mb-6">
                  I needed the Nigeria Diaspora Doctors Association properly registered in Nigeria. Adah Radah handled everything remotely, documents, CAC filing, certificate, without me travelling once. The process took two weeks and the communication was excellent throughout.
                </p>
              </div>
              <div className="flex items-center gap-3 border-t border-border/60 pt-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                  DA
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground">Dr. Abubakar Sani</h4>
                  <p className="text-xs text-muted-foreground font-light">Nigeria Diaspora Doctors &middot; Germany &amp; UK</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <span className="text-4xl font-serif text-[#008069]/20 block mb-2 leading-none">&ldquo;</span>
                <div className="flex items-center gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-500 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed font-light mb-6">
                  I am based in Port Harcourt and had tried CAC registration twice before. Adah Radah handled it in 4 days. No stress, no excuses. Truly nationwide.
                </p>
              </div>
              <div className="flex items-center gap-3 border-t border-border/60 pt-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                  CF
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground">Chisom Fidelis</h4>
                  <p className="text-xs text-muted-foreground font-light">GreenWave Logistics &middot; Rivers State</p>
                </div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <span className="text-4xl font-serif text-[#008069]/20 block mb-2 leading-none">&ldquo;</span>
                <div className="flex items-center gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-500 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed font-light mb-6">
                  I had tried to file my trademark twice before, both times I got stuck. Adah Radah handled the full FIPO process for Maslaha Foods in one go. My brand is now legally protected and I operate with confidence no competitor can take my name.
                </p>
              </div>
              <div className="flex items-center gap-3 border-t border-border/60 pt-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                  MK
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground">Mabruka Khalid</h4>
                  <p className="text-xs text-muted-foreground font-light">Maslaha Foods &middot; Kano State</p>
                </div>
              </div>
            </div>

            {/* Testimonial 5 */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <span className="text-4xl font-serif text-[#008069]/20 block mb-2 leading-none">&ldquo;</span>
                <div className="flex items-center gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-500 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed font-light mb-6">
                  Adah Radah handled everything in days. I received my CAC certificate without visiting a single office and the WhatsApp updates at every step gave me complete peace of mind.
                </p>
              </div>
              <div className="flex items-center gap-3 border-t border-border/60 pt-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                  OG
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground">Olalekan Giwa</h4>
                  <p className="text-xs text-muted-foreground font-light">WWide Travels Limited &middot; Lagos State</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-left mb-12">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-[2px] w-6 bg-secondary inline-block"></span>
              <span className="text-[11px] md:text-sm font-semibold uppercase tracking-wider text-secondary">WhatsApp Feeds</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">What Clients Actually Say</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
              Not edited. Not staged. Real WhatsApp messages from real Nigerian business owners.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Mockup 1: Olalekan Giwa */}
            <div className="bg-[#efeae2] border border-[#d1d7db] rounded-2xl overflow-hidden shadow-md font-sans">
              <div className="bg-[#008069] text-white px-4 py-2.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-700 flex items-center justify-center font-bold text-xs text-white">
                    OG
                  </div>
                  <div>
                    <h4 className="font-semibold text-xs leading-tight">Olalekan Giwa</h4>
                    <p className="text-[10px] text-emerald-100">Lagos State</p>
                  </div>
                </div>
                <div className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></div>
              </div>
              <div className="p-3 space-y-3 min-h-[220px]">
                <div className="flex justify-start">
                  <div className="bg-white text-foreground text-xs rounded-lg p-2.5 shadow-sm">
                    <p className="leading-normal">Adah Radah handled everything in days. I received my CAC certificate without visiting a single office and the WhatsApp updates at every step gave me complete peace of mind.</p>
                    <span className="block text-[8px] text-muted-foreground text-right mt-1">11:24 AM</span>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-[#d9fdd3] text-foreground text-xs rounded-lg p-2.5 shadow-sm">
                    <p className="leading-normal">That is awesome! Glad we could deliver the certificate quickly and seamlessly. Congratulations! 🎉</p>
                    <div className="flex items-center justify-end gap-1 mt-1">
                      <span className="text-[8px] text-muted-foreground">11:26 AM</span>
                      <span className="text-sky-500 font-bold text-[10px]">✓✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mockup 2: Aisha Abdullahi */}
            <div className="bg-[#efeae2] border border-[#d1d7db] rounded-2xl overflow-hidden shadow-md font-sans">
              <div className="bg-[#008069] text-white px-4 py-2.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-700 flex items-center justify-center font-bold text-xs text-white">
                    AA
                  </div>
                  <div>
                    <h4 className="font-semibold text-xs leading-tight">Aisha Abdullahi</h4>
                    <p className="text-[10px] text-emerald-100">Abuja FCT</p>
                  </div>
                </div>
                <div className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></div>
              </div>
              <div className="p-3 space-y-3 min-h-[220px]">
                <div className="flex justify-start">
                  <div className="bg-white text-foreground text-xs rounded-lg p-2.5 shadow-sm">
                    <p className="leading-normal">I had a ready buyer for my product but they needed proof of company registration before they could process the LPO. I called Adah Radah on a Tuesday morning.</p>
                    <span className="block text-[8px] text-muted-foreground text-right mt-1">9:15 AM</span>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-white text-foreground text-xs rounded-lg p-2.5 shadow-sm">
                    <p className="leading-normal">By the following week I had my RC certificate and the deal went through. Thanks so much!</p>
                    <span className="block text-[8px] text-muted-foreground text-right mt-1">9:16 AM</span>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-[#d9fdd3] text-foreground text-xs rounded-lg p-2.5 shadow-sm">
                    <p className="leading-normal">Perfect timing! So happy you secured that LPO deal. Best of luck with TechVenture! 👍</p>
                    <div className="flex items-center justify-end gap-1 mt-1">
                      <span className="text-[8px] text-muted-foreground">9:20 AM</span>
                      <span className="text-sky-500 font-bold text-[10px]">✓✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mockup 3: Chisom Fidelis */}
            <div className="bg-[#efeae2] border border-[#d1d7db] rounded-2xl overflow-hidden shadow-md font-sans">
              <div className="bg-[#008069] text-white px-4 py-2.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-700 flex items-center justify-center font-bold text-xs text-white">
                    CF
                  </div>
                  <div>
                    <h4 className="font-semibold text-xs leading-tight">Chisom Fidelis</h4>
                    <p className="text-[10px] text-emerald-100">Rivers State</p>
                  </div>
                </div>
                <div className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></div>
              </div>
              <div className="p-3 space-y-3 min-h-[220px]">
                <div className="flex justify-start">
                  <div className="bg-white text-foreground text-xs rounded-lg p-2.5 shadow-sm">
                    <p className="leading-normal">I am based in Port Harcourt and had tried CAC registration twice before. Adah Radah handled it in 4 days. No stress, no excuses. Truly nationwide.</p>
                    <span className="block text-[8px] text-muted-foreground text-right mt-1">4:02 PM</span>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-[#d9fdd3] text-foreground text-xs rounded-lg p-2.5 shadow-sm">
                    <p className="leading-normal">Outstanding! Thank you for trusting us to get it done right after the previous attempts. We appreciate your support! 🚀</p>
                    <div className="flex items-center justify-end gap-1 mt-1">
                      <span className="text-[8px] text-muted-foreground">4:05 PM</span>
                      <span className="text-sky-500 font-bold text-[10px]">✓✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Resources to Help You Build Smart */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-primary/[0.025] border-t border-b border-border">
        <div className="mx-auto max-w-7xl">
          <div className="text-left mb-12">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-[2px] w-6 bg-secondary inline-block"></span>
              <span className="text-[11px] md:text-sm font-semibold uppercase tracking-wider text-secondary">Free Resources</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Free Resources to Help You Build Smart
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
              Guides, videos, templates, and expert consultations all in one place, all free to access.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Download,
                title: 'Free Downloads',
                description: 'CAC registration checklist, trademark filing guide, 2025 compliance calendar, and NAFDAC FAQ download and keep.',
                buttonText: 'Browse downloads'
              },
              {
                icon: BookOpen,
                title: 'Knowledge Base',
                description: 'Searchable articles covering BN vs RC, what is SCUML, how to file annual returns, trademark classes, and much more.',
                buttonText: 'Search articles'
              },
              {
                icon: Video,
                title: 'Video Library',
                description: 'Short explainer videos on registration, compliance, and business structure. Each one under 5 minutes watch on any device.',
                buttonText: 'Watch videos'
              },
              {
                icon: PhoneCall,
                title: 'Free Consultation',
                description: 'Book a free 30-minute advisory call. We\'ll assess your business needs and recommend the right path no obligation.',
                buttonText: 'Book a call'
              }
            ].map((resource, idx) => {
              const Icon = resource.icon
              return (
                <div key={idx} className="bg-background p-6 rounded-xl border border-border flex flex-col justify-between hover:shadow-md transition-all">
                  <div className="space-y-4">
                    <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-foreground text-lg">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground">{resource.description}</p>
                  </div>
                  <div className="pt-6">
                    <Link href="/contact">
                      <Button variant="outline" size="sm" className="w-full text-xs font-semibold border-secondary/20 hover:border-secondary text-secondary hover:bg-secondary/10">
                        {resource.buttonText} →
                      </Button>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Risk Band Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 bg-secondary border-t border-b border-secondary/15">
        <div className="mx-auto max-w-7xl">
          <div className="bg-primary/[0.06] border border-secondary/15 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl text-left">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/85 animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-white/85">Compliance matters</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Don&apos;t Risk Regulatory Sanctions for Non-Compliance
              </h3>
              <p className="text-sm text-white leading-relaxed font-light">
                Regulatory bodies don&apos;t send warnings they send fines, shutdowns, and prosecution letters. CAC late filing penalties start at ₦50,000. SCUML non-compliance can result in account freezes and criminal prosecution. Compliance is always cheaper than the consequences.
              </p>
            </div>
            <a
              href="https://wa.me/2348069204009?text=Hi+Adah+Radah%2C+I+need+help+with+compliance."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto shrink-0 inline-flex items-center justify-center rounded-full bg-primary text-white hover:bg-primary/90 px-6 py-3.5 font-semibold transition-all text-sm shadow-md"
            >
              Get 100% Compliant &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-primary/[0.025]">
        <div className="mx-auto max-w-7xl">
          <div className="text-left mb-12">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-[2px] w-6 bg-secondary inline-block"></span>
              <span className="text-[11px] md:text-sm font-semibold uppercase tracking-wider text-secondary">Common questions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What People Ask</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl font-light">
              Straightforward answers no jargon.
            </p>
          </div>

          <div className="w-full mx-auto">
            <FAQAccordion items={homepageFAQs} />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-background border-t border-b border-border" id="about">
        <div className="mx-auto max-w-7xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <span className="h-[2px] w-6 bg-secondary inline-block"></span>
            <span className="text-[11px] md:text-sm font-semibold uppercase tracking-wider text-secondary">About Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 leading-tight">
            We Help Nigerian Businesses<br />
            <span className="text-primary">Get Official and Stay That Way</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <img src="/adah-radah.png" alt="Adah Radah Company Logo" className="h-10 w-10 object-contain rounded-lg border border-border" />
                {/* <span className="font-bold text-foreground text-xl">
                  Adah Radah Company
                </span> */}
              </div>

              <div className="border-l-4 border-secondary pl-4 py-1 bg-secondary/5 rounded-r-lg">
                <span className="text-[11px] font-bold uppercase tracking-wider text-secondary block mb-1">Our mission</span>
                <p className="italic text-muted-foreground text-sm">
                  &ldquo;To remove every barrier between a Nigerian entrepreneur and their right to operate a legal, protected, and thriving business.&rdquo;
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'CAC Accredited', desc: 'Certified Corporate Affairs Commission agent' },
                  { label: 'FIPO Registered', desc: 'Trademark & intellectual property experts' },
                  { label: 'Nationwide + Diaspora', desc: 'All 36 states, FCT, and clients abroad' },
                  { label: 'RC: 9269612', desc: 'Registered, compliant, fully accredited' }
                ].map((cred, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-border bg-card hover:shadow-sm transition-all">
                    <p className="font-bold text-sm text-foreground">{cred.label}</p>
                    <p className="text-xs text-muted-foreground mt-1 leading-normal">{cred.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="p-6 border border-border bg-card rounded-2xl shadow-sm space-y-6 md:col-span-1">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary mb-2 block">Services at a glance</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  {
                    category: 'BUSINESS REGISTRATION',
                    items: ['Business Name', 'Limited Liability Company']
                  },
                  {
                    category: 'INCORPORATED TRUSTEES',
                    items: ['NGO, Foundation, Association, Alumni, Charity Organization', 'Religious Organisations']
                  },
                  {
                    category: 'COMPLIANCE',
                    items: ['TIN & REV360', 'SCUML', 'Export License', 'NAFDAC Registration']
                  },
                  {
                    category: 'BRAND PROTECTION',
                    items: ['Trademark', 'Copyright']
                  },
                  {
                    category: 'POST INCORPORATION',
                    items: ['Annual Returns', 'Change of Director', 'Increase Of Share Capital']
                  }
                ].map((sec, idx) => (
                  <div key={idx} className="space-y-2">
                    <h4 className="text-[10px] font-bold tracking-wider text-foreground uppercase border-b border-border/60 pb-1">
                      {sec.category}
                    </h4>
                    <ul className="space-y-1">
                      {sec.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="text-xs text-muted-foreground flex items-start gap-1.5 font-light">
                          <span className="h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0 mt-1.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-primary/[0.025] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.05]"
          style={{
            backgroundImage:
              "url('/Network connecting dot polygon background _ Premium Photo.jpg')",
          }}
        />

        {/* Optional subtle dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/5" />

        {/* Content */}
        <div className="mx-auto max-w-4xl text-center relative z-10 space-y-6">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="h-[2px] w-6 bg-foreground inline-block"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Your next step
            </span>
            <span className="h-[2px] w-6 bg-foreground inline-block"></span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Your Business Deserves
            <br />
            to Be <em className="italic text-secondary font-serif">Official.</em>
          </h2>

          <p className="text-base md:text-lg text-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Join hundreds of Nigerian entrepreneurs and diaspora business owners who
            chose to do it right. Expert handling, transparent pricing, zero office
            visits.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="https://wa.me/2348069204009"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-primary text-white hover:bg-primary/90 px-8 py-3.5 font-bold shadow-md transition-all text-base"
            >
              Start Registration Now
            </a>

            <Link
              href="/business-plan"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border-2 border-secondary hover:border-secondary/40 px-8 py-3 font-bold text-secondary transition-all text-base"
            >
              Join Business Plan Waitlist
            </Link>
          </div>

          <p className="text-xs text-foreground mt-8 pt-4 border-t border-foreground/10 flex flex-wrap items-center justify-center gap-2">
            <span>Questions first?</span>

            <a
              href="https://wa.me/2348069204009"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline font-semibold text-foreground"
            >
              Chat with an advisor &rarr;
            </a>

            <span className="opacity-50">&middot;</span>

            <a
              href="tel:+2348069204009"
              className="hover:underline font-semibold text-foreground"
            >
              +234 806 920 4009
            </a>
          </p>
        </div>
      </section>

    </div>
  )
}
