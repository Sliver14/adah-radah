import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { companyInfo } from '@/data/company'
import { Heart, Target, Zap, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Adah Radah | Business Registration Company',
  description: 'Learn about Adah Radah Company, our mission, vision, and commitment to helping Nigerian entrepreneurs register their businesses legally and efficiently.',
}

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Adah Radah Company</h1>
          <p className="text-xl text-muted-foreground">
            We are passionate about simplifying business registration and helping Nigerian entrepreneurs focus on what matters most - growing their businesses.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Adah Radah Company was founded with a simple but powerful mission: to remove the barriers that prevent Nigerian entrepreneurs from starting their businesses legally and confidently. We recognized that business registration was complicated, time-consuming, and often confusing for first-time business owners.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Over the past {companyInfo.stats.yearsInOperation}, we have successfully helped {companyInfo.stats.businessesRegistered} businesses navigate the registration process with a remarkable {companyInfo.stats.approvalRate} approval rate. From sole traders to NGOs, from tech startups to agricultural enterprises, we have served businesses across every sector of the Nigerian economy.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we remain committed to that original mission: making business registration simple, affordable, and accessible to every entrepreneur in Nigeria.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {companyInfo.mission}
                </p>
              </div>

              <div className="p-8 rounded-lg border border-border bg-card hover:border-secondary/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="h-6 w-6 text-secondary" />
                  <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {companyInfo.vision}
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Our Core Values</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {companyInfo.values.map((value, idx) => {
                  const [title, description] = value.split(' - ')
                  return (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Award className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{title}</h4>
                        <p className="text-sm text-muted-foreground">{description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Why We Exist */}
            <div className="p-8 rounded-lg border border-border bg-card/50">
              <h3 className="text-2xl font-bold text-foreground mb-4">Why We Exist</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We recognize that Nigerian entrepreneurs are the backbone of our economy. Yet many face unnecessary barriers when trying to formalize their businesses. Complex processes, confusing regulations, and lack of clear guidance prevent talented business owners from taking the leap.
                </p>
                <p>
                  We exist to eliminate these barriers. By taking on the administrative complexity, we free our clients to focus on building and growing their businesses. Every entrepreneur deserves professional support in their registration journey, regardless of their background or resources.
                </p>
                <p>
                  Through our work, we contribute to a stronger, more formal, and more transparent Nigerian business ecosystem - benefiting not just our clients, but the entire economy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">By The Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{companyInfo.stats.businessesRegistered}</p>
              <p className="text-muted-foreground">Businesses Registered</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-secondary mb-2">{companyInfo.stats.approvalRate}</p>
              <p className="text-muted-foreground">Approval Rate</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-accent mb-2">{companyInfo.stats.yearsInOperation}</p>
              <p className="text-muted-foreground">Years In Operation</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{companyInfo.stats.averageProcessingTime}</p>
              <p className="text-muted-foreground">Avg. Processing Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-primary/[0.025] overflow-hidden border-t border-border">
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

        <div className="mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Let&apos;s Help You Register Your Business
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join our growing community of successful business owners across Nigeria.
          </p>
          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-base py-3.5 px-8 h-auto rounded-full shadow-md font-semibold">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
