import { useState } from 'react'
import { ContactFormData, ContactResponse, submitContactForm } from '../api/contact'

interface FormState {
  name: string
  email: string
  company: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export const useContactForm = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<ContactResponse | null>(null)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Name validation
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formState.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    // Email validation
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required'
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formState.email)) {
        newErrors.email = 'Please enter a valid email address'
      }
    }

    // Message validation
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formState.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormState, value: string) => {
    setFormState(prev => ({ ...prev, [field]: value }))
    
    // Clear error for this field when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }

    // Clear submit result when user makes changes
    if (submitResult) {
      setSubmitResult(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitResult(null)

    try {
      const formData: ContactFormData = {
        name: formState.name.trim(),
        email: formState.email.trim().toLowerCase(),
        company: formState.company.trim(),
        subject: formState.subject.trim(),
        message: formState.message.trim()
      }

      const result = await submitContactForm(formData)
      setSubmitResult(result)

      // Clear form if submission was successful
      if (result.success) {
        setFormState({
          name: '',
          email: '',
          company: '',
          subject: '',
          message: ''
        })
      }
    } catch (error) {
      setSubmitResult({
        success: false,
        message: 'An unexpected error occurred. Please try again.',
        error: 'UNKNOWN_ERROR'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setFormState({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    })
    setErrors({})
    setSubmitResult(null)
    setIsSubmitting(false)
  }

  return {
    formState,
    errors,
    isSubmitting,
    submitResult,
    handleInputChange,
    handleSubmit,
    resetForm
  }
}