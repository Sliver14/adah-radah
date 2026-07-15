import Link from 'next/link'
import { LucideIcon, ArrowRight } from 'lucide-react'
import * as LucideIcons from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Service } from '@/data/services'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  // Get icon from lucide-react by string name
  const iconName = service.icon as keyof typeof LucideIcons
  const Icon = (LucideIcons[iconName] as unknown as LucideIcon) || LucideIcons.Zap

  return (
    <Link href={`/services/${service.slug}`}>
      <div className="group h-full rounded-lg border border-border bg-card p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer">
        <div className="mb-4">
          <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <Icon className="h-6 w-6" />
          </div>
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {service.shortDescription}
        </p>

        {/* Benefits Preview */}
        <div className="mb-4 space-y-1">
          {service.benefits.slice(0, 2).map((benefit, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
              <p className="text-xs text-muted-foreground line-clamp-1">{benefit}</p>
            </div>
          ))}
        </div>

        {/* Timeline and Price */}
        <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Timeline</p>
            <p className="text-xs font-semibold text-foreground">{service.timeline}</p>
          </div>
          {service.price && (
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Starting From</p>
              <p className="text-xs font-bold text-secondary">{service.price.replace('From ', '')}</p>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}
