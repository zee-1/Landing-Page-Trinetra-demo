# Contact Form & Scheduling Setup Guide

This guide will help you set up the contact form email functionality and scheduling integration for your Trinetra AI Solutions landing page.

## 📧 Email Setup with EmailJS

### 1. Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Create a new email service (Gmail, Outlook, etc.)
3. Create an email template for contact form submissions

### 2. Configure EmailJS Template
Create a template with these variables:
```
From: {{from_name}} <{{from_email}}>
Company: {{company}}
To: {{to_email}}

Subject: New Contact Form Submission from {{from_name}}

Hello,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}  
Company: {{company}}
Message: {{message}}

Reply to: {{reply_to}}

---
Sent from Trinetra AI Solutions Website
```

### 3. Update API Configuration
Edit `src/api/contact.ts` and replace:
```typescript
const EMAILJS_SERVICE_ID = 'your_service_id' // Your EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'your_template_id' // Your EmailJS template ID  
const EMAILJS_PUBLIC_KEY = 'your_public_key' // Your EmailJS public key
```

### 4. Switch to EmailJS (Optional)
To use EmailJS instead of the demo version, update the import in `src/hooks/useContactForm.ts`:
```typescript
import { submitContactForm } from '../api/contact' // Use real EmailJS
// import { submitContactFormSimple } from '../api/contact' // Demo version
```

## 📅 Scheduling Setup

### Option 1: Calendly (Recommended)
1. Create a [Calendly](https://calendly.com) account
2. Set up your meeting types (30-min consultation, project discussion, etc.)
3. Update `src/data/content.json`:
```json
{
  "contact": {
    "calendlyLink": "https://calendly.com/your-username/consultation"
  }
}
```

### Option 2: Acuity Scheduling
1. Create an [Acuity Scheduling](https://acuityscheduling.com) account
2. Set up your appointment types
3. Update `src/data/content.json`:
```json
{
  "contact": {
    "acuityLink": "https://your-business.acuityscheduling.com"
  }
}
```

### Option 3: Cal.com (Open Source)
1. Create a [Cal.com](https://cal.com) account
2. Set up your event types  
3. Update `src/data/content.json`:
```json
{
  "contact": {
    "calComLink": "https://cal.com/your-username/meeting"
  }
}
```

## 🔧 Configuration Files

### Update Contact Data
Edit `src/data/content.json`:
```json
{
  "contact": {
    "title": "Get in Touch",
    "subtitle": "Ready to transform your business with AI?",
    "email": "contact@your-domain.com",
    "phone": "+1-234-567-8900", 
    "location": "Your City, Country",
    "calendlyLink": "https://calendly.com/your-username/consultation",
    "acuityLink": "https://your-business.acuityscheduling.com",
    "calComLink": "https://cal.com/your-username/meeting"
  }
}
```

## 🧪 Testing

### Test Contact Form
1. Run `npm run dev`
2. Fill out the contact form with test data
3. Check browser console for form submission logs
4. Verify email delivery (if EmailJS is configured)

### Test Scheduling
1. Click "Schedule Consultation" button
2. Verify modal opens with scheduling options
3. Click on a scheduling platform
4. Confirm external booking page opens

## 🚀 Production Deployment

### Environment Variables (Optional)
For additional security, you can use environment variables:

Create `.env.local`:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id  
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Update `src/api/contact.ts`:
```typescript
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
```

### Build & Deploy
```bash
npm run build
# Deploy the dist/ folder to your hosting platform
```

## 📝 Features Included

✅ **Contact Form**
- Form validation (name, email, message required)
- Real-time error display
- Success/error messages
- Email integration with EmailJS
- Professional styling with animations

✅ **Scheduling Integration**  
- Multiple platform support (Calendly, Acuity, Cal.com)
- Modal interface for platform selection
- Professional consultation descriptions
- Mobile-responsive design

✅ **Data-Driven Content**
- All contact information pulled from JSON files
- Easy to update and maintain
- Consistent branding across sections

## 🔧 Troubleshooting

**Contact form not sending emails:**
- Check EmailJS configuration
- Verify service ID, template ID, and public key
- Check browser console for errors
- Ensure EmailJS service is active

**Scheduling links not working:**
- Verify URLs in `content.json` are correct
- Test scheduling platform links directly
- Check for typos in scheduling URLs

**Build errors:**
- Run `npm install` to ensure all dependencies are installed
- Check TypeScript errors with `npm run build`
- Verify import paths are correct

## 📞 Support

If you need help setting up email or scheduling integration:
1. Check the browser console for error messages
2. Verify all configuration values are correct
3. Test individual components in isolation
4. Contact your development team for advanced configuration

---

🎉 **Your contact form and scheduling system are now ready to transform leads into AI-powered success stories!**