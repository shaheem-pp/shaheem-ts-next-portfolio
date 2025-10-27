# EmailJS Security Setup Guide

> 📚 **For detailed technical documentation, see [EMAILJS_SECURITY_DOCS.md](./EMAILJS_SECURITY_DOCS.md)**

## 🔒 Secure Email Configuration

Your EmailJS credentials are now securely stored on the server-side and will never be exposed to the client.

## 📋 Setup Instructions

### 1. Generate New EmailJS Credentials

**IMPORTANT:** Since your previous credentials were leaked, you MUST generate new ones:

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. **Create/Update Email Service:**
   - Navigate to "Email Services"
   - Create a new service or regenerate existing one
   - Note down the new **Service ID**

3. **Create/Update Email Template:**
   - Navigate to "Email Templates"
   - Create a template with these variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{phone}}` - Sender's phone (optional)
     - `{{subject}}` - Email subject
     - `{{message}}` - Email message
     - `{{to_name}}` - Your name (static)
   - Note down the **Template ID**

4. **Regenerate API Keys:**
   - Navigate to "Account" → "General"
   - Click "Regenerate" for your **Public Key**
   - Note down the **Private Key**

5. **Enable Domain Restrictions (IMPORTANT):**
   - Go to "Account" → "Security"
   - Add allowed domains:
     - `localhost` (for development)
     - `shaheem.dev` (your production domain)
     - Any other domains you use
   - This prevents unauthorized use even if keys are exposed

### 2. Configure Local Environment

1. Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and add your NEW EmailJS credentials:
   ```bash
   EMAILJS_SERVICE_ID=service_xxxxxxx
   EMAILJS_TEMPLATE_ID=template_xxxxxxx
   EMAILJS_PUBLIC_KEY=your_public_key
   EMAILJS_PRIVATE_KEY=your_private_key
   ```

3. **NEVER commit `.env.local` to git** (it's already in `.gitignore`)

### 3. Configure Deployment Environment

#### For Vercel:
1. Go to your project on [Vercel Dashboard](https://vercel.com/dashboard)
2. Navigate to: Project Settings → Environment Variables
3. Add the following variables:
   - `EMAILJS_SERVICE_ID`
   - `EMAILJS_TEMPLATE_ID`
   - `EMAILJS_PUBLIC_KEY`
   - `EMAILJS_PRIVATE_KEY`
4. Redeploy your application

#### For Netlify:
1. Go to your site on [Netlify Dashboard](https://app.netlify.com/)
2. Navigate to: Site Settings → Environment Variables
3. Add the same four variables as above
4. Trigger a new deploy

### 4. Test the Contact Form

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to `/contact` page

3. Fill out and submit the form

4. Check:
   - Success message appears
   - Email is received in your inbox
   - No console errors

## 🔐 Security Features Implemented

### ✅ What Was Fixed:

1. **Removed Client-Side Credentials**
   - EmailJS credentials no longer exposed in browser
   - Can't be extracted from JavaScript bundle

2. **Server-Side Email Sending**
   - Email sending happens in Next.js API route
   - Credentials only exist on the server
   - Private key never leaves the server

3. **Input Validation**
   - Email format validation
   - Required field validation
   - Error handling for malformed requests

4. **Environment Variables**
   - Credentials stored in `.env.local` (local)
   - Configured in deployment platform (production)
   - Never committed to version control

5. **Type Safety**
   - TypeScript types for environment variables
   - Type-safe API route handlers
   - Strong typing throughout

## 📁 Files Modified/Created

### Created:
- `src/app/api/send-email/route.ts` - Server-side email API endpoint
- `src/types/env.d.ts` - TypeScript environment variable types
- `.env.local` - Local environment variables (not in git)
- `.env.example` - Template for required environment variables
- `EMAILJS_SETUP.md` - This setup guide

### Modified:
- `src/app/contact/page.tsx` - Updated to use API route instead of client-side emailjs
- `package.json` - Added `@emailjs/nodejs` dependency

## 🚀 How It Works Now

### Old (Insecure) Flow:
```
Browser → EmailJS API (with exposed credentials)
```

### New (Secure) Flow:
```
Browser → Your API Route → EmailJS API (with server-only credentials)
```

## 🔍 Testing Checklist

- [ ] New EmailJS credentials generated
- [ ] Domain restrictions enabled in EmailJS dashboard
- [ ] `.env.local` created with new credentials
- [ ] Development server running successfully
- [ ] Contact form loads without errors
- [ ] Form submission works and shows success message
- [ ] Email received in inbox
- [ ] Environment variables added to deployment platform
- [ ] Production deployment tested

## 🆘 Troubleshooting

### Error: "Email service is not configured"
- Check that all environment variables are set in `.env.local`
- Restart your development server after adding environment variables

### Error: "Failed to send email"
- Verify your EmailJS credentials are correct
- Check that your email service is active in EmailJS dashboard
- Ensure domain restrictions allow your domain

### Form doesn't submit
- Check browser console for errors
- Verify API route is accessible at `/api/send-email`
- Check network tab for failed requests

## 📞 Support

If you encounter any issues:
1. Check the console for error messages
2. Verify all environment variables are set correctly
3. Ensure EmailJS dashboard shows no service issues
4. Check that domain restrictions are properly configured

## 🔄 Next Steps

1. ✅ Delete your old EmailJS service/credentials from the dashboard
2. ✅ Update any other projects that may be using the leaked credentials
3. ✅ Monitor your EmailJS usage dashboard for any suspicious activity
4. ✅ Consider setting up rate limiting on the API route for production

---

**Remember:** Your credentials are now secure, but the best practice is to:
- Rotate credentials regularly
- Use domain restrictions
- Monitor usage patterns
- Never log credentials in production
