// Data Manager - Central hub for all content data
import heroData from './hero.json'
import teamData from './team.json'
import servicesData from './services.json'
import productsData from './products.json'
import contactData from './contact.json'
import companyData from './company.json'
import resourcesData from './resources.json'
import solutionsData from './solutions.json'

// Type definitions for better TypeScript support
export interface HeroData {
  tagline: string
  subtitle: string
  description: string
  visualElements: string[]
}

export interface TeamMember {
  name: string
  role: string
  expertise: string[]
  bio?: string
  image?: string
}

export interface TeamData {
  description: string
  founders: TeamMember[]
  credentials: string[]
  companyValues: {
    title: string
    description: string
    icon: string
  }[]
}

export interface Service {
  id: string
  title: string
  description: string
  benefits: string[]
  icon: string
  detailedDescription?: string
  features?: string[]
}

export interface ServicesData {
  services: Service[]
  whyChoose: {
    title: string
    description: string
    icon: string
  }[]
}

export interface ProductFeature {
  feature: string
  description: string
  icon: string
}

export interface ProductsData {
  hospitality: {
    title: string
    subtitle: string
    description: string
    customer: {
      title: string
      features: ProductFeature[]
    }
    provider: {
      title: string
      features: ProductFeature[]
    }
    visualDemo: string
    benefits: string[]
  }
}

export interface ContactData {
  title: string
  subtitle: string
  email: string
  phone: string
  location: string
  calendlyLink: string
  acuityLink: string
  calComLink: string
  brochure: string
  office: {
    address: string
    hours: string
    timezone: string
  }
  social: {
    linkedin: string
    twitter: string
    github: string
  }
}

export interface CompanyData {
  name: string
  tagline: string
  mission: string
  vision: string
  founded: string
  headquarters: string
  story: {
    title: string
    description: string
    timeline: {
      year: string
      quarter: string
      title: string
      description: string
      milestone: string
    }[]
  }
  philosophy: {
    title: string
    description: string
    principles: {
      title: string
      description: string
    }[]
  }
}

export interface Resource {
  id: string
  title: string
  type: string
  description: string
  downloadUrl: string
  size: string
  format?: string
  pages?: number
  publishedDate: string
  tags: string[]
  icon?: string
  color?: string
  viewUrl?: string
}

export interface ResourcesData {
  title: string
  subtitle: string
  categories: string[]
  resources: Resource[]
  newsletter: {
    title: string
    description: string
    benefits: string[]
  }
}

// Data exports with proper typing
export const hero: HeroData = heroData
export const team: TeamData = teamData
export const services: ServicesData = servicesData
export const products: ProductsData = productsData
export const contact: ContactData = contactData
export const company: CompanyData = companyData
export const resources: ResourcesData = resourcesData
export const solutions = solutionsData

// Combined data object for backward compatibility
export const contentData = {
  hero,
  expertise: team, // Keep the old 'expertise' key for compatibility
  solutions: services, // Keep the old 'solutions' key for compatibility
  product: products,
  contact,
  company,
  resources
}

// Default export for easy importing
export default contentData