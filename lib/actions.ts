'use server'

import { contactFormSchema, type ContactFormInput } from './validations'

export async function submitContactForm(data: ContactFormInput) {
  // Validate honeypot (spam protection)
  if (data.honeypot) {
    return { success: false, error: 'Invalid submission' }
  }

  // Validate input
  const result = contactFormSchema.safeParse(data)
  if (!result.success) {
    return { success: false, error: 'Invalid form data' }
  }

  const { fullName, email, phone, service, message, whatsappConsent } = result.data

  try {
    // In production, you would integrate with Resend or another email service
    // For now, we'll log the submission
    console.log('[v0] Contact form submitted:', {
      fullName,
      email,
      phone,
      service,
      message,
      whatsappConsent,
      timestamp: new Date().toISOString(),
    })

    // TODO: Integrate with Resend for email notifications
    // const response = await resend.emails.send({
    //   from: 'noreply@adaradah.com',
    //   to: 'info@adaradah.com',
    //   subject: `New Enquiry: ${service}`,
    //   html: `<p>Name: ${fullName}</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Service: ${service}</p><p>Message: ${message}</p>`,
    // })

    return {
      success: true,
      message: 'Thank you for your enquiry. We will get back to you soon!',
    }
  } catch (error) {
    console.error('[v0] Contact form error:', error)
    return { success: false, error: 'Failed to submit form. Please try again.' }
  }
}
