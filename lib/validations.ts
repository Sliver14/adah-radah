import { z } from 'zod'

export const contactFormSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number').max(20),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
  whatsappConsent: z.boolean().optional(),
  honeypot: z.string().optional(),
})

export type ContactFormInput = z.infer<typeof contactFormSchema>
