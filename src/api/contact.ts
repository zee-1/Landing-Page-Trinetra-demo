// Contact form API handler
export interface ContactFormData {
  name: string
  email: string
  company: string
  subject: string
  message: string
}

export interface ContactResponse {
  success: boolean
  message: string
  error?: string
}

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_uxr43mi' // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'template_dcoxb8l' // Replace with your EmailJS template ID
const EMAILJS_PUBLIC_KEY = '8Oe0IZZJ8YauPkHZX' // Replace with your EmailJS public key

// Submit contact form using EmailJS
export const submitContactForm = async (formData: ContactFormData): Promise<ContactResponse> => {
  try {
    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      return {
        success: false,
        message: 'Please fill in all required fields.',
        error: 'VALIDATION_ERROR'
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return {
        success: false,
        message: 'Please enter a valid email address.',
        error: 'INVALID_EMAIL'
      }
    }

    // Use EmailJS to send email
    const { default: emailjs } = await import('@emailjs/browser')
    
    const templateParams = {
      name: formData.name,
      time: new Date().toLocaleString(),
      message: `From: ${formData.name} (${formData.email})
Company: ${formData.company || 'Not specified'}
Subject: ${formData.subject || 'General Inquiry'}

Message:
${formData.message}

---
Contact Details:
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not specified'}
Subject: ${formData.subject || 'General Inquiry'}
Submitted: ${new Date().toLocaleString()}`
    }

    console.log('Sending email with params:', templateParams)
    console.log('EmailJS config:', { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY })
    
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    )

    console.log('EmailJS response:', response)

    if (response.status === 200) {
      return {
        success: true,
        message: 'Thank you for your message! We will get back to you within 24 hours. Email sent successfully!'
      }
    } else {
      console.error('EmailJS failed with status:', response.status)
      throw new Error(`EmailJS failed with status: ${response.status}`)
    }
  } catch (error) {
    console.error('Contact form submission error:', error)
    return {
      success: false,
      message: 'Sorry, there was an error sending your message. Please try again or contact us directly.',
      error: 'SEND_ERROR'
    }
  }
}

// Alternative: Simple form submission (for testing without EmailJS)
export const submitContactFormSimple = async (formData: ContactFormData): Promise<ContactResponse> => {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Log form data (in production, this would send to your backend)
    console.log('Contact Form Submission:', {
      timestamp: new Date().toISOString(),
      ...formData
    })

    return {
      success: true,
      message: 'Thank you for your message! We will get back to you within 24 hours.'
    }
  } catch (error) {
    return {
      success: false,
      message: 'Sorry, there was an error. Please try again.',
      error: 'SUBMISSION_ERROR'
    }
  }
}