export interface Testimonial {
  id: string
  name: string
  title: string
  company: string
  testimonial: string
  avatar?: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Chioma Adeyemi',
    title: 'Founder & CEO',
    company: 'TechVenture Solutions',
    testimonial:
      'Adah Radah made our business registration seamless. What we thought would be a complicated process took just 5 days. Their team was professional and kept us informed every step of the way. Highly recommended!',
  },
  {
    id: '2',
    name: 'Emeka Okonkwo',
    title: 'Managing Director',
    company: 'Green Agro Enterprises',
    testimonial:
      'We needed NAFDAC and SON certification for our agricultural products. Adah Radah not only handled the registrations but provided excellent guidance on compliance requirements. They saved us months of back-and-forth.',
  },
  {
    id: '3',
    name: 'Aisha Mohammed',
    title: 'Executive Director',
    company: 'Hope Foundation Nigeria',
    testimonial:
      'Getting our NGO registered was simple thanks to Adah Radah. They explained every step clearly and helped us achieve tax-exempt status. Their ongoing compliance support gives us peace of mind.',
  },
  {
    id: '4',
    name: 'Chinedu Uche',
    title: 'Founder',
    company: 'Digital Marketing Hub',
    testimonial:
      'After registering my business name, I needed trademark protection for my brand. Adah Radah handled everything professionally. My trademark is now protected, and my brand is secure.',
  },
  {
    id: '5',
    name: 'Fola Adebayo',
    title: 'Operations Manager',
    company: 'Continental Imports Ltd',
    testimonial:
      'As an import business, compliance was critical. Adah Radah set up our TIN, SCUML registration, and ongoing compliance. Their expertise saved us from potential regulatory issues.',
  },
  {
    id: '6',
    name: 'Grace Obi',
    title: 'Business Owner',
    company: 'Grace\'s Beauty Store',
    testimonial:
      'I started with just a business name registration, and now Adah Radah helps me with my annual returns every year. They\'re reliable, affordable, and always available when I need them.',
  },
]

export function getRandomTestimonials(count: number = 3): Testimonial[] {
  const shuffled = [...testimonials].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, testimonials.length))
}
